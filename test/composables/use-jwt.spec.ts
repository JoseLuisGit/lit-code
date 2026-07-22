import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useJwt } from '../../src/composables/use-jwt'
import { makeExampleToken } from '../../src/utils/jwt'

function stubClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  const readText = vi.fn().mockResolvedValue('')
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText, readText },
    configurable: true,
  })
  return { writeText, readText }
}

const validToken = makeExampleToken(
  { alg: 'HS256', typ: 'JWT' },
  { sub: 'user-1', exp: Math.floor(Date.now() / 1000) + 3600 },
)

describe('useJwt — decoding', () => {
  it('starts empty without an error surface', () => {
    const jwt = useJwt()
    expect(jwt.hasToken.value).toBe(false)
    expect(jwt.decoded.value).toBeNull()
    expect(jwt.isValid.value).toBe(false)
  })

  it('decodes a valid token into header, payload, and claims', () => {
    const jwt = useJwt()
    jwt.token.value = validToken
    expect(jwt.isValid.value).toBe(true)
    expect(jwt.decoded.value?.payload.sub).toBe('user-1')
    expect(jwt.claims.value?.status).toBe('valid')
    expect(jwt.error.value).toBeNull()
  })

  it('exposes pretty-printed header and payload JSON', () => {
    const jwt = useJwt()
    jwt.token.value = validToken
    expect(jwt.headerJsonString.value).toContain('"alg": "HS256"')
    expect(jwt.payloadJsonString.value).toContain('"sub": "user-1"')
  })

  it('surfaces decode errors for invalid tokens', () => {
    const jwt = useJwt()
    jwt.token.value = 'not-a-jwt'
    expect(jwt.isValid.value).toBe(false)
    expect(jwt.error.value).toContain('3 parts')
    expect(jwt.claims.value).toBeNull()
  })

  it('loadExample sets the token and clearAll resets', () => {
    const jwt = useJwt()
    jwt.loadExample({ id: 'x', name: 'X', description: '', token: validToken })
    expect(jwt.token.value).toBe(validToken)
    jwt.clearAll()
    expect(jwt.token.value).toBe('')
    expect(jwt.hasCopied.value).toBe(false)
  })
})

describe('useJwt — clipboard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('copyValue writes, tracks the label, and resets after 2s', async () => {
    const { writeText } = stubClipboard()
    const jwt = useJwt()
    await jwt.copyValue('{"a":1}', 'Header')
    expect(writeText).toHaveBeenCalledWith('{"a":1}')
    expect(jwt.copiedLabel.value).toBe('Header')
    expect(jwt.hasCopied.value).toBe(true)
    vi.advanceTimersByTime(2000)
    expect(jwt.hasCopied.value).toBe(false)
  })

  it('copyValue ignores empty values', async () => {
    const { writeText } = stubClipboard()
    const jwt = useJwt()
    await jwt.copyValue('', 'Header')
    expect(writeText).not.toHaveBeenCalled()
  })

  it('pasteFromClipboard trims and applies clipboard text', async () => {
    const { readText } = stubClipboard()
    readText.mockResolvedValue(`  ${validToken}  `)
    const jwt = useJwt()
    await jwt.pasteFromClipboard()
    expect(jwt.token.value).toBe(validToken)
  })

  it('pasteFromClipboard swallows clipboard failures', async () => {
    const { readText } = stubClipboard()
    readText.mockRejectedValue(new Error('denied'))
    const jwt = useJwt()
    await expect(jwt.pasteFromClipboard()).resolves.toBeUndefined()
    expect(jwt.token.value).toBe('')
  })
})
