import type { JsonValue, DataType } from '../types/json'
import type { TreeNode } from '../types/tree-visualization'

function getDataType(value: JsonValue): DataType {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'array'
  if (typeof value === 'object') return 'object'
  if (typeof value === 'string') return 'string'
  if (typeof value === 'number') return 'number'
  if (typeof value === 'boolean') return 'boolean'
  return 'null'
}

function formatValue(value: JsonValue, type: DataType): string {
  if (type === 'object') {
    const keys = Object.keys(value as object)
    return `{${keys.length}}`
  }
  if (type === 'array') {
    return `[${(value as JsonValue[]).length}]`
  }
  if (type === 'string') {
    const str = value as string
    return str.length > 20 ? `"${str.slice(0, 20)}..."` : `"${str}"`
  }
  if (type === 'null') return 'null'
  return String(value)
}

let nodeIdCounter = 0

function traverseJson(
  value: JsonValue,
  name: string,
  depth: number
): TreeNode {
  const type = getDataType(value)
  const nodeId = `node-${nodeIdCounter++}`

  const node: TreeNode = {
    id: nodeId,
    name,
    value: formatValue(value, type),
    type,
    children: [],
    isExpanded: depth < 2,
    depth
  }

  if (type === 'object' || type === 'array') {
    const entries = type === 'array'
      ? (value as JsonValue[]).map((v, i) => ({ key: String(i), value: v }))
      : Object.entries(value as object).map(([k, v]) => ({ key: k, value: v }))

    node.children = entries.map((entry) =>
      traverseJson(entry.value, entry.key, depth + 1)
    )
  }

  return node
}

export function jsonToTree(jsonValue: JsonValue): TreeNode {
  nodeIdCounter = 0
  return traverseJson(jsonValue, 'root', 0)
}
