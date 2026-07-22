import { describe, it, expect } from 'vitest'
import { useJsonNode } from '../../src/composables/use-json-node'
import type { JsonValue } from '../../src/types/json'

function node(data: JsonValue, depth = 0, initialExpandDepth?: number) {
  return useJsonNode(() => data, depth, initialExpandDepth)
}

describe('useJsonNode — dataType', () => {
  it('detects every JSON type', () => {
    expect(node('hi').dataType.value).toBe('string')
    expect(node(42).dataType.value).toBe('number')
    expect(node(true).dataType.value).toBe('boolean')
    expect(node(null).dataType.value).toBe('null')
    expect(node([1]).dataType.value).toBe('array')
    expect(node({ a: 1 }).dataType.value).toBe('object')
  })

  it('only arrays and objects are expandable', () => {
    expect(node([]).isExpandable.value).toBe(true)
    expect(node({}).isExpandable.value).toBe(true)
    expect(node('x').isExpandable.value).toBe(false)
    expect(node(null).isExpandable.value).toBe(false)
  })
})

describe('useJsonNode — entries and counts', () => {
  it('maps arrays to index-keyed entries', () => {
    const { entries, itemCount } = node(['a', 'b'])
    expect(itemCount.value).toBe(2)
    expect(entries.value).toEqual([
      { key: 0, value: 'a' },
      { key: 1, value: 'b' },
    ])
  })

  it('maps objects to key entries preserving insertion order', () => {
    const { entries, itemCount } = node({ z: 1, a: 2 })
    expect(itemCount.value).toBe(2)
    expect(entries.value.map(e => e.key)).toEqual(['z', 'a'])
  })

  it('primitives have no entries and zero count', () => {
    const { entries, itemCount } = node('leaf')
    expect(entries.value).toEqual([])
    expect(itemCount.value).toBe(0)
  })
})

describe('useJsonNode — expansion', () => {
  it('expands initially below the default expand depth of 2', () => {
    expect(node({}, 0).isExpanded.value).toBe(true)
    expect(node({}, 1).isExpanded.value).toBe(true)
    expect(node({}, 2).isExpanded.value).toBe(false)
  })

  it('honors a custom initial expand depth', () => {
    expect(node({}, 3, 5).isExpanded.value).toBe(true)
    expect(node({}, 5, 5).isExpanded.value).toBe(false)
  })

  it('toggleExpand flips expandable nodes and ignores primitives', () => {
    const expandable = node({}, 0)
    expandable.toggleExpand()
    expect(expandable.isExpanded.value).toBe(false)
    expandable.toggleExpand()
    expect(expandable.isExpanded.value).toBe(true)

    const primitive = node('x', 0)
    expect(primitive.isExpanded.value).toBe(true)
    primitive.toggleExpand()
    expect(primitive.isExpanded.value).toBe(true)
  })

  it('expandAll and collapseAll set the state directly', () => {
    const n = node({}, 2)
    n.expandAll()
    expect(n.isExpanded.value).toBe(true)
    n.collapseAll()
    expect(n.isExpanded.value).toBe(false)
  })
})

describe('useJsonNode — formatting', () => {
  const { formatValue, getTypeLabel } = node(null)

  it('formatValue quotes strings and stringifies the rest', () => {
    expect(formatValue('hi')).toBe('"hi"')
    expect(formatValue(null)).toBe('null')
    expect(formatValue(42)).toBe('42')
    expect(formatValue(false)).toBe('false')
  })

  it('getTypeLabel labels containers and returns empty for primitives', () => {
    expect(getTypeLabel('array', 3)).toBe('Array[3]')
    expect(getTypeLabel('object', 2)).toBe('Object{2}')
    expect(getTypeLabel('string', 0)).toBe('')
  })
})
