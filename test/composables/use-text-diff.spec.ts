import { describe, it, expect } from 'vitest'
import { useTextDiff } from '../../src/composables/use-text-diff'

describe('useTextDiff', () => {
  it('compare is a no-op when both texts are blank', () => {
    const diff = useTextDiff()
    diff.compare()
    expect(diff.hasResult.value).toBe(false)
    expect(diff.renderedPairs.value).toEqual([])
  })

  it('compare populates pairs, stats, and jumps to the first diff', () => {
    const diff = useTextDiff()
    diff.originalText.value = 'a\nb'
    diff.modifiedText.value = 'a\nc'
    diff.compare()
    expect(diff.hasResult.value).toBe(true)
    expect(diff.renderedPairs.value).toHaveLength(2)
    expect(diff.stats.value.modified).toBe(1)
    expect(diff.currentDiffStep.value).toBe(0)
  })

  it('compare with identical texts leaves the step at -1', () => {
    const diff = useTextDiff()
    diff.originalText.value = 'same'
    diff.modifiedText.value = 'same'
    diff.compare()
    expect(diff.hasResult.value).toBe(true)
    expect(diff.diffIndices.value).toEqual([])
    expect(diff.currentDiffStep.value).toBe(-1)
    expect(diff.currentPairIndex.value).toBe(-1)
  })

  it('diffIndices matches the positions of differing pairs', () => {
    const diff = useTextDiff()
    diff.originalText.value = 'a\nb\nc'
    diff.modifiedText.value = 'a\nX\nc'
    diff.compare()
    expect(diff.diffIndices.value).toEqual([1])
    expect(diff.currentPairIndex.value).toBe(1)
  })

  it('goToNext and goToPrev wrap around', () => {
    const diff = useTextDiff()
    diff.originalText.value = 'a\nb\nc\nd'
    diff.modifiedText.value = 'X\nb\nY\nd'
    diff.compare()
    expect(diff.diffIndices.value).toHaveLength(2)
    expect(diff.currentDiffStep.value).toBe(0)

    diff.goToNext()
    expect(diff.currentDiffStep.value).toBe(1)
    diff.goToNext()
    expect(diff.currentDiffStep.value).toBe(0)

    diff.goToPrev()
    expect(diff.currentDiffStep.value).toBe(1)
  })

  it('goToNext/goToPrev are no-ops without diffs', () => {
    const diff = useTextDiff()
    diff.goToNext()
    diff.goToPrev()
    expect(diff.currentDiffStep.value).toBe(-1)
  })

  it('leftLines and rightLines mirror renderedPairs length', () => {
    const diff = useTextDiff()
    diff.originalText.value = 'a\nb'
    diff.modifiedText.value = 'a'
    diff.compare()
    expect(diff.leftLines.value).toHaveLength(diff.renderedPairs.value.length)
    expect(diff.rightLines.value).toHaveLength(diff.renderedPairs.value.length)
  })
})
