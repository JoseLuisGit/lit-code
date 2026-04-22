export type CharType = 'equal' | 'added' | 'removed'
export type LineType = 'equal' | 'added' | 'removed' | 'modified'

export interface CharDiff {
  type: CharType
  text: string
}

export interface DiffLine {
  type: LineType
  content?: string
  chars?: CharDiff[]
}

export interface DiffStats {
  added: number
  removed: number
  modified: number
  equal: number
}

export interface RenderedLine {
  lineNumber: number | null
  type: LineType | 'empty'
  content?: string
  chars?: CharDiff[]
}

export interface RenderedPair {
  left: RenderedLine
  right: RenderedLine
  isDiff: boolean
}

function buildDp(seq1: string[], seq2: string[], eqFn: (a: string, b: string) => boolean): number[][] {
  const m = seq1.length
  const n = seq2.length
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i]![j] = eqFn(seq1[i - 1]!, seq2[j - 1]!)
        ? dp[i - 1]![j - 1]! + 1
        : Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!)
    }
  }
  return dp
}

function lcsAlign(arr1: string[], arr2: string[]): [string | null, string | null][] {
  const m = arr1.length
  const n = arr2.length
  const dp = buildDp(arr1, arr2, (a, b) => a === b)

  const aligned: [string | null, string | null][] = []
  let i = m
  let j = n

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && arr1[i - 1] === arr2[j - 1]) {
      aligned.unshift([arr1[i - 1]!, arr2[j - 1]!])
      i--; j--
    } else if (j > 0 && (i === 0 || dp[i]![j - 1]! >= dp[i - 1]![j]!)) {
      aligned.unshift([null, arr2[j - 1]!])
      j--
    } else if (i > 0) {
      aligned.unshift([arr1[i - 1]!, null])
      i--
    }
  }

  return aligned
}

function compareChars(line1: string, line2: string): CharDiff[] {
  const chars1 = line1.split('')
  const chars2 = line2.split('')

  if (chars1.length === 0 && chars2.length === 0) return [{ type: 'equal', text: '' }]
  if (chars1.length === 0) return chars2.map(c => ({ type: 'added' as CharType, text: c }))
  if (chars2.length === 0) return chars1.map(c => ({ type: 'removed' as CharType, text: c }))

  const m = chars1.length
  const n = chars2.length
  const dp = buildDp(chars1, chars2, (a, b) => a.toLowerCase() === b.toLowerCase())

  const result: CharDiff[] = []
  let i = m
  let j = n

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && chars1[i - 1]!.toLowerCase() === chars2[j - 1]!.toLowerCase()) {
      result.unshift({ type: 'equal', text: chars1[i - 1]! })
      i--; j--
    } else if (j > 0 && (i === 0 || dp[i]![j - 1]! >= dp[i - 1]![j]!)) {
      result.unshift({ type: 'added', text: chars2[j - 1]! })
      j--
    } else if (i > 0) {
      result.unshift({ type: 'removed', text: chars1[i - 1]! })
      i--
    }
  }

  return result
}

function pairChangedLines(removed: string[], added: string[], result: DiffLine[]): void {
  const pairs = Math.min(removed.length, added.length)
  for (let k = 0; k < pairs; k++) {
    result.push({ type: 'modified', chars: compareChars(removed[k]!, added[k]!) })
  }
  for (let k = pairs; k < removed.length; k++) {
    result.push({ type: 'removed', content: removed[k] })
  }
  for (let k = pairs; k < added.length; k++) {
    result.push({ type: 'added', content: added[k] })
  }
}

export function generateDiff(text1: string, text2: string): DiffLine[] {
  const lines1 = text1.split('\n')
  const lines2 = text2.split('\n')
  const aligned = lcsAlign(lines1, lines2)
  const result: DiffLine[] = []

  let i = 0
  while (i < aligned.length) {
    const [line1, line2] = aligned[i]!

    if (line1 !== null && line2 !== null) {
      result.push({ type: 'equal', content: line1 })
      i++
      continue
    }

    const removed: string[] = []
    while (i < aligned.length && aligned[i]![0] !== null && aligned[i]![1] === null) {
      removed.push(aligned[i]![0]!)
      i++
    }
    const added: string[] = []
    while (i < aligned.length && aligned[i]![0] === null && aligned[i]![1] !== null) {
      added.push(aligned[i]![1]!)
      i++
    }

    pairChangedLines(removed, added, result)
  }

  return result
}

export function computeStats(diffResult: DiffLine[]): DiffStats {
  const stats: DiffStats = { added: 0, removed: 0, modified: 0, equal: 0 }
  for (const item of diffResult) {
    if (item.type === 'modified') {
      stats.modified++
    } else if (item.content?.trim()) {
      stats[item.type]++
    }
  }
  return stats
}

export function buildRenderedPairs(diffResult: DiffLine[]): RenderedPair[] {
  const pairs: RenderedPair[] = []
  let lineNum1 = 1
  let lineNum2 = 1

  for (const item of diffResult) {
    const content = item.content ?? ''

    if (item.type === 'equal') {
      pairs.push({
        left: { lineNumber: lineNum1++, type: 'equal', content },
        right: { lineNumber: lineNum2++, type: 'equal', content },
        isDiff: false,
      })
    } else if (item.type === 'removed') {
      pairs.push({
        left: { lineNumber: lineNum1++, type: 'removed', content },
        right: { lineNumber: null, type: 'empty' },
        isDiff: true,
      })
    } else if (item.type === 'added') {
      pairs.push({
        left: { lineNumber: null, type: 'empty' },
        right: { lineNumber: lineNum2++, type: 'added', content },
        isDiff: true,
      })
    } else if (item.type === 'modified') {
      pairs.push({
        left: { lineNumber: lineNum1++, type: 'modified', chars: item.chars },
        right: { lineNumber: lineNum2++, type: 'modified', chars: item.chars },
        isDiff: true,
      })
    }
  }

  return pairs
}
