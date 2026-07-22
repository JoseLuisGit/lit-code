import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useRegexTester, FLAG_INFO } from '../../src/composables/use-regex-tester'
import { regexExamples } from '../../src/utils/regex-examples'

function stubClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  })
  return writeText
}

describe('useRegexTester — matching', () => {
  it('drives matches from pattern and test text', () => {
    const tester = useRegexTester()
    tester.pattern.value = '\\d+'
    tester.testText.value = 'a1b22'
    expect(tester.matchCount.value).toBe(2)
    expect(tester.matches.value.map(m => m.text)).toEqual(['1', '22'])
    expect(tester.hasMatches.value).toBe(true)
    expect(tester.isValid.value).toBe(true)
  })

  it('reports errors for invalid patterns', () => {
    const tester = useRegexTester()
    tester.pattern.value = '['
    expect(tester.error.value).not.toBeNull()
    expect(tester.isValid.value).toBe(false)
    expect(tester.matchCount.value).toBe(0)
  })

  it('builds highlight segments covering the whole text', () => {
    const tester = useRegexTester()
    tester.pattern.value = 'b'
    tester.testText.value = 'abc'
    const segments = tester.highlightSegments.value
    expect(segments.map(s => s.text).join('')).toBe('abc')
    expect(segments.filter(s => s.isMatch)).toHaveLength(1)
  })
})

describe('useRegexTester — flags', () => {
  it('toggleFlag adds and removes flags; flagsString stays canonical', () => {
    const tester = useRegexTester()
    expect(tester.flagsString.value).toBe('g')
    tester.toggleFlag('i')
    expect(tester.hasFlag('i')).toBe(true)
    expect(tester.flagsString.value).toBe('gi')
    tester.toggleFlag('g')
    expect(tester.flagsString.value).toBe('i')
  })

  it('FLAG_INFO documents the six supported flags', () => {
    expect(FLAG_INFO.map(f => f.flag)).toEqual(['g', 'i', 'm', 's', 'u', 'y'])
  })
})

describe('useRegexTester — replace mode', () => {
  it('replaceResult is empty outside replace mode', () => {
    const tester = useRegexTester()
    tester.pattern.value = 'a'
    tester.testText.value = 'abc'
    tester.replacement.value = 'X'
    expect(tester.replaceResult.value).toBe('')
  })

  it('replaceResult substitutes in replace mode', () => {
    const tester = useRegexTester()
    tester.pattern.value = '(\\w+)@(\\w+)'
    tester.testText.value = 'user@host'
    tester.replacement.value = '$2@$1'
    tester.mode.value = 'replace'
    expect(tester.replaceResult.value).toBe('host@user')
  })
})

describe('useRegexTester — snippets', () => {
  it('generates snippets per language', () => {
    const tester = useRegexTester()
    tester.pattern.value = '\\d+'
    expect(tester.snippet.value).toContain('matchAll') // typescript default
    tester.snippetLang.value = 'php'
    expect(tester.snippet.value).toContain('preg_match_all')
    tester.snippetLang.value = 'java'
    expect(tester.snippet.value).toContain('Pattern.compile')
  })

  it('surfaces unsupported flag notes', () => {
    const tester = useRegexTester()
    tester.pattern.value = 'a'
    tester.toggleFlag('y')
    tester.snippetLang.value = 'php'
    expect(tester.snippetNotes.value).toHaveLength(1)
    tester.snippetLang.value = 'typescript'
    expect(tester.snippetNotes.value).toEqual([])
  })
})

describe('useRegexTester — examples and selection', () => {
  it('loadExample populates pattern, flags, and sample text', () => {
    const tester = useRegexTester()
    const example = regexExamples[0]
    tester.loadExample(example)
    expect(tester.pattern.value).toBe(example.pattern)
    expect(tester.testText.value).toBe(example.sampleText)
    expect(tester.hasMatches.value).toBe(true)
  })

  it('selectMatch exposes the selected match', () => {
    const tester = useRegexTester()
    tester.pattern.value = '\\d'
    tester.testText.value = '1 2'
    tester.selectMatch(1)
    expect(tester.selectedMatch.value?.text).toBe('2')
    tester.selectMatch(null)
    expect(tester.selectedMatch.value).toBeNull()
  })

  it('changing the result set resets the selection via watch', async () => {
    const tester = useRegexTester()
    tester.pattern.value = '\\d'
    tester.testText.value = '1 2'
    tester.selectMatch(0)
    tester.pattern.value = '\\w'
    await nextTick()
    expect(tester.selectedMatchIndex.value).toBeNull()
  })
})

describe('useRegexTester — copy and clear', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('copySnippet writes the snippet and resets hasCopied after 2s', async () => {
    const writeText = stubClipboard()
    const tester = useRegexTester()
    tester.pattern.value = 'a+'
    await tester.copySnippet()
    expect(writeText).toHaveBeenCalledWith(tester.snippet.value)
    expect(tester.hasCopied.value).toBe(true)
    vi.advanceTimersByTime(2000)
    expect(tester.hasCopied.value).toBe(false)
  })

  it('copySnippet copies even with an empty pattern (pinned: snippet is never empty)', async () => {
    // The `if (!snippet.value)` guard never triggers because generateSnippet
    // always returns a full snippet (with an empty // literal). The UI hides
    // the Copy button without a pattern, so this is unreachable from the view.
    const writeText = stubClipboard()
    const tester = useRegexTester()
    await tester.copySnippet()
    expect(writeText).toHaveBeenCalledOnce()
  })

  it('clearAll restores the defaults', () => {
    const tester = useRegexTester()
    tester.pattern.value = 'a'
    tester.testText.value = 'aaa'
    tester.replacement.value = 'X'
    tester.toggleFlag('i')
    tester.clearAll()
    expect(tester.pattern.value).toBe('')
    expect(tester.testText.value).toBe('')
    expect(tester.replacement.value).toBe('')
    expect(tester.flagsString.value).toBe('g')
    expect(tester.hasCopied.value).toBe(false)
  })
})
