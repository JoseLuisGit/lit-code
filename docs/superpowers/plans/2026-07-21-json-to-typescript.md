# JSON → TypeScript Types Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a client-side tool that converts pasted JSON into TypeScript type declarations, live, with configurable output and inference extras (string enums, format detection, union comments).

**Architecture:** Two-pass engine around a shared intermediate representation (IR). `inferSchema` turns parsed JSON into a `SchemaNode` tree; `renderTypeScript` turns that tree into a TS string. A composable wires them to the existing JSON validator; a two-panel Vue view drives it. Both engine halves are pure functions with colocated Vitest specs.

**Tech Stack:** Vue 3 (`<script setup>`), TypeScript (strict), Vite 7, Tailwind 3, Vitest 4 (+ happy-dom, @vue/test-utils). No new dependencies.

## Global Constraints

- No new runtime dependencies — browser-native APIs only.
- TypeScript strict mode; project flags include `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax` (via `@vue/tsconfig`) — use `import type` for type-only imports, no enums (use union types/maps).
- Prefer `interface` for object shapes, `type` aliases for unions. Use the `function` keyword for pure functions. Named exports only.
- Composables are plain `useXxx()` functions returning a flat object of refs + functions.
- Specs live under `test/`, mirroring `src/` structure, with relative imports into `../../src/...`. Explicit `import { describe, it, expect } from 'vitest'` (no globals).
- Indentation in generated TS output: 2 spaces.
- User reviews and commits manually is NOT in effect for this plan's own commits — the plan uses TDD commits per task; the human runs them. (Do not push.)

---

## File Structure

- `src/types/json-to-ts.ts` — IR (`SchemaNode`, `Field`, `StringFormat`) + `JsonToTsOptions`. No logic.
- `src/utils/ts-schema-infer.ts` — `inferSchema(json, options)` and helpers (naming registry, singularization, enum detection, format detection).
- `src/utils/ts-schema-render.ts` — `renderTypeScript(ir, options)` and helpers (declaration collection, ordering, comment emission).
- `src/utils/json-to-ts-examples.ts` — static example JSON string for the "Load example" button.
- `src/composables/use-json-to-ts.ts` — reactive state, reuses `useJsonValidator`, exposes options + `output` + clipboard.
- `src/views/JsonToTsView.vue` — two-panel UI.
- `src/tools/registry.ts` — add tool entry (modify).
- `src/router/index.ts` — add route (modify).
- Tests: `test/utils/ts-schema-infer.spec.ts`, `test/utils/ts-schema-render.spec.ts`, `test/composables/use-json-to-ts.spec.ts`.

---

## Task 1: IR and options types

**Files:**
- Create: `src/types/json-to-ts.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: the IR consumed by every later task.

```ts
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
```

- [ ] **Step 1: Create the types file**

Write the code block above verbatim into `src/types/json-to-ts.ts`.

- [ ] **Step 2: Verify it type-checks**

Run: `npx vue-tsc --noEmit -p tsconfig.app.json`
Expected: no errors referencing `json-to-ts.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/types/json-to-ts.ts
git commit -m "feat(json-to-ts): add IR and options types"
```

---

## Task 2: Format & enum detection helpers

**Files:**
- Create: `src/utils/ts-schema-infer.ts` (helpers only in this task)
- Test: `test/utils/ts-schema-infer.spec.ts`

**Interfaces:**
- Consumes: `StringFormat` from `src/types/json-to-ts.ts`.
- Produces:
  - `detectFormat(value: string): StringFormat | undefined`
  - `singularize(name: string): string`
  - `toPascalCase(key: string): string`

- [ ] **Step 1: Write the failing test**

Create `test/utils/ts-schema-infer.spec.ts`:

```ts
import { describe, it, expect } from 'vitest'
import { detectFormat, singularize, toPascalCase } from '../../src/utils/ts-schema-infer'

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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run test/utils/ts-schema-infer.spec.ts`
Expected: FAIL — cannot resolve `../../src/utils/ts-schema-infer`.

- [ ] **Step 3: Write minimal implementation**

Create `src/utils/ts-schema-infer.ts`:

```ts
import type { StringFormat } from '../types/json-to-ts'

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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run test/utils/ts-schema-infer.spec.ts`
Expected: PASS (all `detectFormat`/`toPascalCase`/`singularize` cases).

- [ ] **Step 5: Commit**

```bash
git add src/utils/ts-schema-infer.ts test/utils/ts-schema-infer.spec.ts
git commit -m "feat(json-to-ts): add format detection and naming helpers"
```

---

## Task 3: Core schema inference

**Files:**
- Modify: `src/utils/ts-schema-infer.ts` (add `inferSchema` + private walk helpers)
- Test: `test/utils/ts-schema-infer.spec.ts` (append)

**Interfaces:**
- Consumes: `JsonValue` from `src/types/json.ts`; `SchemaNode`, `JsonToTsOptions`, `DEFAULT_OPTIONS` from `src/types/json-to-ts.ts`; helpers from Task 2.
- Produces: `inferSchema(json: JsonValue, options: JsonToTsOptions): SchemaNode`.

Behavior contract:
- Object → `ObjectNode` with PascalCase `name`; nested object keys name their child interfaces; collisions get numeric suffixes.
- Array of objects → element is a single merged `ObjectNode` (union of keys; keys missing from any element are `optional`); element name is `singularize(toPascalCase(key))`.
- Array of all-strings with 2–12 distinct values and `detectEnums` → `EnumNode`; else primitive element.
- Mixed scalar array / `null` mixed with type → `UnionNode`.
- Empty array or pure `null` array element → `UnknownNode`.
- String primitive → `PrimitiveNode` with `format` when `detectFormats` and a pattern matches.

- [ ] **Step 1: Write the failing tests**

Append to `test/utils/ts-schema-infer.spec.ts`:

```ts
import { inferSchema } from '../../src/utils/ts-schema-infer'
import { DEFAULT_OPTIONS } from '../../src/types/json-to-ts'
import type { JsonToTsOptions } from '../../src/types/json-to-ts'

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
    const walk = (n: import('../../src/types/json-to-ts').SchemaNode) => {
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run test/utils/ts-schema-infer.spec.ts`
Expected: FAIL — `inferSchema` is not exported.

- [ ] **Step 3: Write minimal implementation**

Append to `src/utils/ts-schema-infer.ts`:

```ts
import type { JsonValue } from '../types/json'
import type { Field, JsonToTsOptions, SchemaNode } from '../types/json-to-ts'

const ENUM_MIN = 2
const ENUM_MAX = 12

class NameRegistry {
  private used = new Set<string>()
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
```

Note: `mergeObjects` claims the element name once for the merged interface; per-element walks of object children still name their own nested interfaces via `walk`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run test/utils/ts-schema-infer.spec.ts`
Expected: PASS (all inference cases).

- [ ] **Step 5: Full type-check**

Run: `npx vue-tsc --noEmit -p tsconfig.app.json`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/utils/ts-schema-infer.ts test/utils/ts-schema-infer.spec.ts
git commit -m "feat(json-to-ts): implement schema inference"
```

---

## Task 4: TypeScript renderer

**Files:**
- Create: `src/utils/ts-schema-render.ts`
- Test: `test/utils/ts-schema-render.spec.ts`

**Interfaces:**
- Consumes: `SchemaNode`, `JsonToTsOptions`, `DEFAULT_OPTIONS` from `src/types/json-to-ts.ts`.
- Produces: `renderTypeScript(ir: SchemaNode, options: JsonToTsOptions): string`.

Behavior contract:
- Collects every `object` and `enum` node into top-level declarations, root first, then dependencies in first-seen order.
- Object rendered as `interface Name {` (style `interface`) or `type Name = {` (style `type`). Enum always `type Name = 'a' | 'b'`.
- Field line: `  key?: TypeRef; // comment` — `?` when optional; comment only when `emitComments`.
- Comments: format → `// ISO date` / `// ISO date-time` / `// email` / `// uuid` / `// url`; union field → `// mixed in array`.
- Inline type refs: primitive → `string`/`number`/`boolean`; object → its `Name`; array → `Element[]` (or `(A | B)[]` when the element is a union); enum inline → its `Name`; union → `A | B`; null → `null`; unknown → `unknown`.
- A root that is not an object/enum renders as `type Root = <ref>;`.

- [ ] **Step 1: Write the failing tests**

Create `test/utils/ts-schema-render.spec.ts`:

```ts
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run test/utils/ts-schema-render.spec.ts`
Expected: FAIL — cannot resolve `../../src/utils/ts-schema-render`.

- [ ] **Step 3: Write minimal implementation**

Create `src/utils/ts-schema-render.ts`:

```ts
import type { EnumNode, JsonToTsOptions, ObjectNode, SchemaNode } from '../types/json-to-ts'

const FORMAT_COMMENT: Record<string, string> = {
  'date': 'ISO date',
  'date-time': 'ISO date-time',
  'email': 'email',
  'uuid': 'uuid',
  'url': 'url',
}

export function renderTypeScript(ir: SchemaNode, options: JsonToTsOptions): string {
  const declarations: (ObjectNode | EnumNode)[] = []
  collect(ir, declarations)

  if (declarations.length === 0 || (ir.kind !== 'object' && ir.kind !== 'enum')) {
    return `type ${options.rootName} = ${typeRef(ir)};`
  }

  return declarations.map(node => renderDeclaration(node, options)).join('\n\n')
}

function collect(node: SchemaNode, out: (ObjectNode | EnumNode)[]): void {
  switch (node.kind) {
    case 'object':
      if (!out.includes(node)) out.push(node)
      node.fields.forEach(f => collect(f.value, out))
      break
    case 'enum':
      if (!out.includes(node)) out.push(node)
      break
    case 'array':
      collect(node.element, out)
      break
    case 'union':
      node.options.forEach(o => collect(o, out))
      break
  }
}

function renderDeclaration(node: ObjectNode | EnumNode, options: JsonToTsOptions): string {
  if (node.kind === 'enum') {
    return `type ${node.name} = ${node.values.map(v => `'${v}'`).join(' | ')};`
  }
  const open = options.style === 'interface' ? `interface ${node.name} {` : `type ${node.name} = {`
  const close = options.style === 'interface' ? '}' : '};'
  const lines = node.fields.map(field => {
    const optional = field.optional ? '?' : ''
    const comment = options.emitComments ? fieldComment(field.value) : ''
    return `  ${field.key}${optional}: ${typeRef(field.value)};${comment}`
  })
  return `${open}\n${lines.join('\n')}\n${close}`
}

function fieldComment(node: SchemaNode): string {
  if (node.kind === 'primitive' && node.format) return ` // ${FORMAT_COMMENT[node.format]}`
  if (node.kind === 'array' && node.element.kind === 'union') return ' // mixed in array'
  if (node.kind === 'union') return ' // mixed in array'
  return ''
}

function typeRef(node: SchemaNode): string {
  switch (node.kind) {
    case 'primitive': return node.type
    case 'null': return 'null'
    case 'unknown': return 'unknown'
    case 'enum': return node.name
    case 'object': return node.name
    case 'array': {
      const inner = typeRef(node.element)
      return node.element.kind === 'union' ? `(${inner})[]` : `${inner}[]`
    }
    case 'union': return node.options.map(typeRef).join(' | ')
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run test/utils/ts-schema-render.spec.ts`
Expected: PASS (all render cases).

- [ ] **Step 5: Commit**

```bash
git add src/utils/ts-schema-render.ts test/utils/ts-schema-render.spec.ts
git commit -m "feat(json-to-ts): implement TypeScript renderer"
```

---

## Task 5: Example data + composable

**Files:**
- Create: `src/utils/json-to-ts-examples.ts`
- Create: `src/composables/use-json-to-ts.ts`
- Test: `test/composables/use-json-to-ts.spec.ts`

**Interfaces:**
- Consumes: `useJsonValidator` from `src/composables/use-json-validator.ts`; `inferSchema`, `renderTypeScript`; `JsonToTsOptions`, `DEFAULT_OPTIONS`.
- Produces: `useJsonToTs()` returning `{ jsonText, options, output, isValid, errorMessage, hasOutput, hasCopied, exampleJson, loadExample, copyOutput, clearAll }`.

- [ ] **Step 1: Write the example data file**

Create `src/utils/json-to-ts-examples.ts`:

```ts
export const exampleJson = `{
  "id": 1,
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "createdAt": "2025-01-15T09:30:00Z",
  "role": "admin",
  "profile": {
    "bio": "Mathematician",
    "website": "https://example.com/ada"
  },
  "posts": [
    { "title": "First", "views": 10 },
    { "title": "Second" }
  ],
  "statuses": ["active", "inactive", "active"]
}`
```

- [ ] **Step 2: Write the failing tests**

Create `test/composables/use-json-to-ts.spec.ts`:

```ts
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useJsonToTs } from '../../src/composables/use-json-to-ts'

function stubClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
  return writeText
}

describe('useJsonToTs', () => {
  it('produces TypeScript output for valid JSON', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    expect(tool.isValid.value).toBe(true)
    expect(tool.output.value).toContain('interface Root {')
    expect(tool.output.value).toContain('id: number;')
    expect(tool.hasOutput.value).toBe(true)
  })

  it('surfaces an error and empty output for invalid JSON', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{bad'
    await nextTick()
    expect(tool.isValid.value).toBe(false)
    expect(tool.errorMessage.value).toBeTruthy()
    expect(tool.output.value).toBe('')
  })

  it('reacts to option changes', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    expect(tool.output.value).toContain('interface Root')
    tool.options.style = 'type'
    await nextTick()
    expect(tool.output.value).toContain('type Root = {')
  })

  it('respects a custom root name', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    tool.options.rootName = 'User'
    await nextTick()
    expect(tool.output.value).toContain('interface User {')
  })

  it('loadExample fills valid JSON that produces output', async () => {
    const tool = useJsonToTs()
    tool.loadExample()
    await nextTick()
    expect(tool.isValid.value).toBe(true)
    expect(tool.output.value).toContain('interface Profile')
    expect(tool.output.value).toContain('interface Post')
  })

  it('clearAll resets text and output', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    tool.clearAll()
    await nextTick()
    expect(tool.jsonText.value).toBe('')
    expect(tool.output.value).toBe('')
  })
})

describe('useJsonToTs — clipboard', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('copyOutput writes to clipboard and resets hasCopied after 2s', async () => {
    const writeText = stubClipboard()
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    await tool.copyOutput()
    expect(writeText).toHaveBeenCalledWith(tool.output.value)
    expect(tool.hasCopied.value).toBe(true)
    vi.advanceTimersByTime(2000)
    expect(tool.hasCopied.value).toBe(false)
  })
})
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `npx vitest run test/composables/use-json-to-ts.spec.ts`
Expected: FAIL — cannot resolve `../../src/composables/use-json-to-ts`.

- [ ] **Step 4: Write minimal implementation**

Create `src/composables/use-json-to-ts.ts`:

```ts
import { computed, reactive, ref } from 'vue'
import { useJsonValidator } from './use-json-validator'
import { inferSchema } from '../utils/ts-schema-infer'
import { renderTypeScript } from '../utils/ts-schema-render'
import { exampleJson } from '../utils/json-to-ts-examples'
import { DEFAULT_OPTIONS } from '../types/json-to-ts'
import type { JsonToTsOptions } from '../types/json-to-ts'
import type { JsonValue } from '../types/json'

export function useJsonToTs() {
  const { jsonText, isValid, errorMessage, parsedData, clearJson } = useJsonValidator()
  const options = reactive<JsonToTsOptions>({ ...DEFAULT_OPTIONS })
  const hasCopied = ref(false)

  const output = computed(() => {
    // isValid is false for empty/whitespace or malformed JSON, so an invalid
    // state (including empty input) always yields an empty output panel.
    if (!isValid.value) return ''
    return renderTypeScript(inferSchema(parsedData.value as JsonValue, options), options)
  })

  const hasOutput = computed(() => output.value.length > 0)

  function loadExample(): void {
    jsonText.value = exampleJson
  }

  async function copyOutput(): Promise<void> {
    if (!output.value) return
    await navigator.clipboard.writeText(output.value)
    hasCopied.value = true
    setTimeout(() => { hasCopied.value = false }, 2000)
  }

  function clearAll(): void {
    clearJson()
    hasCopied.value = false
  }

  return {
    jsonText,
    options,
    output,
    isValid,
    errorMessage,
    hasOutput,
    hasCopied,
    exampleJson,
    loadExample,
    copyOutput,
    clearAll,
  }
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run test/composables/use-json-to-ts.spec.ts`
Expected: PASS (all composable cases).

- [ ] **Step 6: Commit**

```bash
git add src/utils/json-to-ts-examples.ts src/composables/use-json-to-ts.ts test/composables/use-json-to-ts.spec.ts
git commit -m "feat(json-to-ts): add example data and composable"
```

---

## Task 6: View + registry + router wiring

**Files:**
- Create: `src/views/JsonToTsView.vue`
- Modify: `src/tools/registry.ts` (add entry to `toolRegistry`)
- Modify: `src/router/index.ts` (add route before the catch-all)

**Interfaces:**
- Consumes: `useJsonToTs`, `useTheme`, `ToolHeader`, `SNIPPET_LANGUAGES`-style option lists (inline here).
- Produces: an `active` tool reachable at `/json-to-typescript`. The existing `test/tools/registry.spec.ts` cross-check (every active tool has a route) covers this automatically.

- [ ] **Step 1: Add the router route**

In `src/router/index.ts`, add before the `/:pathMatch(.*)*` catch-all:

```ts
  {
    path: '/json-to-typescript',
    name: 'json-to-typescript',
    component: () => import('../views/JsonToTsView.vue'),
  },
```

- [ ] **Step 2: Add the registry entry**

In `src/tools/registry.ts`, append to `toolRegistry` (after the `jwt-decoder` entry):

```ts
  {
    id: 'json-to-typescript',
    name: 'JSON to TypeScript',
    description: 'Generate TypeScript interfaces from JSON with enums, format detection, and configurable output.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['json', 'typescript', 'codegen'],
  },
```

- [ ] **Step 3: Create the view**

Create `src/views/JsonToTsView.vue`:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'
import { useJsonToTs } from '../composables/use-json-to-ts'

const { currentTheme } = useTheme()
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
  jsonText, options, output, errorMessage,
  hasOutput, hasCopied, loadExample, copyOutput, clearAll,
} = useJsonToTs()

const cardClass = computed(() => [
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.shadow,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-white/50',
])

const monoBoxClass = 'font-mono text-sm'

const toggles = [
  { key: 'detectEnums', label: 'enums' },
  { key: 'detectFormats', label: 'formats' },
  { key: 'emitComments', label: 'comments' },
] as const
</script>

<template>
  <div class="max-w-[1800px] mx-auto flex flex-col gap-4 pb-8">
    <ToolHeader
      tool-name="JSON to TypeScript"
      tool-description="Generate TypeScript types from JSON, live"
    />

    <!-- Options bar -->
    <div class="rounded-2xl p-4 md:p-5 flex flex-wrap items-center gap-3 transition-all duration-300" :class="cardClass">
      <label class="flex items-center gap-2 text-sm" :class="currentTheme.colors.textSecondary">
        Root name
        <input
          v-model="options.rootName"
          type="text"
          spellcheck="false"
          class="rounded-lg px-2 py-1 font-mono text-sm outline-none w-32 focus:ring-2 focus:ring-primary-500/50"
          :class="[
            currentTheme.colors.bgCard, currentTheme.colors.textPrimary,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
          ]"
        />
      </label>

      <div class="inline-flex rounded-lg p-0.5 gap-0.5" :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'">
        <button
          v-for="style in (['interface', 'type'] as const)"
          :key="style"
          class="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
          :class="options.style === style
            ? (isDarkTheme ? 'bg-white/15 text-white' : 'bg-white text-gray-900 shadow-sm')
            : (isDarkTheme ? 'text-gray-400' : 'text-gray-500')"
          @click="options.style = style"
        >{{ style }}</button>
      </div>

      <label
        v-for="toggle in toggles"
        :key="toggle.key"
        class="flex items-center gap-1.5 text-sm cursor-pointer"
        :class="currentTheme.colors.textSecondary"
      >
        <input v-model="options[toggle.key]" type="checkbox" class="accent-primary-600" />
        {{ toggle.label }}
      </label>

      <div class="ml-auto flex items-center gap-2">
        <button class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
          :class="isDarkTheme ? 'text-gray-400 hover:bg-white/10' : 'text-gray-500 hover:bg-black/5'"
          @click="loadExample">Example</button>
        <button class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
          :class="isDarkTheme ? 'text-gray-400 hover:bg-white/10' : 'text-gray-500 hover:bg-black/5'"
          @click="clearAll">Clear</button>
      </div>
    </div>

    <!-- Two-panel -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Input -->
      <div class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300" :class="cardClass">
        <span class="text-xs font-semibold uppercase tracking-wide" :class="currentTheme.colors.textMuted">JSON</span>
        <textarea
          v-model="jsonText"
          spellcheck="false"
          placeholder="Paste JSON here..."
          class="flex-1 min-h-[300px] lg:min-h-[440px] resize-none rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary-500/50"
          :class="[
            monoBoxClass, currentTheme.colors.bgCard, currentTheme.colors.textPrimary,
            isDarkTheme ? 'ring-1 ring-white/10 placeholder:text-gray-600' : 'border border-white/50 placeholder:text-gray-300',
          ]"
        />
        <p v-if="errorMessage" class="text-xs px-3 py-2 rounded-lg"
          :class="isDarkTheme ? 'bg-red-900/40 text-red-300' : 'bg-red-50 text-red-700 border border-red-200'"
        >{{ errorMessage }}</p>
      </div>

      <!-- Output -->
      <div class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300" :class="cardClass">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold uppercase tracking-wide" :class="currentTheme.colors.textMuted">TypeScript</span>
          <button
            v-if="hasOutput"
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
            :class="isDarkTheme ? 'text-gray-400 hover:bg-white/10' : 'text-gray-500 hover:bg-black/5'"
            @click="copyOutput"
          >{{ hasCopied ? 'Copied!' : 'Copy' }}</button>
        </div>
        <pre
          class="flex-1 min-h-[300px] lg:min-h-[440px] m-0 p-3 rounded-xl whitespace-pre-wrap break-words overflow-auto"
          :class="[
            monoBoxClass, currentTheme.colors.textPrimary,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
          ]"
        >{{ output }}</pre>
      </div>
    </div>
  </div>
</template>
```

- [ ] **Step 4: Run the registry/router smoke tests**

Run: `npx vitest run test/tools/registry.spec.ts test/router/index.spec.ts`
Expected: PASS — the active-tool-has-route cross-check passes with the new entry.

- [ ] **Step 5: Type-check and build**

Run: `npm run build`
Expected: `vue-tsc -b` passes and the production build succeeds (a `JsonToTsView` chunk appears).

- [ ] **Step 6: Commit**

```bash
git add src/views/JsonToTsView.vue src/tools/registry.ts src/router/index.ts
git commit -m "feat(json-to-ts): add view and wire up route and registry"
```

---

## Task 7: Full-suite verification

**Files:** none (verification only).

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: all specs green, including the 3 new spec files (infer, render, composable).

- [ ] **Step 2: Coverage check**

Run: `npm run coverage`
Expected: `ts-schema-infer.ts`, `ts-schema-render.ts`, and `use-json-to-ts.ts` show high coverage (≥90% statements on the two util files).

- [ ] **Step 3: Manual end-to-end**

Run: `npm run dev`, open the app, navigate to JSON to TypeScript from the home grid. Click **Example**, confirm live output shows `interface Root`, `interface Profile`, `interface Post`, `type Statuses = ...`; toggle `interface`/`type`, the three checkboxes, and edit the root name — output updates live. Click **Copy**, confirm the button flips to `Copied!`. Verify in both a light and a dark theme.

- [ ] **Step 4: Final commit (if any docs/notes changed)**

```bash
git status
# commit only if there are outstanding intended changes
```

---

## Self-Review Notes

- **Spec coverage:** IR (T1) ✓, nested naming + collisions + singularization (T2/T3) ✓, array merge with optionals (T3) ✓, enum threshold >1 & ≤12 (T3) ✓, format detection (T2/T3) ✓, unions/null (T3) ✓, interface/type + comments + ordering + 2-space indent (T4) ✓, live conversion + invalid handling + options reactivity + copy + example + clear (T5) ✓, view + registry + router (T6) ✓, testing + verification (T2–T7) ✓. Non-goals (JSDoc, dedup, `.ts` download, union-of-shapes) correctly excluded.
- **Type consistency:** `useJsonToTs` returns `{ jsonText, options, output, isValid, errorMessage, hasOutput, hasCopied, exampleJson, loadExample, copyOutput, clearAll }` — the view (T6) and spec (T5) consume exactly these names. `inferSchema(json, options)` and `renderTypeScript(ir, options)` signatures match across T3/T4/T5. Registry entry `id: 'json-to-typescript'` matches the route `path: '/json-to-typescript'` for the cross-check test.
- **Known simplification:** `sameNode` in T3 deduplicates union options conservatively (object nodes are never treated as equal, so distinct object shapes in a scalar-mixed array stay as separate union options). This is acceptable for v1; array elements that are all-objects go through `mergeObjects` instead, which is the primary path.
