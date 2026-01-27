import type { DataType } from './json'

export interface TreeNode {
  id: string
  name: string
  value: string
  type: DataType
  children: TreeNode[]
  isExpanded: boolean
  depth: number
}

export interface NodeColorMap {
  object: string
  array: string
  string: string
  number: string
  boolean: string
  null: string
}

export const NODE_COLORS: NodeColorMap = {
  object: '#f97316',
  array: '#06b6d4',
  string: '#10b981',
  number: '#6366f1',
  boolean: '#ec4899',
  null: '#64748b'
}
