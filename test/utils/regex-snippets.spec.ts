import { describe, it, expect } from 'vitest'
import { generateSnippet, unsupportedFlagNotes, SNIPPET_LANGUAGES } from '../../src/utils/regex-snippets'
import type { SnippetInput } from '../../src/utils/regex-snippets'

function input(overrides: Partial<SnippetInput> = {}): SnippetInput {
  return { pattern: '\\d+', flags: ['g'], mode: 'match', replacement: '', ...overrides }
}

describe('SNIPPET_LANGUAGES', () => {
  it('offers the four supported languages', () => {
    expect(SNIPPET_LANGUAGES.map(l => l.id)).toEqual(['typescript', 'javascript', 'php', 'java'])
  })
})

describe('generateSnippet — TypeScript / JavaScript', () => {
  it('TS match with g uses matchAll and type annotations', () => {
    const snippet = generateSnippet('typescript', input())
    expect(snippet).toContain('const regex = /\\d+/g;')
    expect(snippet).toContain('matchAll')
    expect(snippet).toContain(': RegExpExecArray[]')
    expect(snippet).toContain('const text: string')
  })

  it('JS match with g omits type annotations', () => {
    const snippet = generateSnippet('javascript', input())
    expect(snippet).toContain('matchAll')
    expect(snippet).not.toContain(': string')
    expect(snippet).not.toContain(': RegExpExecArray[]')
  })

  it('match without g uses exec', () => {
    const snippet = generateSnippet('javascript', input({ flags: ['i'] }))
    expect(snippet).toContain('regex.exec(text)')
    expect(snippet).not.toContain('matchAll')
    expect(snippet).toContain('/\\d+/i')
  })

  it('replace mode uses text.replace with the replacement', () => {
    const snippet = generateSnippet('typescript', input({ mode: 'replace', replacement: '[$1]' }))
    expect(snippet).toContain("text.replace(regex, '[$1]')")
    expect(snippet).toContain('const result: string')
  })

  it('escapes forward slashes in the literal', () => {
    const snippet = generateSnippet('javascript', input({ pattern: 'a/b' }))
    expect(snippet).toContain('/a\\/b/g')
  })
})

describe('generateSnippet — PHP', () => {
  it('match with g uses preg_match_all', () => {
    const snippet = generateSnippet('php', input())
    expect(snippet).toContain('preg_match_all')
    expect(snippet).toContain('PREG_OFFSET_CAPTURE')
  })

  it('match without g uses preg_match', () => {
    const snippet = generateSnippet('php', input({ flags: [] }))
    expect(snippet).toContain('preg_match(')
    expect(snippet).not.toContain('preg_match_all')
  })

  it('replace mode uses preg_replace', () => {
    const snippet = generateSnippet('php', input({ mode: 'replace', replacement: '$1' }))
    expect(snippet).toContain('preg_replace')
  })

  it('maps modifiers keeping only i/m/s/u (drops g and y)', () => {
    const snippet = generateSnippet('php', input({ flags: ['g', 'y', 'u', 'i'] }))
    expect(snippet).toContain("'/\\\\d+/iu'")
  })

  it('escapes backslashes and single quotes in single-quoted pattern', () => {
    const snippet = generateSnippet('php', input({ pattern: "a'b" }))
    expect(snippet).toContain("\\'")
  })
})

describe('generateSnippet — Java', () => {
  it('uses 1-arg Pattern.compile when no mappable flags', () => {
    const snippet = generateSnippet('java', input({ flags: ['g'] }))
    expect(snippet).toContain('Pattern.compile("\\\\d+")')
    expect(snippet).toContain('while (matcher.find())')
  })

  it('ORs mapped flags in Pattern.compile', () => {
    const snippet = generateSnippet('java', input({ flags: ['i', 's'] }))
    expect(snippet).toContain('Pattern.CASE_INSENSITIVE | Pattern.DOTALL')
  })

  it('doubles backslashes in the Java string literal', () => {
    const snippet = generateSnippet('java', input({ pattern: '\\d+' }))
    expect(snippet).toContain('"\\\\d+"')
  })

  it('escapes double quotes in the pattern', () => {
    const snippet = generateSnippet('java', input({ pattern: 'say "hi"' }))
    expect(snippet).toContain('\\"hi\\"')
  })

  it('replace mode uses matcher.replaceAll', () => {
    const snippet = generateSnippet('java', input({ mode: 'replace', replacement: '$1' }))
    expect(snippet).toContain('matcher.replaceAll("$1")')
  })
})

describe('unsupportedFlagNotes', () => {
  it('warns about the y flag for PHP and Java', () => {
    expect(unsupportedFlagNotes('php', ['y'])).toHaveLength(1)
    expect(unsupportedFlagNotes('java', ['g', 'y'])).toHaveLength(1)
  })

  it('returns no notes for JS/TS or when y is absent', () => {
    expect(unsupportedFlagNotes('typescript', ['y'])).toEqual([])
    expect(unsupportedFlagNotes('javascript', ['y'])).toEqual([])
    expect(unsupportedFlagNotes('php', ['g', 'i'])).toEqual([])
  })
})
