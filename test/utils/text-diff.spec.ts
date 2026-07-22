import { describe, it, expect } from 'vitest'
import { generateDiff, computeStats, buildRenderedPairs } from '../../src/utils/text-diff'

describe('generateDiff', () => {
  it('marks identical inputs as all equal', () => {
    const diff = generateDiff('a\nb\nc', 'a\nb\nc')
    expect(diff).toHaveLength(3)
    expect(diff.every(line => line.type === 'equal')).toBe(true)
  })

  it('treats empty vs empty as a single equal line', () => {
    const diff = generateDiff('', '')
    expect(diff).toEqual([{ type: 'equal', content: '' }])
  })

  it('detects pure additions', () => {
    const diff = generateDiff('a', 'a\nb')
    expect(diff.map(l => l.type)).toEqual(['equal', 'added'])
    expect(diff[1].content).toBe('b')
  })

  it('detects pure removals', () => {
    const diff = generateDiff('a\nb', 'a')
    expect(diff.map(l => l.type)).toEqual(['equal', 'removed'])
    expect(diff[1].content).toBe('b')
  })

  it('pairs a changed line into one modified entry with char diff', () => {
    const diff = generateDiff('hello', 'hallo')
    expect(diff).toHaveLength(1)
    expect(diff[0].type).toBe('modified')
    expect(diff[0].chars).toBeDefined()
    const changed = diff[0].chars!.filter(c => c.type !== 'equal')
    expect(changed.map(c => c.text).sort()).toEqual(['a', 'e'])
  })

  it('handles unequal removed/added run lengths (2 removed vs 1 added)', () => {
    const diff = generateDiff('x\ny\nz', 'w\nz')
    expect(diff.map(l => l.type)).toEqual(['modified', 'removed', 'equal'])
  })

  it('compares chars case-insensitively (pinned quirk: chars carry line1 text)', () => {
    const diff = generateDiff('Hello', 'hello')
    expect(diff).toHaveLength(1)
    expect(diff[0].type).toBe('modified')
    expect(diff[0].chars!.every(c => c.type === 'equal')).toBe(true)
    expect(diff[0].chars!.map(c => c.text).join('')).toBe('Hello')
  })
})

describe('computeStats', () => {
  it('counts each line type', () => {
    const diff = generateDiff('a\nb\nc', 'a\nB2\nc\nd')
    const stats = computeStats(diff)
    expect(stats.equal).toBe(2)
    expect(stats.modified).toBe(1)
    expect(stats.added).toBe(1)
    expect(stats.removed).toBe(0)
  })

  it('does not count whitespace-only added/removed lines', () => {
    const diff = generateDiff('a', 'a\n')
    const stats = computeStats(diff)
    expect(stats.added).toBe(0)
  })
})

describe('buildRenderedPairs', () => {
  it('numbers left and right sides independently', () => {
    const pairs = buildRenderedPairs(generateDiff('a\nb', 'a'))
    expect(pairs).toHaveLength(2)
    expect(pairs[0].left.lineNumber).toBe(1)
    expect(pairs[0].right.lineNumber).toBe(1)
    expect(pairs[1].left.lineNumber).toBe(2)
    expect(pairs[1].right.lineNumber).toBeNull()
  })

  it('renders removed lines with an empty right side', () => {
    const pairs = buildRenderedPairs([{ type: 'removed', content: 'gone' }])
    expect(pairs[0].left.type).toBe('removed')
    expect(pairs[0].right).toEqual({ lineNumber: null, type: 'empty' })
    expect(pairs[0].isDiff).toBe(true)
  })

  it('renders added lines with an empty left side', () => {
    const pairs = buildRenderedPairs([{ type: 'added', content: 'new' }])
    expect(pairs[0].left).toEqual({ lineNumber: null, type: 'empty' })
    expect(pairs[0].right.type).toBe('added')
    expect(pairs[0].isDiff).toBe(true)
  })

  it('shares chars on both sides for modified lines', () => {
    const chars = [{ type: 'equal' as const, text: 'a' }]
    const pairs = buildRenderedPairs([{ type: 'modified', chars }])
    expect(pairs[0].left.chars).toBe(chars)
    expect(pairs[0].right.chars).toBe(chars)
    expect(pairs[0].left.lineNumber).toBe(1)
    expect(pairs[0].right.lineNumber).toBe(1)
  })

  it('flags only differing pairs with isDiff', () => {
    const pairs = buildRenderedPairs(generateDiff('a\nb', 'a\nc'))
    expect(pairs[0].isDiff).toBe(false)
    expect(pairs[1].isDiff).toBe(true)
  })
})
