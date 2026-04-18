import { ref, computed } from 'vue'
import type { JsonValue, JsonNodeEntry, DataType } from '../types/json'

export function useJsonNode(getData: () => JsonValue, depth: number = 0, initialExpandDepth: number = 2) {
  const isExpanded = ref(depth < initialExpandDepth)

  const dataType = computed<DataType>(() => {
    const data = getData()
    if (data === null) return 'null'
    if (Array.isArray(data)) return 'array'
    return typeof data as DataType
  })

  const isExpandable = computed(() => {
    return dataType.value === 'object' || dataType.value === 'array'
  })

  const itemCount = computed(() => {
    const data = getData()
    if (dataType.value === 'array' && Array.isArray(data)) return data.length
    if (dataType.value === 'object' && typeof data === 'object' && data !== null) {
      return Object.keys(data).length
    }
    return 0
  })

  const entries = computed<JsonNodeEntry[]>(() => {
    const data = getData()
    if (dataType.value === 'array' && Array.isArray(data)) {
      return data.map((item, index) => ({
        key: index,
        value: item
      }))
    }
    if (dataType.value === 'object' && typeof data === 'object' && data !== null) {
      return Object.entries(data).map(([key, value]) => ({
        key,
        value
      }))
    }
    return []
  })

  function toggleExpand() {
    if (isExpandable.value) {
      isExpanded.value = !isExpanded.value
    }
  }

  function getValueColor(type: DataType): string {
    const colorMap: Record<DataType, string> = {
      string: 'text-green-600',
      number: 'text-blue-600',
      boolean: 'text-purple-600',
      null: 'text-gray-500',
      array: 'text-gray-800',
      object: 'text-gray-800'
    }
    return colorMap[type]
  }

  function formatValue(value: JsonValue): string {
    if (typeof value === 'string') {
      return `"${value}"`
    }
    if (value === null) return 'null'
    return String(value)
  }

  function expandAll(): void {
    isExpanded.value = true
  }

  function collapseAll(): void {
    isExpanded.value = false
  }

  function getTypeLabel(type: DataType, count: number): string {
    if (type === 'array') return `Array[${count}]`
    if (type === 'object') return `Object{${count}}`
    return ''
  }

  return {
    isExpanded,
    dataType,
    isExpandable,
    itemCount,
    entries,
    toggleExpand,
    getValueColor,
    formatValue,
    getTypeLabel,
    expandAll,
    collapseAll
  }
}
