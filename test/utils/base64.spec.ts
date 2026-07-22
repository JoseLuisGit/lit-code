import { describe, it, expect } from 'vitest'
import {
  normalizeLineEndings,
  encodeText,
  encodeFile,
  decodeBase64,
  decodeFileContent,
  formatFileSize,
} from '../../src/utils/base64'

describe('normalizeLineEndings', () => {
  it('converts CRLF to LF', () => {
    expect(normalizeLineEndings('a\r\nb', 'LF')).toBe('a\nb')
  })

  it('converts lone CR to LF', () => {
    expect(normalizeLineEndings('a\rb', 'LF')).toBe('a\nb')
  })

  it('converts LF to CRLF', () => {
    expect(normalizeLineEndings('a\nb', 'CRLF')).toBe('a\r\nb')
  })

  it('normalizes mixed endings', () => {
    expect(normalizeLineEndings('a\r\nb\rc\nd', 'LF')).toBe('a\nb\nc\nd')
    expect(normalizeLineEndings('a\r\nb\rc\nd', 'CRLF')).toBe('a\r\nb\r\nc\r\nd')
  })

  it('leaves text without line breaks untouched', () => {
    expect(normalizeLineEndings('plain', 'LF')).toBe('plain')
    expect(normalizeLineEndings('plain', 'CRLF')).toBe('plain')
  })
})

describe('encodeText / decodeBase64', () => {
  it('round-trips ASCII text', () => {
    expect(decodeBase64(encodeText('hello world', 'LF'))).toBe('hello world')
  })

  it('encodes ASCII to the expected base64', () => {
    expect(encodeText('hello', 'LF')).toBe('aGVsbG8=')
  })

  it('round-trips Unicode (emoji and accents)', () => {
    const text = '🎉 mañana — café'
    expect(decodeBase64(encodeText(text, 'LF'))).toBe(text)
  })

  it('produces different output per line ending', () => {
    const lf = encodeText('a\nb', 'LF')
    const crlf = encodeText('a\nb', 'CRLF')
    expect(lf).not.toBe(crlf)
    expect(decodeBase64(crlf)).toBe('a\r\nb')
  })

  it('decode strips embedded whitespace and newlines', () => {
    expect(decodeBase64('aGVs\nbG8=  ')).toBe('hello')
  })

  it('decode throws on invalid base64', () => {
    expect(() => decodeBase64('!!!not-base64!!!')).toThrow()
  })
})

describe('encodeFile / decodeFileContent', () => {
  it('encodeFile resolves the base64 payload of a file', async () => {
    const file = new File(['hello'], 'a.txt', { type: 'text/plain' })
    expect(await encodeFile(file)).toBe(btoa('hello'))
  })

  it('decodeFileContent resolves the file text', async () => {
    const file = new File(['aGVsbG8='], 'a.b64.txt', { type: 'text/plain' })
    expect(await decodeFileContent(file)).toBe('aGVsbG8=')
  })
})

describe('formatFileSize', () => {
  it('formats bytes below 1024', () => {
    expect(formatFileSize(0)).toBe('0 B')
    expect(formatFileSize(1023)).toBe('1023 B')
  })

  it('formats kilobytes from the 1024 boundary', () => {
    expect(formatFileSize(1024)).toBe('1.0 KB')
    expect(formatFileSize(1536)).toBe('1.5 KB')
  })

  it('formats megabytes from the 1024*1024 boundary', () => {
    expect(formatFileSize(1024 * 1024)).toBe('1.0 MB')
    expect(formatFileSize(2.5 * 1024 * 1024)).toBe('2.5 MB')
  })
})
