import { describe, it, expect } from 'vitest'
import { renderTypeScript } from '../../src/utils/ts-schema-render'
import { inferSchema } from '../../src/utils/ts-schema-infer'
import { DEFAULT_OPTIONS } from '../../src/types/json-to-ts'
import type { JsonToTsOptions } from '../../src/types/json-to-ts'

function render(json: unknown, overrides: Partial<JsonToTsOptions> = {}) {
  const options = { ...DEFAULT_OPTIONS, ...overrides }
  return renderTypeScript(inferSchema(json as never, options), options)
}

describe('renderTypeScript', () => {
  it('renders a simple interface, root first', () => {
    const out = render({ id: 1, name: 'a' })
    expect(out).toBe('interface Root {\n  id: number;\n  name: string;\n}')
  })

  it('emits nested interfaces as separate declarations after the root', () => {
    const out = render({ user: { name: 'a' } })
    expect(out.indexOf('interface Root')).toBeLessThan(out.indexOf('interface User'))
    expect(out).toContain('user: User;')
    expect(out).toContain('interface User {\n  name: string;\n}')
  })

  it('renders arrays of objects with the singular element name', () => {
    const out = render({ posts: [{ title: 'a' }] })
    expect(out).toContain('posts: Post[];')
    expect(out).toContain('interface Post {')
  })

  it('marks optional fields with ?', () => {
    const out = render({ items: [{ id: 1, name: 'a' }, { id: 2 }] })
    expect(out).toContain('name?: string;')
  })

  it('renders enums as a type alias and references it', () => {
    const out = render({ status: ['active', 'inactive'] })
    expect(out).toContain("type Status = 'active' | 'inactive';")
    expect(out).toContain('status: Status[];')
  })

  it('emits format comments when enabled and omits them when disabled', () => {
    expect(render({ createdAt: '2025-01-15T00:00:00Z' })).toContain('createdAt: string; // ISO date-time')
    expect(render({ createdAt: '2025-01-15T00:00:00Z' }, { emitComments: false })).toContain('createdAt: string;\n')
  })

  it('comments union fields', () => {
    const out = render({ mix: [1, 'a'] })
    expect(out).toContain('mix: (number | string)[];')
  })

  it('supports the type style', () => {
    const out = render({ id: 1 }, { style: 'type' })
    expect(out).toBe('type Root = {\n  id: number;\n};')
  })

  it('renders a non-object root as a type alias', () => {
    expect(render('x')).toBe('type Root = string;')
    expect(render([{ id: 1 }])).toContain('type Root = Root[];')
  })
})
