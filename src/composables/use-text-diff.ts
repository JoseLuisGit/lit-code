import { ref, computed } from 'vue'
import { generateDiff, computeStats, buildRenderedPairs } from '../utils/text-diff'
import type { RenderedPair, DiffStats } from '../utils/text-diff'

export function useTextDiff() {
  const originalText = ref('')
  const modifiedText = ref('')
  const renderedPairs = ref<RenderedPair[]>([])
  const stats = ref<DiffStats>({ added: 0, removed: 0, modified: 0, equal: 0 })

  const hasResult = computed(() => renderedPairs.value.length > 0)

  const diffIndices = computed(() =>
    renderedPairs.value.reduce<number[]>((acc, pair, i) => {
      if (pair.isDiff) acc.push(i)
      return acc
    }, [])
  )

  const currentDiffStep = ref(-1)

  const currentPairIndex = computed(() =>
    diffIndices.value[currentDiffStep.value] ?? -1
  )

  const leftLines = computed(() => renderedPairs.value.map(p => p.left))
  const rightLines = computed(() => renderedPairs.value.map(p => p.right))

  function compare(): void {
    if (!originalText.value.trim() && !modifiedText.value.trim()) return
    const result = generateDiff(originalText.value, modifiedText.value)
    renderedPairs.value = buildRenderedPairs(result)
    stats.value = computeStats(result)
    currentDiffStep.value = diffIndices.value.length > 0 ? 0 : -1
  }

  function goToNext(): void {
    if (diffIndices.value.length === 0) return
    currentDiffStep.value = (currentDiffStep.value + 1) % diffIndices.value.length
  }

  function goToPrev(): void {
    if (diffIndices.value.length === 0) return
    currentDiffStep.value =
      (currentDiffStep.value - 1 + diffIndices.value.length) % diffIndices.value.length
  }

  return {
    originalText,
    modifiedText,
    renderedPairs,
    stats,
    hasResult,
    diffIndices,
    currentDiffStep,
    currentPairIndex,
    leftLines,
    rightLines,
    compare,
    goToNext,
    goToPrev,
  }
}
