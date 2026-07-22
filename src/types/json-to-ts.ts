export type StringFormat = 'date' | 'date-time' | 'email' | 'uuid' | 'url'

export interface PrimitiveNode { kind: 'primitive'; type: 'string' | 'number' | 'boolean'; format?: StringFormat }
export interface NullNode { kind: 'null' }
export interface EnumNode { kind: 'enum'; name: string; values: string[] }
export interface ArrayNode { kind: 'array'; element: SchemaNode }
export interface ObjectNode { kind: 'object'; name: string; fields: Field[] }
export interface UnionNode { kind: 'union'; options: SchemaNode[] }
export interface UnknownNode { kind: 'unknown' }

export type SchemaNode =
  | PrimitiveNode | NullNode | EnumNode | ArrayNode | ObjectNode | UnionNode | UnknownNode

export interface Field { key: string; value: SchemaNode; optional: boolean }

export interface JsonToTsOptions {
  rootName: string
  style: 'interface' | 'type'
  detectEnums: boolean
  detectFormats: boolean
  emitComments: boolean
}

export const DEFAULT_OPTIONS: JsonToTsOptions = {
  rootName: 'Root',
  style: 'interface',
  detectEnums: true,
  detectFormats: true,
  emitComments: true,
}
