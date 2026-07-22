import { describe, it, expect } from 'vitest'
import { base64UrlDecode, makeExampleToken, decodeJwt, analyzeClaims } from '../../src/utils/jwt'
import type { JwtPayload } from '../../src/types/jwt'

describe('base64UrlDecode', () => {
  it('decodes standard base64url', () => {
    expect(base64UrlDecode('aGVsbG8')).toBe('hello') // unpadded
  })

  it('maps - and _ back to + and /', () => {
    // btoa('>>?>') = 'Pj4/Pg==' → base64url 'Pj4_Pg'
    expect(base64UrlDecode('Pj4_Pg')).toBe('>>?>')
  })

  it('decodes UTF-8 content (emoji and accents)', () => {
    const encoded = btoa(
      encodeURIComponent('🎉 café').replace(/%([0-9A-F]{2})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      ),
    ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    expect(base64UrlDecode(encoded)).toBe('🎉 café')
  })
})

describe('decodeJwt', () => {
  const header = { alg: 'HS256', typ: 'JWT' }
  const payload = { sub: 'user-1', name: 'Ada' }

  it('round-trips a token built with makeExampleToken', () => {
    const token = makeExampleToken(header, payload)
    const result = decodeJwt(token)
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.header).toEqual(header)
      expect(result.payload).toEqual(payload)
      expect(result.signature.length).toBeGreaterThan(0)
    }
  })

  it('rejects an empty token', () => {
    const result = decodeJwt('   ')
    expect(result).toEqual({ ok: false, error: 'Token is empty.' })
  })

  it('rejects tokens with fewer than 3 parts', () => {
    const result = decodeJwt('abc.def')
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error).toContain('3 parts')
  })

  it('rejects an empty signature part', () => {
    const token = makeExampleToken(header, payload)
    const [h, p] = token.split('.')
    const result = decodeJwt(`${h}.${p}.`)
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error).toContain('Signature')
  })

  it('rejects invalid Base64URL in header and payload', () => {
    const valid = makeExampleToken(header, payload).split('.')
    const badHeader = decodeJwt(`!!!.${valid[1]}.${valid[2]}`)
    expect(badHeader.ok).toBe(false)
    if (!badHeader.ok) expect(badHeader.error).toContain('header encoding')

    const badPayload = decodeJwt(`${valid[0]}.!!!.${valid[2]}`)
    expect(badPayload.ok).toBe(false)
    if (!badPayload.ok) expect(badPayload.error).toContain('payload encoding')
  })

  it('rejects parts that decode to invalid JSON', () => {
    const notJson = btoa('not json').replace(/=+$/, '')
    const valid = makeExampleToken(header, payload).split('.')
    const result = decodeJwt(`${notJson}.${valid[1]}.${valid[2]}`)
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error).toContain('not valid JSON')
  })

  it('keeps extra dots as part of the signature', () => {
    const token = makeExampleToken(header, payload)
    const result = decodeJwt(`${token}.extra`)
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.signature).toContain('.')
  })
})

describe('analyzeClaims', () => {
  const nowMs = 1_750_000_000_000
  const nowSec = nowMs / 1000

  function analyze(payload: JwtPayload) {
    return analyzeClaims(payload, nowMs)
  }

  it('marks tokens with a past exp as expired', () => {
    const claims = analyze({ exp: nowSec - 60 })
    expect(claims.status).toBe('expired')
    expect(claims.statusLabel).toBe('Expired')
  })

  it('marks tokens with a future exp as valid', () => {
    const claims = analyze({ exp: nowSec + 3600 })
    expect(claims.status).toBe('valid')
  })

  it('marks tokens with a future nbf as not yet valid', () => {
    expect(analyze({ exp: nowSec + 3600, nbf: nowSec + 60 }).status).toBe('not-yet')
    expect(analyze({ nbf: nowSec + 60 }).status).toBe('not-yet')
  })

  it('marks nbf-only tokens in the past as valid without exp', () => {
    const claims = analyze({ nbf: nowSec - 60 })
    expect(claims.status).toBe('valid')
    expect(claims.statusLabel).toBe('Valid (no exp)')
  })

  it('reports unknown without exp or nbf', () => {
    const claims = analyze({ sub: 'x' })
    expect(claims.status).toBe('unknown')
  })

  it('builds relative times across units', () => {
    expect(analyze({ exp: nowSec + 30 }).exp?.relative).toBe('in 30s')
    expect(analyze({ exp: nowSec + 120 }).exp?.relative).toBe('in 2m')
    expect(analyze({ iat: nowSec - 7200 }).iat?.relative).toBe('2h ago')
    expect(analyze({ iat: nowSec - 172800 }).iat?.relative).toBe('2d ago')
    expect(analyze({ exp: nowSec + 63072000 }).exp?.relative).toBe('in 2y')
  })

  it('passes through identity claims and defaults them to null', () => {
    const full = analyze({ iss: 'issuer', sub: 'subject', aud: 'aud', jti: 'id-1' })
    expect(full).toMatchObject({ iss: 'issuer', sub: 'subject', aud: 'aud', jti: 'id-1' })

    const empty = analyze({})
    expect(empty.iss).toBeNull()
    expect(empty.exp).toBeNull()
    expect(empty.iat).toBeNull()
    expect(empty.nbf).toBeNull()
  })
})
