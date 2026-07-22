import type { Field, JsonToTsOptions, SchemaNode, StringFormat } from '../types/json-to-ts'
import type { JsonValue } from '../types/json'

const FORMAT_PATTERNS: [StringFormat, RegExp][] = [
  ['date-time', /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/],
  ['date', /^\d{4}-\d{2}-\d{2}$/],
  ['uuid', /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i],
  ['email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/],
  ['url', /^https?:\/\/[^\s]+$/i],
]

export function detectFormat(value: string): StringFormat | undefined {
  for (const [format, pattern] of FORMAT_PATTERNS) {
    if (pattern.test(value)) return format
  }
  return undefined
}

export function toPascalCase(key: string): string {
  const parts = key.split(/[^a-zA-Z0-9]+/).filter(Boolean)
  const pascal = parts
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
  if (!pascal) return 'Type'
  return /^[a-zA-Z]/.test(pascal) ? pascal : `Type${pascal}`
}

export function singularize(name: string): string {
  if (/ies$/.test(name)) return name.replace(/ies$/, 'y')
  if (/ses$/.test(name)) return name.replace(/es$/, '')
  if (/s$/.test(name) && !/ss$/.test(name)) return name.replace(/s$/, '')
  return name
}

const ENUM_MIN = 2
const ENUM_MAX = 12

class NameRegistry {
  private readonly used = new Set<string>()
  claim(base: string): string {
    let name = base
    let n = 2
    while (this.used.has(name)) name = `${base}${n++}`
    this.used.add(name)
    return name
  }
}

export function inferSchema(json: JsonValue, options: JsonToTsOptions): SchemaNode {
  const registry = new NameRegistry()
  return walk(json, options.rootName, options, registry)
}

function walk(value: JsonValue, nameHint: string, options: JsonToTsOptions, registry: NameRegistry): SchemaNode {
  if (value === null) return { kind: 'null' }
  if (Array.isArray(value)) return walkArray(value, nameHint, options, registry)
  if (typeof value === 'object') return walkObject(value, nameHint, options, registry)
  if (typeof value === 'string') {
    const format = options.detectFormats ? detectFormat(value) : undefined
    return format ? { kind: 'primitive', type: 'string', format } : { kind: 'primitive', type: 'string' }
  }
  return { kind: 'primitive', type: typeof value === 'number' ? 'number' : 'boolean' }
}

function walkObject(obj: Record<string, JsonValue>, nameHint: string, options: JsonToTsOptions, registry: NameRegistry): SchemaNode {
  const name = registry.claim(toPascalCase(nameHint))
  const fields: Field[] = Object.entries(obj).map(([key, val]) => ({
    key,
    value: walk(val, key, options, registry),
    optional: false,
  }))
  return { kind: 'object', name, fields }
}

function walkArray(arr: JsonValue[], nameHint: string, options: JsonToTsOptions, registry: NameRegistry): SchemaNode {
  if (arr.length === 0) return { kind: 'array', element: { kind: 'unknown' } }

  if (options.detectEnums && arr.every(v => typeof v === 'string')) {
    const distinct = [...new Set(arr as string[])]
    if (distinct.length >= ENUM_MIN && distinct.length <= ENUM_MAX) {
      const enumName = registry.claim(toPascalCase(nameHint))
      return { kind: 'array', element: { kind: 'enum', name: enumName, values: distinct } }
    }
  }

  const elementName = singularize(toPascalCase(nameHint))
  if (arr.every(v => v !== null && typeof v === 'object' && !Array.isArray(v))) {
    const merged = mergeObjects(arr as Record<string, JsonValue>[], elementName, options, registry)
    return { kind: 'array', element: merged }
  }

  const elementNodes = arr.map(v => walk(v, elementName, options, registry))
  return { kind: 'array', element: unify(elementNodes) }
}

function mergeObjects(objs: Record<string, JsonValue>[], name: string, options: JsonToTsOptions, registry: NameRegistry): SchemaNode {
  const claimedName = registry.claim(name)
  const keys: string[] = []
  for (const obj of objs) for (const k of Object.keys(obj)) if (!keys.includes(k)) keys.push(k)

  const fields: Field[] = keys.map(key => {
    const present = objs.filter(o => key in o)
    const nodes = present.map(o => walk(o[key] as JsonValue, key, options, registry))
    return { key, value: unify(nodes), optional: present.length < objs.length }
  })
  return { kind: 'object', name: claimedName, fields }
}

function unify(nodes: SchemaNode[]): SchemaNode {
  const unique: SchemaNode[] = []
  for (const node of nodes) {
    if (!unique.some(u => sameNode(u, node))) unique.push(node)
  }
  if (unique.length === 0) return { kind: 'unknown' }
  if (unique.length === 1) return unique[0]!
  return { kind: 'union', options: unique }
}

function sameNode(a: SchemaNode, b: SchemaNode): boolean {
  if (a.kind !== b.kind) return false
  if (a.kind === 'primitive' && b.kind === 'primitive') return a.type === b.type
  return a.kind === b.kind && a.kind !== 'object'
}
