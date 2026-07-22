import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { useJsonHighlighter } from '../../src/composables/use-json-highlighter'
import type { Theme } from '../../src/composables/use-theme'

// The highlighter only reads colors.syntaxColors — a minimal stub Theme suffices
const stubTheme = {
  colors: {
    syntaxColors: {
      key: '#k',
      string: '#s',
      number: '#n',
      boolean: '#b',
      null: '#0',
      punctuation: '#p',
    },
  },
} as Theme

function highlight(text: string) {
  return useJsonHighlighter(() => text, () => stubTheme).highlightedHtml.value
}

describe('useJsonHighlighter', () => {
  it('colors keys with bold weight', () => {
    expect(highlight('{"name": "x"}')).toContain(
      '<span style="color:#k;font-weight:600">"name":</span>',
    )
  })

  it('colors string values normally', () => {
    expect(highlight('{"name": "value"}')).toContain(
      '<span style="color:#s;font-weight:400">"value"</span>',
    )
  })

  it('colors booleans and null', () => {
    const html = highlight('[true, false, null]')
    expect(html).toContain('<span style="color:#b;font-weight:400">true</span>')
    expect(html).toContain('<span style="color:#b;font-weight:400">false</span>')
    expect(html).toContain('<span style="color:#0;font-weight:400">null</span>')
  })

  it('colors numbers including negatives, floats, and exponents', () => {
    const html = highlight('[-1.5e3, 42]')
    expect(html).toContain('<span style="color:#n;font-weight:400">-1.5e3</span>')
    expect(html).toContain('<span style="color:#n;font-weight:400">42</span>')
  })

  it('colors punctuation', () => {
    const html = highlight('{}')
    expect(html).toContain('<span style="color:#p;font-weight:400">{</span>')
    expect(html).toContain('<span style="color:#p;font-weight:400">}</span>')
  })

  it('escapes HTML inside string tokens', () => {
    const html = highlight('{"a": "<script>&"}')
    expect(html).toContain('&lt;script&gt;&amp;')
    expect(html).not.toContain('<script>')
  })

  it('returns empty string for blank input', () => {
    expect(highlight('')).toBe('')
    expect(highlight('   ')).toBe('')
  })

  it('recomputes when the source text changes', () => {
    const text = ref('true')
    const { highlightedHtml } = useJsonHighlighter(() => text.value, () => stubTheme)
    expect(highlightedHtml.value).toContain('color:#b')
    text.value = '123'
    expect(highlightedHtml.value).toContain('color:#n')
  })
})
