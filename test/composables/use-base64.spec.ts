import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useBase64 } from '../../src/composables/use-base64'

function stubClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  })
  return writeText
}

describe('useBase64 — processing', () => {
  it('encodes text', async () => {
    const b64 = useBase64()
    b64.inputText.value = 'hello'
    await b64.process()
    expect(b64.outputText.value).toBe('aGVsbG8=')
    expect(b64.error.value).toBeNull()
  })

  it('decodes text', async () => {
    const b64 = useBase64()
    b64.mode.value = 'decode'
    await nextTick() // mode watch clears state
    b64.inputText.value = 'aGVsbG8='
    await b64.process()
    expect(b64.outputText.value).toBe('hello')
  })

  it('reports a friendly error for invalid base64', async () => {
    const b64 = useBase64()
    b64.mode.value = 'decode'
    await nextTick()
    b64.inputText.value = '!!!not-base64!!!'
    await b64.process()
    expect(b64.error.value).toBe('Invalid Base64 input — check the content and try again.')
    expect(b64.outputText.value).toBe('')
  })

  it('rejects oversized files in decode mode', async () => {
    const b64 = useBase64()
    b64.mode.value = 'decode'
    b64.inputType.value = 'file'
    await nextTick()
    const file = new File(['x'], 'big.txt', { type: 'text/plain' })
    Object.defineProperty(file, 'size', { value: 51 * 1024 * 1024 })
    b64.selectedFile.value = file
    await b64.process()
    expect(b64.error.value).toContain('File too large')
    expect(b64.outputText.value).toBe('')
  })

  it('encodes a file to base64', async () => {
    const b64 = useBase64()
    b64.inputType.value = 'file'
    await nextTick()
    b64.selectedFile.value = new File(['hi'], 'a.txt', { type: 'text/plain' })
    await b64.process()
    expect(b64.outputText.value).toBe(btoa('hi'))
  })
})

describe('useBase64 — derived state', () => {
  it('canProcess requires non-blank text in text mode', () => {
    const b64 = useBase64()
    expect(b64.canProcess.value).toBe(false)
    b64.inputText.value = '  '
    expect(b64.canProcess.value).toBe(false)
    b64.inputText.value = 'x'
    expect(b64.canProcess.value).toBe(true)
  })

  it('canProcess requires a file in file mode', async () => {
    const b64 = useBase64()
    b64.inputType.value = 'file'
    await nextTick()
    expect(b64.canProcess.value).toBe(false)
    b64.selectedFile.value = new File(['x'], 'a.txt')
    expect(b64.canProcess.value).toBe(true)
  })

  it('showLineEnding only in encode + text mode', async () => {
    const b64 = useBase64()
    expect(b64.showLineEnding.value).toBe(true)
    b64.mode.value = 'decode'
    await nextTick()
    expect(b64.showLineEnding.value).toBe(false)
  })

  it('showDownload requires output plus file input or decode mode', async () => {
    const b64 = useBase64()
    b64.inputText.value = 'hello'
    await b64.process()
    expect(b64.showDownload.value).toBe(false) // encode + text

    b64.mode.value = 'decode'
    await nextTick()
    b64.inputText.value = 'aGVsbG8='
    await b64.process()
    expect(b64.showDownload.value).toBe(true)
  })

  it('outputFilename adds and strips the .b64.txt suffix', async () => {
    const b64 = useBase64()
    expect(b64.outputFilename.value).toBe('encoded.txt')
    b64.selectedFile.value = new File(['x'], 'photo.png')
    expect(b64.outputFilename.value).toBe('photo.png.b64.txt')

    b64.mode.value = 'decode'
    await nextTick() // clears selectedFile
    expect(b64.outputFilename.value).toBe('decoded.txt')
    b64.selectedFile.value = new File(['x'], 'photo.png.b64.txt')
    expect(b64.outputFilename.value).toBe('photo.png')
  })
})

describe('useBase64 — copy and clearing', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('copyOutput writes to the clipboard and resets hasCopied after 2s', async () => {
    const writeText = stubClipboard()
    const b64 = useBase64()
    b64.inputText.value = 'hello'
    await b64.process()
    await b64.copyOutput()
    expect(writeText).toHaveBeenCalledWith('aGVsbG8=')
    expect(b64.hasCopied.value).toBe(true)
    vi.advanceTimersByTime(2000)
    expect(b64.hasCopied.value).toBe(false)
  })

  it('copyOutput is a no-op without output', async () => {
    const writeText = stubClipboard()
    const b64 = useBase64()
    await b64.copyOutput()
    expect(writeText).not.toHaveBeenCalled()
  })

  it('switching mode clears all state via watch', async () => {
    const b64 = useBase64()
    b64.inputText.value = 'hello'
    await b64.process()
    expect(b64.outputText.value).not.toBe('')

    b64.mode.value = 'decode'
    await nextTick()
    expect(b64.inputText.value).toBe('')
    expect(b64.outputText.value).toBe('')
    expect(b64.error.value).toBeNull()
  })
})
