import { ref, computed, watch } from 'vue'
import type {
  FlagInfo,
  RegexExample,
  RegexFlag,
  RegexMode,
  SnippetLanguage,
} from '../types/regex'
import {
  findMatches,
  replaceMatches,
  buildHighlightSegments,
  sortFlags,
} from '../utils/regex-engine'
import { generateSnippet, unsupportedFlagNotes } from '../utils/regex-snippets'

export type { RegexFlag, RegexMode, SnippetLanguage }

export const FLAG_INFO: FlagInfo[] = [
  { flag: 'g', label: 'global', description: 'Find all matches instead of stopping at the first' },
  { flag: 'i', label: 'ignore case', description: 'Case-insensitive matching' },
  { flag: 'm', label: 'multiline', description: '^ and $ match line boundaries' },
  { flag: 's', label: 'dotall', description: 'Dot (.) also matches newlines' },
  { flag: 'u', label: 'unicode', description: 'Full Unicode support (code points, \\p{...})' },
  { flag: 'y', label: 'sticky', description: 'Match only from lastIndex position' },
]

export function useRegexTester() {
  const pattern = ref('')
  const activeFlags = ref<RegexFlag[]>(['g'])
  const testText = ref('')
  const replacement = ref('')
  const mode = ref<RegexMode>('match')
  const snippetLang = ref<SnippetLanguage>('typescript')

  const hasCopied = ref(false)
  const selectedMatchIndex = ref<number | null>(null)

  const flagsString = computed(() => sortFlags(activeFlags.value))

  const result = computed(() => findMatches(pattern.value, activeFlags.value, testText.value))

  const matches = computed(() => result.value.matches)
  const error = computed(() => result.value.error)
  const truncated = computed(() => result.value.truncated)
  const matchCount = computed(() => matches.value.length)

  const hasPattern = computed(() => pattern.value.length > 0)
  const hasText = computed(() => testText.value.length > 0)
  const hasMatches = computed(() => matchCount.value > 0)
  const isValid = computed(() => hasPattern.value && error.value === null)

  const highlightSegments = computed(() =>
    buildHighlightSegments(testText.value, matches.value),
  )

  const replaceResult = computed(() => {
    if (mode.value !== 'replace' || !isValid.value) return ''
    return replaceMatches(pattern.value, activeFlags.value, testText.value, replacement.value).result
  })

  const snippet = computed(() =>
    generateSnippet(snippetLang.value, {
      pattern: pattern.value,
      flags: activeFlags.value,
      mode: mode.value,
      replacement: replacement.value,
    }),
  )

  const snippetNotes = computed(() => unsupportedFlagNotes(snippetLang.value, activeFlags.value))

  const selectedMatch = computed(() =>
    selectedMatchIndex.value !== null ? (matches.value[selectedMatchIndex.value] ?? null) : null,
  )

  function toggleFlag(flag: RegexFlag): void {
    const idx = activeFlags.value.indexOf(flag)
    if (idx === -1) {
      activeFlags.value = [...activeFlags.value, flag]
    } else {
      activeFlags.value = activeFlags.value.filter(f => f !== flag)
    }
  }

  function hasFlag(flag: RegexFlag): boolean {
    return activeFlags.value.includes(flag)
  }

  function loadExample(example: RegexExample): void {
    pattern.value = example.pattern
    activeFlags.value = [...example.flags]
    testText.value = example.sampleText
    selectedMatchIndex.value = null
  }

  function selectMatch(index: number | null): void {
    selectedMatchIndex.value = index
  }

  async function copySnippet(): Promise<void> {
    if (!snippet.value) return
    await navigator.clipboard.writeText(snippet.value)
    hasCopied.value = true
    setTimeout(() => { hasCopied.value = false }, 2000)
  }

  function clearAll(): void {
    pattern.value = ''
    activeFlags.value = ['g']
    testText.value = ''
    replacement.value = ''
    selectedMatchIndex.value = null
    hasCopied.value = false
  }

  // Reset match selection when the result set changes
  watch(matches, () => { selectedMatchIndex.value = null })

  return {
    pattern,
    activeFlags,
    flagsString,
    testText,
    replacement,
    mode,
    snippetLang,
    matches,
    error,
    truncated,
    matchCount,
    hasPattern,
    hasText,
    hasMatches,
    isValid,
    hasCopied,
    highlightSegments,
    replaceResult,
    snippet,
    snippetNotes,
    selectedMatch,
    selectedMatchIndex,
    toggleFlag,
    hasFlag,
    loadExample,
    selectMatch,
    copySnippet,
    clearAll,
  }
}
