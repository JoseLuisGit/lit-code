import { describe, it, expect } from 'vitest'
import { detectFormat, singularize, toPascalCase, inferSchema } from '../../src/utils/ts-schema-infer'
import { DEFAULT_OPTIONS } from '../../src/types/json-to-ts'
import type { JsonToTsOptions, SchemaNode } from '../../src/types/json-to-ts'

describe('detectFormat', () => {
  it('detects ISO date and date-time', () => {
    expect(detectFormat('2025-01-15')).toBe('date')
    expect(detectFormat('2025-01-15T10:30:00Z')).toBe('date-time')
  })
  it('detects email, uuid, url', () => {
    expect(detectFormat('a@b.com')).toBe('email')
    expect(detectFormat('550e8400-e29b-41d4-a716-446655440000')).toBe('uuid')
    expect(detectFormat('https://example.com/x')).toBe('url')
  })
  it('returns undefined for plain strings', () => {
    expect(detectFormat('hello world')).toBeUndefined()
  })
})

describe('toPascalCase', () => {
  it('converts keys to PascalCase', () => {
    expect(toPascalCase('user')).toBe('User')
    expect(toPascalCase('user_name')).toBe('UserName')
    expect(toPascalCase('user-profile')).toBe('UserProfile')
  })
  it('falls back for empty or symbol-only keys', () => {
    expect(toPascalCase('')).toBe('Type')
    expect(toPascalCase('123')).toBe('Type123')
  })
})

describe('singularize', () => {
  it('strips a trailing s', () => {
    expect(singularize('Users')).toBe('User')
    expect(singularize('Posts')).toBe('Post')
  })
  it('handles -ies plurals', () => {
    expect(singularize('Categories')).toBe('Category')
  })
  it('leaves non-plural names unchanged', () => {
    expect(singularize('Data')).toBe('Data')
  })
})

function infer(json: unknown, overrides: Partial<JsonToTsOptions> = {}) {
  return inferSchema(json as never, { ...DEFAULT_OPTIONS, ...overrides })
}

describe('inferSchema — primitives and formats', () => {
  it('tags string formats when enabled', () => {
    const node = infer('2025-01-15')
    expect(node).toEqual({ kind: 'primitive', type: 'string', format: 'date' })
  })
  it('omits format when detectFormats is off', () => {
    expect(infer('a@b.com', { detectFormats: false })).toEqual({ kind: 'primitive', type: 'string' })
  })
  it('infers number and boolean', () => {
    expect(infer(42)).toEqual({ kind: 'primitive', type: 'number' })
    expect(infer(true)).toEqual({ kind: 'primitive', type: 'boolean' })
  })
  it('infers null', () => {
    expect(infer(null)).toEqual({ kind: 'null' })
  })
})

describe('inferSchema — objects', () => {
  it('names the root and nested objects', () => {
    const node = infer({ user: { name: 'a' } })
    expect(node.kind).toBe('object')
    if (node.kind !== 'object') return
    expect(node.name).toBe('Root')
    const user = node.fields[0]
    expect(user.key).toBe('user')
    expect(user.value.kind).toBe('object')
    if (user.value.kind === 'object') expect(user.value.name).toBe('User')
  })
  it('resolves name collisions with numeric suffixes', () => {
    const node = infer({ user: { id: 1 }, admin: { user: { id: 2 } } })
    const names: string[] = []
    const walk = (n: SchemaNode) => {
      if (n.kind === 'object') { names.push(n.name); n.fields.forEach(f => walk(f.value)) }
      if (n.kind === 'array') walk(n.element)
    }
    walk(node)
    expect(new Set(names).size).toBe(names.length)
  })
})

describe('inferSchema — arrays', () => {
  it('merges object shapes with optionals', () => {
    const node = infer({ items: [{ id: 1, name: 'a' }, { id: 2 }] })
    if (node.kind !== 'object') throw new Error('expected object')
    const items = node.fields[0].value
    expect(items.kind).toBe('array')
    if (items.kind !== 'array' || items.element.kind !== 'object') throw new Error('bad shape')
    expect(items.element.name).toBe('Item')
    const byKey = Object.fromEntries(items.element.fields.map(f => [f.key, f.optional]))
    expect(byKey).toEqual({ id: false, name: true })
  })
  it('infers a string enum within the 2–12 threshold', () => {
    const node = infer({ status: ['active', 'inactive', 'active'] })
    if (node.kind !== 'object') throw new Error('expected object')
    const status = node.fields[0].value
    expect(status.kind).toBe('array')
    if (status.kind === 'array') expect(status.element).toEqual({ kind: 'enum', name: 'Status', values: ['active', 'inactive'] })
  })
  it('does not infer an enum above 12 distinct values', () => {
    const values = Array.from({ length: 13 }, (_, i) => `v${i}`)
    const node = infer({ tags: values })
    if (node.kind !== 'object') throw new Error('expected object')
    const tags = node.fields[0].value
    if (tags.kind === 'array') expect(tags.element.kind).toBe('primitive')
  })
  it('treats a single distinct string as a plain string, not enum', () => {
    const node = infer({ kinds: ['a', 'a'] })
    if (node.kind !== 'object') throw new Error('expected object')
    const kinds = node.fields[0].value
    if (kinds.kind === 'array') expect(kinds.element).toEqual({ kind: 'primitive', type: 'string' })
  })
  it('unions mixed scalar arrays', () => {
    const node = infer({ mix: [1, 'a'] })
    if (node.kind !== 'object') throw new Error('expected object')
    const mix = node.fields[0].value
    if (mix.kind === 'array') expect(mix.element.kind).toBe('union')
  })
  it('marks empty arrays as unknown element', () => {
    const node = infer({ empty: [] })
    if (node.kind !== 'object') throw new Error('expected object')
    expect(node.fields[0].value).toEqual({ kind: 'array', element: { kind: 'unknown' } })
  })
})

describe('inferSchema — roots', () => {
  it('handles a root array of objects', () => {
    const node = infer([{ id: 1 }])
    expect(node.kind).toBe('array')
    if (node.kind === 'array') expect(node.element.kind).toBe('object')
  })
  it('handles a root primitive', () => {
    expect(infer('x').kind).toBe('primitive')
  })
})
