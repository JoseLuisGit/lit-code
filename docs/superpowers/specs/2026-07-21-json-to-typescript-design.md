# JSON → TypeScript Types — Design Spec

**Date:** 2026-07-21
**Status:** Approved design, pending implementation plan

## Context

`lit-code` is a collection of client-side developer tools (JSON Viewer, Text Compare, Base64, Image Editor, Color Palette, Regex Tester, JWT Decoder). All tools are 100% browser-side, zero external runtime dependencies, and follow a consistent `View → composable → pure utils` architecture with a colocated test suite under `test/`.

This spec adds a **JSON → TypeScript Types** tool: paste a JSON document, get generated TypeScript interfaces. It is the "Advanced" tier — configurable output plus inference extras (string enums, string-format detection, union comments).

## Goals

- Convert arbitrary JSON into readable TypeScript type declarations, live as the user types.
- Extract nested objects into named interfaces; merge array element shapes into a single interface with optional fields.
- Infer string-literal unions (enums), detect common string formats, and annotate unions — all toggleable.
- Reuse existing JSON validation and the established reactive/clipboard patterns. No new dependencies.

## Non-goals (v1)

- JSDoc `@example` annotations (explicitly dropped to avoid output bloat).
- Deduplication of structurally-identical interfaces with different names (deferrable; operates on the IR later without touching the renderer).
- `.ts` file download (copy-to-clipboard covers the primary use case).
- Union-of-shapes for mixed arrays (we merge with optionals instead).

## Architecture

Follows the repo's `View → composable → pure utils` pattern. The engine is split into two independent pure functions around a shared intermediate representation (IR), so **inference** and **rendering** are separately testable.

```
src/
├── types/
│   └── json-to-ts.ts          # SchemaNode IR + options/result interfaces
├── utils/
│   ├── ts-schema-infer.ts     # inferSchema(json, options) → SchemaNode
│   └── ts-schema-render.ts    # renderTypeScript(ir, options) → string
├── composables/
│   └── use-json-to-ts.ts      # reactive state; reuses useJsonValidator
└── views/
    └── JsonToTsView.vue        # two-panel UI
```

Integration changes (mirroring how Regex Tester was wired in):
- `src/tools/registry.ts` — new entry `json-to-typescript`, `status: 'active'`, tags `['json', 'typescript', 'codegen']`.
- `src/router/index.ts` — route `/json-to-typescript` → `JsonToTsView.vue`.

### Data flow

```
textarea JSON ──▶ useJsonValidator (REUSED) ──▶ parsedData
                                                    │
                                inferSchema(parsedData, opts)
                                                    ▼
                                              SchemaNode (IR)
                                                    │
                                renderTypeScript(ir, opts)
                                                    ▼
                                          string TS ──▶ output panel + copy
```

Reuse:
- `use-json-validator.ts` provides parsing, `isValid`, `errorMessage`, and the `watch(..., { immediate: true })` pattern — no reinvented validation.
- Format-detection regexes are based on the patterns already in `regex-examples.ts` (ISO date, email, URL).

## Intermediate Representation

```ts
type SchemaNode =
  | { kind: 'primitive'; type: 'string' | 'number' | 'boolean'; format?: StringFormat }
  | { kind: 'null' }
  | { kind: 'enum'; values: string[] }              // union of string literals
  | { kind: 'array'; element: SchemaNode }
  | { kind: 'object'; name: string; fields: Field[] }
  | { kind: 'union'; options: SchemaNode[] }         // e.g. string | number | null
  | { kind: 'unknown' }                              // empty arrays, pure null

interface Field { key: string; value: SchemaNode; optional: boolean }
type StringFormat = 'date' | 'date-time' | 'email' | 'uuid' | 'url'
```

## Inference semantics — `inferSchema(json, options)`

1. **Nested objects → named interfaces.** Each `object` node gets a PascalCase `name` derived from its key; array element names are singularized (`users` → `User`, `posts` → `Post`). A name registry resolves collisions (`User`, `User2`, …).
2. **Arrays of objects → merge with optionals.** Keys are collected across *all* elements; a key absent from any element is `optional: true`. Differing value types for the same key collapse into a `union`.
3. **String enums.** An array whose elements are *all* strings with a distinct-value count in the range **> 1 and ≤ 12** is inferred as `enum`; otherwise `string[]`. A single distinct value → plain `string`. Controlled by `detectEnums`.
4. **Format detection.** A string `primitive` is tagged with `format` when it matches ISO date / ISO date-time / email / UUID / URL. The TS type stays `string`; the format only feeds a render comment. Controlled by `detectFormats`.
5. **`null` and mixed scalars → union.** `null` alongside a type yields `T | null`; mixed scalar types in an array yield `string | number`, etc.

Edge cases:
- Root that is an array → `type Root = User[]`; root that is a primitive → `type Root = string`. Root need not be an object.
- Empty array or pure `null` → `unknown` (`unknown[]` for `[]`).
- JSON is acyclic by definition — no infinite recursion possible.

## Rendering — `renderTypeScript(ir, options)`

Walks the IR, collects all `object`/`enum` nodes, and emits them as top-level declarations, **root first** then dependencies.

- **Style toggle:** `interface User { … }` or `type User = { … }`. Enums always render as `type Status = 'a' | 'b'`.
- **Comments** (when `emitComments`): detected format → `createdAt: string; // ISO date-time`; union origin → `id: string | number; // mixed in array`.
- Optional fields use `?`. Indentation is 2 spaces (consistent with the repo's `formatJson`).

### Options

```ts
interface JsonToTsOptions {
  rootName: string          // default 'Root'
  style: 'interface' | 'type'   // default 'interface'
  detectEnums: boolean      // default true
  detectFormats: boolean    // default true
  emitComments: boolean     // default true
}
```

## UI — `JsonToTsView.vue`

Two-panel layout, same shell as JSON Viewer (`ToolHeader`, `useTheme`, local `computed` Tailwind class helpers, `isDarkTheme`).

```
┌ ToolHeader "JSON → TypeScript" ─────────────────────────┐
│ [ Root name: Root ]  ◉ interface ○ type                  │
│ ☑ enums   ☑ formats   ☑ comments        [Example][Clear] │
├──────────────────────────┬──────────────────────────────┤
│  JSON (textarea)         │  TypeScript (output)  [Copy]  │
│  live validation,        │  interface Root { … }         │
│  inline error if invalid │  interface User { … }         │
└──────────────────────────┴──────────────────────────────┘
```

- **Live conversion:** a `computed` chains `parsedData → inferSchema → renderTypeScript`; recomputes on keystroke or option change (same reactive pattern as Regex Tester).
- **Copy to clipboard:** `hasCopied` + 2s timeout pattern (already used in 4 tools).
- **Load example:** a representative JSON (nested object + mixed-shape array + ISO date + enum-like field) to showcase all features at once.
- Invalid JSON → inline error from the validator; output panel shows an empty placeholder, never throws.

## Testing

Colocated specs under `test/`, matching the existing suite's discipline (Vitest, explicit imports, no mocks for pure utils):

- **`test/utils/ts-schema-infer.spec.ts`** — primitives; nested naming + PascalCase; singularization (`users→User`); name collisions (`User`/`User2`); array merge with optionals; enum boundary (2 values ✓, 12 ✓, 13 → `string[]`, 1 → `string`); each format (ISO date/date-time, email, uuid, url); `null` unions; mixed scalars; empty array → `unknown`; root array/primitive.
- **`test/utils/ts-schema-render.spec.ts`** — `interface` vs `type`; comments on/off; optional `?`; enum rendering; root-first ordering; 2-space indentation.
- **`test/composables/use-json-to-ts.spec.ts`** — live conversion; invalid JSON → error + empty output; option reactivity; copy (clipboard stub + fake timer 2s); `loadExample`; `clearAll`.
- **Router/registry** — the existing cross-check smoke test (`every active tool has a route /<id>`) automatically fails if the new tool's route is forgotten.

## Verification

- `npm test` — all specs green, including the new infer/render/composable specs.
- `npm run build` — `vue-tsc -b` type-checks and the production build succeeds.
- Manual end-to-end: navigate to `/json-to-typescript`, load the example, toggle each option, confirm live output and copy work across light/dark themes.
