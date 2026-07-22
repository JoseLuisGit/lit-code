import type {
  CaptureGroup,
  HighlightSegment,
  RegexFlag,
  RegexMatch,
  RegexResult,
} from '../types/regex'

export const MAX_MATCHES = 2000

export const SUPPORTED_FLAGS: RegexFlag[] = ['g', 'i', 'm', 's', 'u', 'y']

export function sortFlags(flags: RegexFlag[]): string {
  return SUPPORTED_FLAGS.filter(flag => flags.includes(flag)).join('')
}

// Walks the pattern and returns capture group names in order of appearance
// (null for unnamed groups). Non-capturing/lookaround groups are skipped.
export function extractGroupNames(pattern: string): (string | null)[] {
  const names: (string | null)[] = []
  let inCharClass = false

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    if (char === '\\') { i++; continue }
    if (char === '[') { inCharClass = true; continue }
    if (char === ']') { inCharClass = false; continue }
    if (inCharClass || char !== '(') continue

    const next = pattern[i + 1]
    if (next !== '?') {
      names.push(null)
      continue
    }
    if (pattern[i + 2] === '<' && pattern[i + 3] !== '=' && pattern[i + 3] !== '!') {
      const closeIdx = pattern.indexOf('>', i + 3)
      names.push(closeIdx !== -1 ? pattern.slice(i + 3, closeIdx) : null)
    }
    // (?: (?= (?! (?<= (?<! are non-capturing — skip
  }

  return names
}

export function compileRegex(pattern: string, flags: RegexFlag[]): RegExp | Error {
  try {
    return new RegExp(pattern, sortFlags(flags))
  } catch (e) {
    return e instanceof Error ? e : new Error('Invalid regular expression')
  }
}

export function findMatches(pattern: string, flags: RegexFlag[], text: string): RegexResult {
  if (!pattern) {
    return { matches: [], truncated: false, error: null }
  }

  const compiled = compileRegex(pattern, flags)
  if (compiled instanceof Error) {
    return { matches: [], truncated: false, error: { message: compiled.message } }
  }

  // Force global semantics so exec() walks through every match
  const flagString = compiled.flags.includes('g') ? compiled.flags : compiled.flags + 'g'
  const regex = new RegExp(compiled.source, flagString)

  const matches: RegexMatch[] = []
  const groupNames = extractGroupNames(pattern)
  let truncated = false
  let execResult: RegExpExecArray | null

  while ((execResult = regex.exec(text)) !== null) {
    if (matches.length >= MAX_MATCHES) {
      truncated = true
      break
    }

    const groups: CaptureGroup[] = []
    for (let i = 1; i < execResult.length; i++) {
      groups.push({
        index: i,
        name: groupNames[i - 1] ?? null,
        value: execResult[i],
      })
    }

    matches.push({
      index: matches.length,
      start: execResult.index,
      end: execResult.index + execResult[0].length,
      text: execResult[0],
      groups,
    })

    // Prevent infinite loops on zero-width matches
    if (execResult[0].length === 0) {
      regex.lastIndex++
    }
  }

  return { matches, truncated, error: null }
}

export function replaceMatches(
  pattern: string,
  flags: RegexFlag[],
  text: string,
  replacement: string,
): { result: string; error: RegexResult['error'] } {
  const compiled = compileRegex(pattern, flags)
  if (compiled instanceof Error) {
    return { result: '', error: { message: compiled.message } }
  }

  try {
    return { result: text.replace(compiled, replacement), error: null }
  } catch (e) {
    return {
      result: '',
      error: { message: e instanceof Error ? e.message : 'Replacement failed' },
    }
  }
}

export function buildHighlightSegments(text: string, matches: RegexMatch[]): HighlightSegment[] {
  if (matches.length === 0) {
    return text ? [{ text, isMatch: false, matchIndex: null }] : []
  }

  const segments: HighlightSegment[] = []
  let cursor = 0

  for (const match of matches) {
    if (match.start > cursor) {
      segments.push({ text: text.slice(cursor, match.start), isMatch: false, matchIndex: null })
    }
    if (match.end > match.start) {
      segments.push({ text: text.slice(match.start, match.end), isMatch: true, matchIndex: match.index })
    }
    cursor = Math.max(cursor, match.end)
  }

  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), isMatch: false, matchIndex: null })
  }

  return segments
}
