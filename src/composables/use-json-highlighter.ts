import { computed } from 'vue'
import type { Theme } from './use-theme'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function tokenize(json: string, theme: Theme): string {
  // Matches (in order):
  //   - a JSON string optionally followed by whitespace + colon  → key or string value
  //   - true | false | null keywords
  //   - numbers (integer, float, exponential)
  //   - single punctuation chars: { } [ ] , :
  const TOKEN_REGEX =
    /("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[{}[\],:])/g

  const { syntaxColors } = theme.colors
  let result = ''
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = TOKEN_REGEX.exec(json)) !== null) {
    const token = match[0]

    // Append any literal text before this token
    result += escapeHtml(json.slice(lastIndex, match.index))

    let color: string
    let fontWeight = '400'

    if (token.startsWith('"') && token.endsWith(':')) {
      // "key":  — string ending with colon (key token)
      color = syntaxColors.key
      fontWeight = '600'
    } else if (token.startsWith('"')) {
      // "value"  — plain string
      color = syntaxColors.string
    } else if (token === 'true' || token === 'false') {
      color = syntaxColors.boolean
    } else if (token === 'null') {
      color = syntaxColors.null
    } else if (/^-?\d/.test(token)) {
      color = syntaxColors.number
    } else {
      // { } [ ] , :
      color = syntaxColors.punctuation
    }

    result += `<span style="color:${color};font-weight:${fontWeight}">${escapeHtml(token)}</span>`
    lastIndex = match.index + token.length
  }

  // Append remaining text after the last token
  result += escapeHtml(json.slice(lastIndex))
  return result
}

export function useJsonHighlighter(jsonText: () => string, theme: () => Theme) {
  const highlightedHtml = computed(() => {
    const text = jsonText()
    if (!text.trim()) return ''
    return tokenize(text, theme())
  })

  return { highlightedHtml }
}
