import { describe, it, expect } from 'vitest'
import {
  MAX_MATCHES,
  sortFlags,
  extractGroupNames,
  compileRegex,
  findMatches,
  replaceMatches,
  buildHighlightSegments,
} from '../../src/utils/regex-engine'
import type { RegexMatch } from '../../src/types/regex'

describe('sortFlags', () => {
  it('returns flags in canonical g,i,m,s,u,y order regardless of input order', () => {
    expect(sortFlags(['y', 'i', 'g'])).toBe('giy')
    expect(sortFlags(['u', 's', 'm', 'i', 'g', 'y'])).toBe('gimsuy')
  })

  it('returns an empty string for no flags', () => {
    expect(sortFlags([])).toBe('')
  })
})

describe('extractGroupNames', () => {
  it('returns null entries for unnamed groups', () => {
    expect(extractGroupNames('(a)(b)')).toEqual([null, null])
  })

  it('extracts named groups', () => {
    expect(extractGroupNames('(?<year>\\d{4})-(?<month>\\d{2})')).toEqual(['year', 'month'])
  })

  it('preserves order in mixed named/unnamed patterns', () => {
    expect(extractGroupNames('(a)(?<mid>b)(c)')).toEqual([null, 'mid', null])
  })

  it('skips non-capturing and lookaround groups', () => {
    expect(extractGroupNames('(?:a)(?=b)(?!c)(?<=d)(?<!e)')).toEqual([])
  })

  it('ignores escaped parentheses', () => {
    expect(extractGroupNames('\\(a\\)')).toEqual([])
  })

  it('ignores parentheses inside character classes', () => {
    expect(extractGroupNames('[(](a)')).toEqual([null])
  })

  it('returns null for an unterminated named group', () => {
    expect(extractGroupNames('(?<name')).toEqual([null])
  })
})

describe('compileRegex', () => {
  it('returns a RegExp for a valid pattern', () => {
    const result = compileRegex('a+', ['g', 'i'])
    expect(result).toBeInstanceOf(RegExp)
    expect((result as RegExp).flags).toBe('gi')
  })

  it('returns an Error (not throws) for an invalid pattern', () => {
    const result = compileRegex('[', [])
    expect(result).toBeInstanceOf(Error)
  })
})

describe('findMatches', () => {
  it('returns empty result for an empty pattern', () => {
    expect(findMatches('', ['g'], 'abc')).toEqual({ matches: [], truncated: false, error: null })
  })

  it('reports an error for an invalid pattern', () => {
    const result = findMatches('[', ['g'], 'abc')
    expect(result.matches).toEqual([])
    expect(result.error).not.toBeNull()
    expect(result.error!.message).toBeTruthy()
  })

  it('returns match positions, text, and sequential indices', () => {
    const result = findMatches('\\d+', ['g'], 'a1b22c333')
    expect(result.matches.map(m => m.text)).toEqual(['1', '22', '333'])
    expect(result.matches.map(m => m.index)).toEqual([0, 1, 2])
    expect(result.matches[1]).toMatchObject({ start: 3, end: 5 })
  })

  it('forces global semantics even without the g flag', () => {
    const result = findMatches('a', [], 'aaa')
    expect(result.matches).toHaveLength(3)
  })

  it('terminates on zero-width matches and advances past them', () => {
    const result = findMatches('\\d*', ['g'], 'ab')
    expect(result.error).toBeNull()
    expect(result.truncated).toBe(false)
    expect(result.matches.every(m => m.end >= m.start)).toBe(true)
  })

  it('truncates at MAX_MATCHES and flags it', () => {
    const text = 'x'.repeat(MAX_MATCHES + 1)
    const result = findMatches('x', ['g'], text)
    expect(result.matches).toHaveLength(MAX_MATCHES)
    expect(result.truncated).toBe(true)
  })

  it('populates named capture groups', () => {
    const result = findMatches('(?<year>\\d{4})-(\\d{2})', ['g'], '2025-06')
    const groups = result.matches[0].groups
    expect(groups).toHaveLength(2)
    expect(groups[0]).toEqual({ index: 1, name: 'year', value: '2025' })
    expect(groups[1]).toEqual({ index: 2, name: null, value: '06' })
  })

  it('reports non-participating optional groups as undefined', () => {
    const result = findMatches('a(b)?', ['g'], 'a')
    expect(result.matches[0].groups[0].value).toBeUndefined()
  })
})

describe('replaceMatches', () => {
  it('replaces with backreferences', () => {
    const { result, error } = replaceMatches('(\\w+)@(\\w+)', ['g'], 'user@host', '$2@$1')
    expect(error).toBeNull()
    expect(result).toBe('host@user')
  })

  it('without g replaces only the first occurrence (unlike findMatches)', () => {
    const { result } = replaceMatches('a', [], 'aaa', 'b')
    expect(result).toBe('baa')
  })

  it('with g replaces all occurrences', () => {
    const { result } = replaceMatches('a', ['g'], 'aaa', 'b')
    expect(result).toBe('bbb')
  })

  it('returns an error for an invalid pattern', () => {
    const { result, error } = replaceMatches('[', ['g'], 'abc', 'x')
    expect(result).toBe('')
    expect(error).not.toBeNull()
  })
})

describe('buildHighlightSegments', () => {
  function match(start: number, end: number, text: string, index: number): RegexMatch {
    return { index, start, end, text, groups: [] }
  }

  it('returns a single non-match segment when there are no matches', () => {
    expect(buildHighlightSegments('abc', [])).toEqual([
      { text: 'abc', isMatch: false, matchIndex: null },
    ])
  })

  it('returns an empty array for empty text without matches', () => {
    expect(buildHighlightSegments('', [])).toEqual([])
  })

  it('splits leading and trailing unmatched text around a match', () => {
    const segments = buildHighlightSegments('xxABCyy', [match(2, 5, 'ABC', 0)])
    expect(segments).toEqual([
      { text: 'xx', isMatch: false, matchIndex: null },
      { text: 'ABC', isMatch: true, matchIndex: 0 },
      { text: 'yy', isMatch: false, matchIndex: null },
    ])
  })

  it('produces no gap segment between adjacent matches', () => {
    const segments = buildHighlightSegments('abcd', [match(0, 2, 'ab', 0), match(2, 4, 'cd', 1)])
    expect(segments).toEqual([
      { text: 'ab', isMatch: true, matchIndex: 0 },
      { text: 'cd', isMatch: true, matchIndex: 1 },
    ])
  })

  it('skips zero-width matches without breaking the cursor', () => {
    const segments = buildHighlightSegments('ab', [match(1, 1, '', 0)])
    expect(segments).toEqual([
      { text: 'a', isMatch: false, matchIndex: null },
      { text: 'b', isMatch: false, matchIndex: null },
    ])
  })
})
