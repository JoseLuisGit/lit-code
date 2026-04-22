export type LineEnding = 'LF' | 'CRLF'

export const MAX_DECODE_FILE_BYTES = 50 * 1024 * 1024

export function normalizeLineEndings(text: string, ending: LineEnding): string {
  const lf = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  return ending === 'CRLF' ? lf.replace(/\n/g, '\r\n') : lf
}

export function encodeText(text: string, ending: LineEnding): string {
  const normalized = normalizeLineEndings(text, ending)
  const bytes = new TextEncoder().encode(normalized)
  return btoa(Array.from(bytes, b => String.fromCharCode(b)).join(''))
}

export function encodeFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      resolve(result.split(',')[1] ?? '')
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

export function decodeBase64(base64: string): string {
  const binary = atob(base64.replace(/\s/g, ''))
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

export function decodeFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsText(file)
  })
}

export function downloadAsFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
