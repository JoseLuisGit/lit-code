# lit-code — Technical Reference

> Deep technical documentation for every component, composable, utility, and type in the project, organized by tool.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Global Architecture](#2-global-architecture)
   - 2.1 [Entry Point — `main.ts`](#21-entry-point--maints)
   - 2.2 [Root Component — `App.vue`](#22-root-component--appvue)
   - 2.3 [Tool Registry — `registry.ts`](#23-tool-registry--registryts)
   - 2.4 [Theme System — `use-theme.ts`](#24-theme-system--use-themets)
   - 2.5 [Shared Components](#25-shared-components)
3. [JSON Viewer Tool](#3-json-viewer-tool)
4. [Text Compare Tool](#4-text-compare-tool)
5. [Base64 Tool](#5-base64-tool)
6. [Color Palette Tool](#6-color-palette-tool)
7. [Image Editor Tool](#7-image-editor-tool)
8. [Type System Reference](#8-type-system-reference)
9. [Build & Deployment](#9-build--deployment)

---

## 1. Project Overview

**lit-code** is a single-page developer tools application built with Vue 3, TypeScript, and Vite. It provides a collection of browser-based utilities that require no backend — all processing happens client-side.

### Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | Vue 3 (Composition API) | 3.5.24 |
| Language | TypeScript | ~5.9.3 |
| Build Tool | Vite | 7.2.4 |
| Styling | Tailwind CSS | 3.4.19 |
| 3D Visualization | Three.js | 0.182.0 |
| Type Checker | vue-tsc | 3.1.4 |
| Deployment | gh-pages | 6.2.0 |

### Directory Layout

```
src/
├── main.ts                          # Vue bootstrap
├── App.vue                          # Root — manual SPA router
├── style.css                        # Global styles + Tailwind overrides
│
├── tools/
│   └── registry.ts                  # Tool metadata definitions
│
├── views/                           # One view component per tool
│   ├── HomeView.vue
│   ├── JsonViewerView.vue
│   ├── TextCompareView.vue
│   ├── Base64View.vue
│   ├── ColorPaletteView.vue
│   └── ImageEditorView.vue
│
├── components/                      # Shared + tool-specific UI components
│   ├── ToolHeader.vue
│   ├── ThemeSelector.vue
│   ├── JsonInput.vue
│   ├── JsonViewer.vue
│   ├── JsonNode.vue
│   ├── JsonTreeModal.vue
│   └── DiffOutputPanel.vue
│
├── composables/                     # Vue 3 composables — state + logic
│   ├── use-theme.ts
│   ├── use-json-validator.ts
│   ├── use-json-highlighter.ts
│   ├── use-json-node.ts
│   ├── use-tree-visualizer.ts
│   ├── use-text-diff.ts
│   ├── use-base64.ts
│   ├── use-color-palette.ts
│   └── use-image-editor.ts
│
├── utils/                           # Pure utility functions
│   ├── json-to-tree.ts
│   ├── text-diff.ts
│   ├── base64.ts
│   ├── color-utils.ts
│   └── image-editor.ts
│
└── types/                           # TypeScript type definitions
    ├── json.ts
    ├── tree-visualization.ts
    └── image-editor.ts
```

### Active Tools

| Tool | ID | Description |
|------|----|-------------|
| JSON Viewer | `json-viewer` | Parse, format, tree-view, and 3D-visualize JSON |
| Text Compare | `text-compare` | LCS-based side-by-side diff with char-level highlighting |
| Base64 | `base64` | Encode/decode text and binary files |
| Color Palette | `color-palette` | HEX/RGB/HSL conversion with 6 color-harmony generators |
| Image Editor | `image-editor` | Canvas-based crop, flip, rotate with action pipeline |
| Regex Tester | `regex-tester` | *(coming-soon — no implementation yet)* |

---

## 2. Global Architecture

### 2.1 Entry Point — `main.ts`

```
src/main.ts
```

```typescript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

Three operations happen in strict order:

1. **`createApp(App)`** — instantiates the Vue 3 application with `App.vue` as the root component tree.
2. **`'./style.css'` import** — injects the global stylesheet before mount, ensuring Tailwind base/components/utilities and custom CSS variables are available before first render.
3. **`.mount('#app')`** — attaches the virtual DOM to the `<div id="app">` in `index.html`.

No plugin registration (no router, no Pinia) occurs here — state is local and routing is manual.

---

### 2.2 Root Component — `App.vue`

```
src/App.vue
```

**Routing strategy:** The app has no Vue Router. Navigation is managed by a single `ref<string | null>` that acts as the active tool ID.

#### Reactive State

```typescript
const currentToolId = ref<string | null>(null)
```

`null` renders the home page; any tool ID renders the matching view.

#### Navigation Functions

```typescript
function selectTool(toolId: string): void {
  currentToolId.value = toolId
}

function goHome(): void {
  currentToolId.value = null
}
```

`selectTool` is passed down as `@select-tool` to `HomeView`. Every tool view emits `@back`, which calls `goHome()`.

#### View Transition

```vue
<Transition name="view" mode="out-in">
  <HomeView v-if="currentToolId === null" key="home" @select-tool="selectTool" />
  <JsonViewerView v-else-if="currentToolId === 'json-viewer'" key="json-viewer" @back="goHome" />
  <!-- ... other tools ... -->
</Transition>
```

- `mode="out-in"` ensures the leaving component completes its exit animation before the entering component starts.
- Each view has an explicit `key` so Vue treats them as distinct elements, triggering the transition on every tool switch.

#### CSS Transition Classes

```css
.view-enter-active, .view-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.view-enter-from {
  opacity: 0;
  transform: translateY(8px);   /* slides up on enter */
}
.view-leave-to {
  opacity: 0;
  transform: translateY(-8px);  /* slides up on leave */
}
```

The result is a vertical slide with fade — the leaving view slides up and fades, the entering view slides in from below.

#### Theme Application

```vue
<div
  class="min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300"
  :class="currentTheme.colors.bgPrimary"
>
```

The outermost element binds `bgPrimary` from the current theme. Because `bgPrimary` contains gradient utility classes (e.g. `from-slate-50 via-primary-50/30 to-slate-100`), the background changes globally whenever the theme changes.

---

### 2.3 Tool Registry — `registry.ts`

```
src/tools/registry.ts
```

#### `ToolStatus` Type

```typescript
export type ToolStatus = 'active' | 'coming-soon'
```

#### `Tool` Interface

```typescript
export interface Tool {
  id: string          // URL-safe identifier, used by App.vue for routing
  name: string        // Display name shown in the UI
  description: string // One-sentence description shown on tool cards
  icon: string        // SVG path data (d attribute)
  iconViewBox: string // SVG viewBox string
  status: ToolStatus
  tags: string[]      // Searchable/filterable labels
}
```

#### `toolRegistry` Array

Exported as an ordered array of all tools. `HomeView` iterates this array to render the tool grid. Tools with `status: 'coming-soon'` are rendered with a disabled overlay and no click handler.

#### `findTool` Helper

```typescript
export function findTool(id: string): Tool | undefined {
  return toolRegistry.find(tool => tool.id === id)
}
```

Linear search by `id`. Used to look up metadata from an ID string.

---

### 2.4 Theme System — `use-theme.ts`

```
src/composables/use-theme.ts
```

The most shared composable in the project. Every component that needs color information consumes it.

#### `ThemeName` Union

```typescript
export type ThemeName = 'light' | 'dark' | 'midnight' | 'forest' | 'sunset'
```

#### `ThemeColors` Interface (all fields)

```typescript
export interface ThemeColors {
  // Backgrounds — Tailwind gradient/bg utility strings
  bgPrimary: string       // root gradient, applied to App.vue wrapper
  bgSecondary: string     // panel backgrounds
  bgTertiary: string      // subtle inset areas
  bgCard: string          // card surfaces (includes backdrop-blur-sm)
  bgCardHover: string     // hover state for cards

  // Text
  textPrimary: string     // headings and body
  textSecondary: string   // labels and secondary content
  textMuted: string       // hints, placeholders, meta

  // Accent (primary action color)
  accent: string          // button backgrounds
  accentHover: string     // button hover
  accentLight: string     // subtle accent backgrounds

  // Status
  success: string         // valid / OK indicators
  successLight: string    // success banner backgrounds
  error: string           // error text
  errorLight: string      // error banner backgrounds

  // Borders
  border: string          // default border
  borderHover: string     // border on hover

  // JSON tree type colors (Tailwind text classes)
  jsonString: string
  jsonNumber: string
  jsonBoolean: string
  jsonNull: string
  jsonObject: string
  jsonArray: string

  // Syntax highlighting (raw CSS hex values, not Tailwind classes)
  syntaxColors: {
    key: string         // Object keys ("name":)
    string: string      // String values
    number: string      // Number values
    boolean: string     // true/false
    null: string        // null
    punctuation: string // { } [ ] : ,
  }

  shadow: string          // Tailwind shadow utility
  shadowLg: string        // larger shadow utility
}
```

#### Theme Objects — Color Values

| Field | light | dark | midnight | forest | sunset |
|-------|-------|------|----------|--------|--------|
| `bgPrimary` | `from-slate-50 via-primary-50/30 to-slate-100` | `from-gray-900 via-gray-900 to-gray-950` | `from-slate-950 via-indigo-950 to-slate-950` | `from-emerald-50 via-green-50 to-teal-50` | `from-orange-50 via-rose-50 to-purple-50` |
| `accent` | `bg-primary-600` | `bg-primary-500` | `bg-indigo-500` | `bg-emerald-600` | `bg-orange-500` |
| `syntax.key` | `#166534` | `#6ee7b7` | `#99f6e4` | `#14532d` | `#881337` |
| `syntax.number` | `#1d4ed8` | `#60a5fa` | `#818cf8` | `#134e4a` | `#9a3412` |
| `syntax.boolean` | `#6d28d9` | `#a78bfa` | `#c084fc` | `#3f6212` | `#6b21a8` |

#### Module-Level Singleton

```typescript
const currentThemeName = ref<ThemeName>(getStoredTheme())
```

This `ref` lives at module scope — outside the `useTheme()` function. This means all callers share the same reactive state. Calling `useTheme()` in any component returns a view into the same underlying ref; changing the theme in one component is immediately visible everywhere.

#### `getStoredTheme()` — Initialization Priority

```typescript
function getStoredTheme(): ThemeName {
  if (typeof window === 'undefined') return 'light'          // SSR guard
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && stored in themes) return stored as ThemeName  // 1. localStorage
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark' // 2. system
  return 'light'                                              // 3. default
}
```

Priority: **stored preference → OS dark mode → light fallback**.

#### `useTheme()` Composable — Return Shape

```typescript
return {
  currentTheme,       // Computed<Theme> — full theme object for current name
  currentThemeName,   // Ref<ThemeName> — raw name string
  allThemes,          // Computed<Theme[]> — all 5 themes, for selector rendering
  setTheme,           // (name: ThemeName) => void
  cycleTheme,         // () => void — advances to next theme in order
}
```

#### `setTheme(name)` Side Effects

```typescript
function setTheme(themeName: ThemeName): void {
  currentThemeName.value = themeName
  localStorage.setItem(STORAGE_KEY, themeName)
  if (themeName === 'dark' || themeName === 'midnight') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
```

Three side effects in order:
1. Update reactive ref — triggers all computed consumers.
2. Persist to `localStorage` under key `'json-visualizer-theme'`.
3. Toggle the `dark` class on `<html>` — enables Tailwind's `dark:` variant for any utility that uses it.

#### `cycleTheme()` Algorithm

```typescript
function cycleTheme(): void {
  const themeNames = Object.keys(themes) as ThemeName[]  // ['light','dark','midnight','forest','sunset']
  const currentIndex = themeNames.indexOf(currentThemeName.value)
  const nextIndex = (currentIndex + 1) % themeNames.length
  setTheme(themeNames[nextIndex]!)
}
```

Wraps around using modulo arithmetic over the ordered keys of the `themes` record.

---

### 2.5 Shared Components

#### `ToolHeader.vue`

```
src/components/ToolHeader.vue
```

**Props:**

```typescript
interface Props {
  toolName: string
  toolDescription?: string  // optional subtitle
}
```

**Emits:** `back` (no payload)

**Layout:** Three-column flex row with fixed-width side columns (`w-32`) and a centered title column (`flex-1`):

- Left: back button → emits `'back'`
- Center: `toolName` as gradient `bg-clip-text` heading + optional `toolDescription` in muted color
- Right: `<ThemeSelector />` component

**Dark detection:**

```typescript
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)
```

Used to swap button hover styles between light and dark variants.

#### `ThemeSelector.vue`

```
src/components/ThemeSelector.vue
```

**State:**

```typescript
const isOpen = ref(false)
const selectorRef = ref<HTMLElement | null>(null)
```

**Click-outside handler:** Registered on `document` via `onMounted` / removed on `onUnmounted`. Compares `event.target` with `selectorRef.value.contains()`.

**Keyboard handler:** `Escape` key closes the dropdown.

**Dropdown animation** uses Vue's `<Transition>` with explicit enter/leave classes:

```
enter: opacity-0 scale-95 -translate-y-2  →  opacity-100 scale-100 translate-y-0
leave: opacity-100 scale-100 translate-y-0  →  opacity-0 scale-95 -translate-y-2
```

Durations: 200ms enter, 150ms leave — asymmetric for a snappier close feel.

**Accessibility:** `role="listbox"` on the dropdown, `role="option"` + `aria-selected` on each item, `aria-expanded` on the trigger button.

---

## 3. JSON Viewer Tool

### Component Hierarchy

```
JsonViewerView.vue
├── ToolHeader.vue
├── JsonInput.vue
│   ├── useJsonValidator()
│   └── useJsonHighlighter()
└── JsonViewer.vue
    ├── JsonNode.vue (recursive)
    │   └── useJsonNode()
    └── JsonTreeModal.vue
        └── useTreeVisualizer()
            └── Three.js scene
```

### Data Flow

```
User types JSON text
        │
        ▼
  jsonText (ref in useJsonValidator)
        │
        ├── watch(jsonText) → JSON.parse() → parsedData / errorMessage
        │
        ├── useJsonHighlighter → tokenize() → highlightedHtml (for input overlay)
        │
        └── parsedData → jsonToTree() → TreeNode
                                │
                                ├── JsonViewer renders JsonNode tree
                                │
                                └── JsonTreeModal → useTreeVisualizer → Three.js
```

---

### `JsonViewerView.vue`

```
src/views/JsonViewerView.vue
```

Orchestrates the two-panel layout:

- **Left panel** (`JsonInput`): receives `jsonText` and exposes format/compact/clear actions
- **Right panel** (`JsonViewer`): receives `parsedData` and renders the tree

The view itself holds no business logic — it connects `useJsonValidator()` output to both child components.

---

### `useJsonValidator` — `src/composables/use-json-validator.ts`

**Signature:**

```typescript
export function useJsonValidator(initialValue = ''): {
  jsonText: Ref<string>
  errorMessage: Ref<string | null>
  parsedData: Ref<JsonValue | null>
  isValid: ComputedRef<boolean>
  hasError: ComputedRef<boolean>
  hasContent: ComputedRef<boolean>
  formatJson: () => void
  compactJson: () => void
  clearJson: () => void
  setJsonText: (value: string) => void
}
```

**Reactive validation via `watch`:**

```typescript
watch(jsonText, validateAndParse, { immediate: true })
```

`{ immediate: true }` runs `validateAndParse` on initialization, so initial values (e.g. pre-loaded sample data) are parsed immediately without waiting for user input.

**`validateAndParse()`:**

```typescript
function validateAndParse() {
  try {
    if (!hasContent.value) {
      errorMessage.value = null
      parsedData.value = null
      return
    }
    parsedData.value = JSON.parse(jsonText.value) as JsonValue
    errorMessage.value = null
  } catch (error) {
    errorMessage.value = (error as Error).message
    parsedData.value = null
  }
}
```

When parsing fails, the native `JSON.parse` error message (e.g. `"Unexpected token } at position 42"`) is stored verbatim in `errorMessage` and displayed to the user.

**`formatJson()`:**

```typescript
function formatJson() {
  const parsed = JSON.parse(jsonText.value) as JsonValue
  jsonText.value = JSON.stringify(parsed, null, 2)  // 2-space indent
}
```

Re-parses and re-serializes with 2-space indentation. Since `jsonText` is watched, `parsedData` is updated automatically.

**`compactJson()`:**

```typescript
function compactJson() {
  if (!hasContent.value || !isValid.value) return
  jsonText.value = JSON.stringify(JSON.parse(jsonText.value))
}
```

`JSON.stringify` with no third argument produces minimal whitespace output.

---

### `useJsonHighlighter` — `src/composables/use-json-highlighter.ts`

**Signature:**

```typescript
export function useJsonHighlighter(
  jsonText: () => string,
  theme: () => Theme
): { highlightedHtml: ComputedRef<string> }
```

Accepts getter functions (not refs directly) so the computed value re-evaluates when either the text or the theme changes.

#### Token Regex

```typescript
const TOKEN_REGEX =
  /("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[{}[\],:])/g
```

Matches (in alternation order, which determines precedence):

| Pattern | Matches |
|---------|---------|
| `"(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?` | Quoted string, optionally followed by `:`  — captures both keys and values |
| `true\|false\|null` | JSON keywords |
| `-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?` | Numbers including negatives, floats, exponents |
| `[{}[\],:]` | Single punctuation characters |

#### Token Classification

```typescript
if (token.startsWith('"') && token.endsWith(':'))  → key (bold, syntaxColors.key)
else if (token.startsWith('"'))                    → string value (syntaxColors.string)
else if (token === 'true' || token === 'false')    → boolean (syntaxColors.boolean)
else if (token === 'null')                         → null (syntaxColors.null)
else if (/^-?\d/.test(token))                      → number (syntaxColors.number)
else                                               → punctuation (syntaxColors.punctuation)
```

**Key detection trick:** A regex token matching `"someKey":` ends with `:` after the closing quote (the regex captures optional `\s*:` after the quote). This distinguishes `"name":` (key) from `"Alice"` (string value) in a single pass.

#### HTML Generation

```typescript
result += `<span style="color:${color};font-weight:${fontWeight}">${escapeHtml(token)}</span>`
```

Inline styles use raw hex values from `syntaxColors` (not Tailwind classes), which works inside `v-html`. `escapeHtml()` sanitizes `&`, `<`, `>` to prevent XSS.

---

### `useJsonNode` — `src/composables/use-json-node.ts`

**Signature:**

```typescript
export function useJsonNode(
  getData: () => JsonValue,
  depth: number = 0,
  initialExpandDepth: number = 2
): { ... }
```

Each `JsonNode.vue` instance calls this composable, passing its own data getter and current depth.

**Auto-expansion:** Nodes at `depth < initialExpandDepth` (default 2) start expanded:

```typescript
const isExpanded = ref(depth < initialExpandDepth)
```

**`dataType` computed:**

```typescript
const dataType = computed<DataType>(() => {
  const data = getData()
  if (data === null) return 'null'
  if (Array.isArray(data)) return 'array'    // must check before typeof === 'object'
  return typeof data as DataType
})
```

`Array.isArray()` is tested before `typeof === 'object'` because `typeof []` returns `'object'` in JavaScript.

**`entries` computed — object/array unification:**

```typescript
const entries = computed<JsonNodeEntry[]>(() => {
  if (dataType.value === 'array')
    return data.map((item, index) => ({ key: index, value: item }))
  if (dataType.value === 'object')
    return Object.entries(data).map(([key, value]) => ({ key, value }))
  return []
})
```

Both arrays and objects produce `JsonNodeEntry[]` with a `key` and `value`, allowing `JsonNode.vue` to use a single `v-for` for both types.

**`getTypeLabel`:**

```typescript
function getTypeLabel(type: DataType, count: number): string {
  if (type === 'array') return `Array[${count}]`
  if (type === 'object') return `Object{${count}}`
  return ''
}
```

Renders the collapsed preview (e.g. `Array[3]`, `Object{5}`).

---

### `json-to-tree.ts` — `src/utils/json-to-tree.ts`

Converts a `JsonValue` into a `TreeNode` tree for 3D visualization.

**Module-level counter:**

```typescript
let nodeIdCounter = 0
```

Reset to 0 at the start of each `jsonToTree()` call to ensure deterministic IDs.

**`traverseJson` — recursive core:**

```typescript
function traverseJson(value: JsonValue, name: string, depth: number): TreeNode {
  const type = getDataType(value)
  const node: TreeNode = {
    id: `node-${nodeIdCounter++}`,
    name,
    value: formatValue(value, type),  // abbreviated display string
    type,
    children: [],
    isExpanded: depth < 2,
    depth
  }

  if (type === 'object' || type === 'array') {
    const entries = type === 'array'
      ? (value as JsonValue[]).map((v, i) => ({ key: String(i), value: v }))
      : Object.entries(value as object).map(([k, v]) => ({ key: k, value: v }))

    node.children = entries.map(entry => traverseJson(entry.value, entry.key, depth + 1))
  }

  return node
}
```

**`formatValue` — display truncation:**

```typescript
function formatValue(value: JsonValue, type: DataType): string {
  if (type === 'object') return `{${Object.keys(value as object).length}}`
  if (type === 'array') return `[${(value as JsonValue[]).length}]`
  if (type === 'string') {
    const str = value as string
    return str.length > 20 ? `"${str.slice(0, 20)}..."` : `"${str}"`
  }
  if (type === 'null') return 'null'
  return String(value)
}
```

Strings longer than 20 characters are truncated with `...` to keep 3D node labels readable.

---

### `useTreeVisualizer` — `src/composables/use-tree-visualizer.ts`

The most complex composable — manages a complete Three.js scene lifecycle.

**Non-reactive Three.js objects** (let variables, not refs):

```typescript
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let composer: EffectComposer | null = null
let controls: OrbitControls | null = null
let animationFrameId: number | null = null
let nodeVisuals: Map<string, NodeVisual> = new Map()
let edgesGroup: THREE.Group | null = null
let particlesGroup: THREE.Group | null = null
let raycaster: THREE.Raycaster | null = null
let mouse: THREE.Vector2 | null = null
let rootTreeNode: TreeNode | null = null
```

Three.js objects are kept outside Vue's reactivity system intentionally — wrapping them in `ref()` would cause Vue to deeply proxy every property, breaking Three.js's internal math and causing performance degradation.

**`NodeVisual` interface:**

```typescript
interface NodeVisual {
  group: THREE.Group       // parent transform group
  mesh: THREE.Mesh         // sphere geometry for raycasting
  node: TreeNode           // reference back to data
  label: THREE.Sprite      // canvas-texture text label
  expandIcon: THREE.Sprite | null
  glow: THREE.PointLight   // per-node colored light
  edges: THREE.Mesh[]      // tube geometries for connections
  worldX: number           // current world X (updated on drag)
  worldY: number
}
```

#### Scene Constants

```typescript
const NODE_RADIUS = 0.5
const HORIZONTAL_SPACING = 8   // units between parent and child columns
const VERTICAL_SPACING = 3     // units between sibling rows
```

#### `initialize(treeData)` — Scene Setup

```typescript
// Camera: PerspectiveCamera(fov=60, near=0.1, far=1000)
camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
camera.position.set(20, 0, 40)  // slightly right and far back

// Scene background + exponential fog
scene = new THREE.Scene()
scene.background = new THREE.Color(0x020617)  // slate-950
scene.fog = new THREE.FogExp2(0x020617, 0.008) // density 0.008

// Lights: ambient (0.4) + directional (0.8, casts shadow) + blue spot
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.castShadow = true
const blueSpot = new THREE.SpotLight(0x6366f1, 2)

// Renderer: antialiased, high-performance, PCFSoft shadows
renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.type = THREE.PCFSoftShadowMap

// Post-processing: Bloom effect
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 0.85)
bloomPass.threshold = 0.2
bloomPass.strength = 0.8
bloomPass.radius = 0.5

// OrbitControls: damping=0.05, panning, distance [5..200]
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.minDistance = 5
controls.maxDistance = 200
```

#### `createNodeVisual(node, x, y)` — Node Construction

Each visible tree node becomes a `THREE.Group` containing:

1. **Sphere** (`SphereGeometry(0.5, 32, 32)`) with `MeshPhysicalMaterial` — metalness 0.1, roughness 0.2, clearcoat 1.0, plus emissive glow at 20% intensity.
2. **PointLight** (`intensity=0`) positioned at `(0,0,1)` — lit up to 2.0 on hover.
3. **Label Sprite** — canvas-texture `THREE.Sprite` with a rounded-rect background, colored border, and white text. Scale `(6, 0.85, 1)`. `depthTest: false` forces labels to render on top.
4. **Expand Icon Sprite** — 64×64 canvas with a circle and `+`/`−` text, positioned at `(0, -0.8, 0.5)`.

#### `createEdge(fromVisual, toVisual)` — Bezier Tube

```typescript
const midX = x1 + (x2 - x1) * 0.5
const curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3(x1, y1, 0),
  new THREE.Vector3(midX, y1, 0),  // control point 1: horizontal exit
  new THREE.Vector3(midX, y2, 0),  // control point 2: horizontal entry
  new THREE.Vector3(x2, y2, 0)
)
const geometry = new THREE.TubeGeometry(curve, 20, 0.05, 8, false)
```

An S-curve connecting two nodes: leaves the parent horizontally, curves to arrive at the child horizontally. Rendered as a tube (radius 0.05) with 8-sided cross-section and 20 segments for smoothness. Opacity 0.4.

#### `layoutTree(node, x, startY)` — Recursive Layout Algorithm

Uses a subtree-height calculation to vertically center parent nodes relative to their children.

```typescript
function calculateSubtreeHeight(n: TreeNode): number {
  if (!n.isExpanded || n.children.length === 0) return VERTICAL_SPACING
  return Math.max(VERTICAL_SPACING, sum of children's subtree heights)
}

function layoutSubtree(n: TreeNode, px: number, py: number): number {
  positions.set(n.id, { x: px, y: py })
  const childX = px + HORIZONTAL_SPACING  // children one column to the right
  // Stack children top-to-bottom, centering the group at py
  let currentY = py + (totalHeight - VERTICAL_SPACING) / 2
  for each child:
    place child at currentY - childHeight/2 + VERTICAL_SPACING/2
    currentY -= childHeight
}
```

#### Mouse Interaction

**Raycasting for hover/click:**

```typescript
raycaster.setFromCamera(mouse, camera)
const meshes = Array.from(nodeVisuals.values()).map(nv => nv.mesh)
const intersects = raycaster.intersectObjects(meshes)
```

Mouse coordinates are normalized to `[-1, 1]` NDC before raycasting:

```typescript
mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
```

**Hover effects:** `emissiveIntensity` set to 1.0, `glow.intensity` to 2, group scale to 1.1, label scale to `(7.5, 1.05, 1)`.

**Drag:** Uses a `THREE.Plane(normal=(0,0,1))` coplanar with the node's position. Raycaster intersects this plane to find world-space drag position, offset by the click offset vector.

**Click to expand/collapse:** If not dragging and a node with children is clicked, toggles `node.isExpanded` and calls `buildVisualization()` to rebuild the entire scene.

#### `createParticels()` — Background Particles

1000 particles in a 200×200×100 volume, randomly colored indigo (`0x6366f1`) or emerald (`0x10b981`), opacity 0.6. The group rotates at `0.0005 rad/frame` around the Y axis in `animate()`.

#### Resource Management — `dispose()`

Cancels the animation frame, removes all DOM event listeners, calls `dispose()` on all tracked geometries and materials (stored in the `disposables` array), removes the `renderer.domElement` from the container, and nulls all Three.js references.

#### Return Shape

```typescript
return {
  state,            // Ref<VisualizerState> — { isInitialized, hoveredNode, isDragging, isAutoRotating }
  initialize,       // (treeData: TreeNode) => void
  dispose,          // () => void — full cleanup
  zoomIn,           // () => void — 0.8× current distance
  zoomOut,          // () => void — 1.25× current distance
  resetView,        // () => void — camera to (20,0,40), target to origin
  expandAll,        // () => void — recursively expands all nodes
  collapseAll,      // () => void — collapses all, keeps root expanded
  toggleAutoRotate, // () => void — toggles OrbitControls.autoRotate
}
```

---

## 4. Text Compare Tool

### Component Hierarchy

```
TextCompareView.vue
├── ToolHeader.vue
├── DiffOutputPanel.vue  (left — originalText lines)
└── DiffOutputPanel.vue  (right — modifiedText lines)
```

### Data Flow

```
User types in textarea (original / modified)
        │
        ▼
  compare() called
        │
        ▼
  generateDiff(text1, text2)
        │
        ├── split lines
        ├── lcsAlign() → aligned line pairs
        └── pairChangedLines() → DiffLine[]
                │
                ├── buildRenderedPairs() → RenderedPair[]
                │         (includes line numbers for both sides)
                │
                └── computeStats() → { added, removed, modified, equal }
                                │
                                ▼
                        DiffOutputPanel (left)  DiffOutputPanel (right)
                        renders leftLines        renders rightLines
```

---

### `text-diff.ts` — `src/utils/text-diff.ts`

Pure utility module implementing the diff algorithm. No Vue dependencies.

#### Type Definitions

```typescript
export type CharType = 'equal' | 'added' | 'removed'
export type LineType = 'equal' | 'added' | 'removed' | 'modified'

export interface CharDiff { type: CharType; text: string }
export interface DiffLine {
  type: LineType
  content?: string       // for equal/added/removed lines
  chars?: CharDiff[]     // for modified lines (char-level diff)
}
export interface DiffStats { added: number; removed: number; modified: number; equal: number }
export interface RenderedLine {
  lineNumber: number | null  // null for empty placeholder lines
  type: LineType | 'empty'
  content?: string
  chars?: CharDiff[]
}
export interface RenderedPair {
  left: RenderedLine
  right: RenderedLine
  isDiff: boolean   // true for added/removed/modified rows
}
```

#### `buildDp(seq1, seq2, eqFn)` — LCS Dynamic Programming Table

```typescript
function buildDp(seq1: string[], seq2: string[], eqFn: (a: string, b: string) => boolean): number[][] {
  const m = seq1.length, n = seq2.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = eqFn(seq1[i-1], seq2[j-1])
        ? dp[i-1][j-1] + 1
        : Math.max(dp[i-1][j], dp[i][j-1])
    }
  }
  return dp
}
```

Builds an `(m+1) × (n+1)` table where `dp[i][j]` = length of the LCS of `seq1[0..i-1]` and `seq2[0..j-1]`. Time complexity O(m×n), space O(m×n).

Accepts a custom equality function `eqFn` — used with case-insensitive comparison at the character level.

#### `lcsAlign(arr1, arr2)` — Backtracking

```typescript
function lcsAlign(arr1: string[], arr2: string[]): [string | null, string | null][] {
  // ... build dp with strict equality ...
  let i = m, j = n
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && arr1[i-1] === arr2[j-1]) {
      aligned.unshift([arr1[i-1], arr2[j-1]])  // equal — both advance
      i--; j--
    } else if (j > 0 && (i === 0 || dp[i][j-1] >= dp[i-1][j])) {
      aligned.unshift([null, arr2[j-1]])         // added in arr2
      j--
    } else {
      aligned.unshift([arr1[i-1], null])          // removed from arr1
      i--
    }
  }
}
```

Returns an array of `[left, right]` pairs where one side may be `null` (representing an insertion or deletion). Backtracking prefers moves along `j` (insertions) over moves along `i` (deletions) when the DP values are equal — this minimizes fragmentation of long added/removed blocks.

#### `compareChars(line1, line2)` — Character-Level Diff

Reuses `buildDp` with `(a, b) => a.toLowerCase() === b.toLowerCase()`. Returns `CharDiff[]` with character-granularity add/remove/equal annotations. Case differences are treated as equal for LCS alignment but the original casing is preserved in output.

#### `pairChangedLines(removed, added, result)` — Block Pairing

```typescript
const pairs = Math.min(removed.length, added.length)
for (let k = 0; k < pairs; k++) {
  result.push({ type: 'modified', chars: compareChars(removed[k], added[k]) })
}
// unpaired removals
for (let k = pairs; k < removed.length; k++)
  result.push({ type: 'removed', content: removed[k] })
// unpaired additions
for (let k = pairs; k < added.length; k++)
  result.push({ type: 'added', content: added[k] })
```

When a block of removed lines is immediately followed by a block of added lines (common in edits), the function pairs them 1:1 up to the shorter length, producing `'modified'` lines with character diffs. Excess unpaired lines remain `'added'` or `'removed'`.

#### `generateDiff(text1, text2)` — Entry Point

```typescript
export function generateDiff(text1: string, text2: string): DiffLine[] {
  const lines1 = text1.split('\n')
  const lines2 = text2.split('\n')
  const aligned = lcsAlign(lines1, lines2)
  // scan aligned pairs, collecting consecutive removed/added blocks,
  // then calling pairChangedLines on each block
}
```

The scan loop collects runs of removed lines followed immediately by added lines, processes them through `pairChangedLines`, then continues. Equal pairs are emitted directly.

#### `buildRenderedPairs(diffResult)` — Line Number Assignment

Assigns independent line counters for left (`lineNum1`) and right (`lineNum2`). For removed lines, the right side gets `lineNumber: null` and `type: 'empty'`. For added lines, the left side gets the empty placeholder. For modified lines, both sides get real line numbers.

---

### `useTextDiff` — `src/composables/use-text-diff.ts`

**Return shape:**

```typescript
{
  originalText: Ref<string>
  modifiedText: Ref<string>
  renderedPairs: Ref<RenderedPair[]>
  stats: Ref<DiffStats>
  hasResult: ComputedRef<boolean>
  diffIndices: ComputedRef<number[]>    // indices of pairs where isDiff === true
  currentDiffStep: Ref<number>          // -1 = no selection
  currentPairIndex: ComputedRef<number> // pair index for current step
  leftLines: ComputedRef<RenderedLine[]>
  rightLines: ComputedRef<RenderedLine[]>
  compare: () => void
  goToNext: () => void
  goToPrev: () => void
}
```

**Navigation with wrapping:**

```typescript
function goToNext(): void {
  currentDiffStep.value = (currentDiffStep.value + 1) % diffIndices.value.length
}
function goToPrev(): void {
  currentDiffStep.value = (currentDiffStep.value - 1 + diffIndices.value.length) % diffIndices.value.length
}
```

Both wrap around using modulo. `goToPrev` adds `diffIndices.length` before modulo to handle the `-1` case, keeping the result non-negative.

**Scroll sync:** `TextCompareView` watches `currentPairIndex` and scrolls both panels to `currentPairIndex * 28` (28px line height) using `scrollTop`.

---

### `DiffOutputPanel.vue` — `src/components/DiffOutputPanel.vue`

Renders one side (left or right) of the diff output. Receives `RenderedLine[]` as a prop.

Color mapping per line type:

| Type | Background | Tailwind class |
|------|-----------|----------------|
| `equal` | transparent | — |
| `added` | green-50 / green-900/30 | `bg-green-50` / `bg-green-900/30` |
| `removed` | red-50 / red-900/30 | `bg-red-50` / `bg-red-900/30` |
| `modified` | yellow-50 / yellow-900/30 | `bg-yellow-50` / `bg-yellow-900/30` |
| `empty` | transparent striped | background pattern |

For `modified` lines, individual `CharDiff` entries are rendered as `<span>` elements:
- `type: 'added'` → `bg-green-200` / `bg-green-800`
- `type: 'removed'` → `bg-red-200 line-through` / `bg-red-800 line-through`
- `type: 'equal'` → unstyled

---

## 5. Base64 Tool

### Data Flow

```
User selects mode (encode|decode) + inputType (text|file)
        │
        ▼
  process() dispatches based on mode × inputType
        │
        ├── encode + text  → encodeText(input, lineEnding) → btoa
        ├── encode + file  → encodeFile(file) → FileReader DataURL
        ├── decode + text  → decodeBase64(input) → atob + TextDecoder
        └── decode + file  → decodeFileContent(file) → FileReader text
                                │
                                ▼
                        outputText (displayed + copyable + downloadable)
```

---

### `base64.ts` — `src/utils/base64.ts`

**`encodeText(text, ending)`:**

```typescript
export function encodeText(text: string, ending: LineEnding): string {
  const normalized = normalizeLineEndings(text, ending)
  const bytes = new TextEncoder().encode(normalized)   // UTF-8 bytes
  return btoa(Array.from(bytes, b => String.fromCharCode(b)).join(''))
}
```

`TextEncoder` converts the string to a `Uint8Array` of UTF-8 bytes. Because `btoa()` only accepts ASCII strings (byte values 0–255), the bytes are mapped to single characters using `String.fromCharCode`. This handles multi-byte Unicode correctly — characters like `€` (3 bytes in UTF-8) are encoded as 3 separate base64 input bytes.

**`normalizeLineEndings(text, ending)`:**

```typescript
export function normalizeLineEndings(text: string, ending: LineEnding): string {
  const lf = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')  // normalize to LF first
  return ending === 'CRLF' ? lf.replace(/\n/g, '\r\n') : lf
}
```

Two-step: normalize all line endings to LF first (handles `\r\n` and bare `\r`), then optionally convert to CRLF. This avoids double-converting `\r\n` to `\r\r\n`.

**`encodeFile(file)`:**

```typescript
export function encodeFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string  // "data:image/png;base64,ABC123..."
      resolve(result.split(',')[1] ?? '')      // extract after the comma
    }
    reader.readAsDataURL(file)
  })
}
```

`readAsDataURL` produces a Data URL: `data:<mime>;base64,<b64data>`. Splitting on `,` and taking index 1 extracts just the base64 payload. Works for any MIME type.

**`decodeBase64(base64)`:**

```typescript
export function decodeBase64(base64: string): string {
  const binary = atob(base64.replace(/\s/g, ''))  // strip whitespace (line breaks in pasted b64)
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)           // UTF-8 decode
}
```

`atob()` returns a binary string. Converting to `Uint8Array` and then using `TextDecoder` correctly handles multi-byte UTF-8 sequences that `atob()` alone cannot reconstruct.

**`downloadAsFile(content, filename)`:**

```typescript
const blob = new Blob([content], { type: 'text/plain' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = filename
a.click()
URL.revokeObjectURL(url)  // immediate cleanup
```

Creates an object URL, programmatically clicks a hidden anchor, then immediately revokes the URL. Revocation is synchronous and safe because the download has been initiated.

**`formatFileSize(bytes)`:**

```typescript
if (bytes < 1024)        return `${bytes} B`
if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
```

Binary units (1024-based), one decimal place for KB/MB.

---

### `useBase64` — `src/composables/use-base64.ts`

**Key computed values:**

```typescript
const showLineEnding = computed(
  () => mode.value === 'encode' && inputType.value === 'text'
)
```

Line ending selector is only shown when encoding text (irrelevant for file encoding and all decoding).

```typescript
const showDownload = computed(
  () => hasOutput.value && (inputType.value === 'file' || mode.value === 'decode')
)
```

Download button appears for file inputs (any mode) and decoded output — not for text-encode output since it's trivial to copy.

**Output filename computation:**

```typescript
const outputFilename = computed(() => {
  if (mode.value === 'encode')
    return selectedFile.value ? `${selectedFile.value.name}.b64.txt` : 'encoded.txt'
  return selectedFile.value
    ? selectedFile.value.name.replace(/\.b64\.txt$|\.txt$/, '') || 'decoded.txt'
    : 'decoded.txt'
})
```

Decoding strips `.b64.txt` or `.txt` suffix to reconstruct the original filename.

**Auto-clear on mode/type change:**

```typescript
watch([mode, inputType], clearAll)
```

Switching between encode/decode or text/file clears all input and output state to prevent stale results.

**`copyOutput()`:**

```typescript
async function copyOutput(): Promise<void> {
  await navigator.clipboard.writeText(outputText.value)
  hasCopied.value = true
  setTimeout(() => { hasCopied.value = false }, 2000)
}
```

Uses the async Clipboard API. `hasCopied` drives a 2-second "Copied!" visual feedback state.

---

## 6. Color Palette Tool

### Data Flow

```
User changes color (picker / HEX / RGB / HSL input)
        │
        ▼
  setFromHex() | setFromRgb() | setFromHsl()
        │
        ▼
  fromHex/fromRgb/fromHsl → Color object (all 3 formats unified)
        │
        ├── baseColor.value = color
        └── syncInputs(color) → updates all 6 input refs
                │
                ▼
        palettes (computed) → 6 Palette objects
```

---

### `color-utils.ts` — `src/utils/color-utils.ts`

**Core types:**

```typescript
export interface RgbColor { r: number; g: number; b: number }
export interface HslColor { h: number; s: number; l: number }
export interface Color { hex: string; r: number; g: number; b: number; h: number; s: number; l: number }
export type CopyFormat = 'hex' | 'rgb' | 'hsl'
```

`Color` is a unified structure carrying all three formats simultaneously.

#### `hexToRgb(hex)` — Bitwise Parsing

```typescript
export function hexToRgb(hex: string): RgbColor {
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) h = h.split('').map(c => c + c).join('')  // expand 3-digit hex
  const n = parseInt(h, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}
```

`parseInt(h, 16)` produces a 24-bit integer. Bit shifts extract each byte: `>> 16` for red (bits 16–23), `>> 8` for green (bits 8–15), and `& 255` masks blue (bits 0–7). 3-digit hex (e.g. `#f0a`) is expanded by doubling each digit to `#ff00aa`.

#### `rgbToHsl(r, g, b)` — Standard Conversion

```typescript
const rn = r/255, gn = g/255, bn = b/255
const max = Math.max(rn, gn, bn)
const min = Math.min(rn, gn, bn)
const l = (max + min) / 2
// saturation
const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
// hue
if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6
else if (max === gn) h = ((bn - rn) / d + 2) / 6
else h = ((rn - gn) / d + 4) / 6
```

Standard HSL algorithm. The saturation formula branches on lightness to avoid division instability near pure black/white. Hue is determined by which RGB component is dominant (max), normalized to `[0, 1]` then multiplied by 360.

#### `hslToRgb(h, s, l)` — Compact Formula

```typescript
export function hslToRgb(h: number, s: number, l: number): RgbColor {
  const sn = s / 100, ln = l / 100
  const k = (n: number) => (n + h / 30) % 12
  const a = sn * Math.min(ln, 1 - ln)
  const f = (n: number) => ln - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255) }
}
```

This is the compact "CSS Color 4" style formula. `k(n)` maps the hue sector for each channel. `a` is the chroma-scaled amplitude. `f(n)` applies the piecewise linear triangle wave. Arguments `f(0)`, `f(8)`, `f(4)` correspond to R, G, B respectively.

#### `getContrastColor(color)` — WCAG Luminance

```typescript
const toLinear = (c: number) => {
  const n = c / 255
  return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)
}
const lum = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
return lum > 0.179 ? '#000000' : '#ffffff'
```

WCAG 2.1 relative luminance formula. The sRGB gamma correction (`toLinear`) linearizes the color channel. Luminance weights (0.2126R, 0.7152G, 0.0722B) reflect human eye sensitivity — green contributes most to perceived brightness. Threshold 0.179 ≈ 0.5² is the midpoint of the [0..1] luminance range.

#### Palette Generators

| Function | Algorithm |
|----------|-----------|
| `getShades(base, 5)` | `fromHsl(h, s, base.l * factor)` for factors `[0.8, 0.6, 0.4, 0.25, 0.1]` |
| `getTints(base, 5)` | `fromHsl(h, s, base.l + (100 - base.l) * factor)` for `[0.2, 0.4, 0.6, 0.75, 0.9]` |
| `getComplementary(base)` | `rotateHue(base, 180)` |
| `getAnalogous(base)` | `rotateHue` at `−60°, −30°, +30°, +60°` |
| `getTriadic(base)` | `rotateHue` at `+120°, +240°` |
| `getSplitComplementary(base)` | `rotateHue` at `+150°, +210°` |

`rotateHue`:

```typescript
export function rotateHue(color: Color, degrees: number): Color {
  return fromHsl((color.h + degrees + 360) % 360, color.s, color.l)
}
```

Adding 360 before modulo ensures the result is always positive (JavaScript `%` can return negative values for negative operands).

---

### `useColorPalette` — `src/composables/use-color-palette.ts`

**`baseColor`** is the single source of truth — a `ref<Color>` holding the unified color object.

Six separate input refs (`hexInput`, `rgbR`, `rgbG`, `rgbB`, `hslH`, `hslS`, `hslL`) are kept in sync manually via `syncInputs()`. This avoids circular watch chains — each setter function calls `syncInputs` explicitly after updating `baseColor`.

**`setFromHsl` — input clamping:**

```typescript
const ch = ((h % 360) + 360) % 360  // wrap hue to [0,360)
const cs = Math.min(100, Math.max(0, s))
const cl = Math.min(100, Math.max(0, l))
```

Hue is wrapped (not clamped) because hue values are circular. Saturation and lightness are clamped to [0, 100].

**`copyPalette` — CSS variable export:**

```typescript
const slug = palette.name.toLowerCase().replace(/\s+/g, '-')
const css = palette.colors
  .map((c, i) => `--${slug}-${i + 1}: ${formatColor(c, copyFormat.value)};`)
  .join('\n')
```

Generates CSS custom properties like `--split-complementary-1: #f97316;`, ready to paste into a stylesheet.

---

## 7. Image Editor Tool

### Component Hierarchy

```
ImageEditorView.vue
├── ToolHeader.vue
├── <canvas> (displayCanvasEl ref)        ← all rendering + interaction
├── Toolbar (crop / flip / rotate buttons)
├── Numeric crop inputs
├── Export controls (format, quality)
└── Action pipeline panel
```

All canvas manipulation goes through `useImageEditor()`. The view only handles UI bindings.

### Data Flow

```
loadFile(file)
    │
    ├── loadImageToCanvas() → workingCanvas
    ├── copyCanvas() → originalCanvas (immutable backup)
    └── render() → renderToDisplay() + drawCropOverlay()

applyFlip(h, v)
    │
    ├── flipCanvas(working) → new workingCanvas
    ├── transformCropBoxAfterFlip(pendingCropBox) → updated pendingCropBox
    └── render()

applyRotation(degrees)
    │
    ├── rotateCanvas(working, degrees) → new workingCanvas
    ├── transformCropBoxAfterRotation(pendingCropBox) → updated pendingCropBox
    └── render()

download()
    └── pendingCropBox ? cropCanvas(working, pending) : working
        └── downloadCanvas(canvas, filename, format, quality/100)
```

---

### `image-editor.ts` — `src/utils/image-editor.ts`

#### `loadImageToCanvas(file)` — Promise Chain

```typescript
export function loadImageToCanvas(file: File): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      canvas.getContext('2d')!.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)
      resolve(canvas)
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Failed to load image')) }
    img.src = url
  })
}
```

Uses `naturalWidth`/`naturalHeight` (not `width`/`height`) to get the intrinsic image dimensions, ignoring any CSS display sizing. Object URL is revoked immediately after load to free memory.

#### `flipCanvas(src, horizontal, vertical)` — Context Transform

```typescript
ctx.translate(horizontal ? src.width : 0, vertical ? src.height : 0)
ctx.scale(horizontal ? -1 : 1, vertical ? -1 : 1)
ctx.drawImage(src, 0, 0)
```

The canvas 2D context transform stack: `translate` shifts the origin to the far corner, then `scale(-1, 1)` mirrors around that new origin. For horizontal flip: origin moves to top-right, X axis flips. For vertical flip: origin moves to bottom-left, Y axis flips. Both can be combined.

#### `rotateCanvas(src, degrees)` — Bounding Box Resize

```typescript
const rad = (degrees * Math.PI) / 180
const cos = Math.abs(Math.cos(rad)), sin = Math.abs(Math.sin(rad))
const newW = Math.round(src.width * cos + src.height * sin)
const newH = Math.round(src.width * sin + src.height * cos)
const ctx = dst.getContext('2d')!
ctx.translate(newW / 2, newH / 2)  // center of new canvas
ctx.rotate(rad)
ctx.drawImage(src, -src.width / 2, -src.height / 2)  // draw centered on origin
```

New canvas dimensions use the bounding box formula for rotated rectangles. The image is centered on the origin before drawing, then the context is centered on the new canvas. This keeps the rotated image fully within bounds for any angle.

#### `transformCropBoxAfterFlip(box, srcW, srcH, h, v)`

```typescript
if (horizontal) {
  const nx = srcW - endX
  endX = srcW - x    // new endX = mirror of old x
  x = nx             // new x = mirror of old endX
}
if (vertical) {
  const ny = srcH - endY
  endY = srcH - y
  y = ny
}
```

Mirrors both corners symmetrically around the center axis. The variable `nx` is used as a temporary to avoid overwriting `x` before computing `endX`.

#### `transformCropBoxAfterRotation(box, srcW, srcH, degrees)`

```typescript
const pts = [
  [box.x, box.y], [box.endX, box.y],
  [box.x, box.endY], [box.endX, box.endY],
].map(([px, py]) => [
  (px - srcW/2) * cos - (py - srcH/2) * sin + newW/2,
  (px - srcW/2) * sin + (py - srcH/2) * cos + newH/2,
])
return {
  x: Math.round(Math.min(...pts.map(p => p[0]))),
  y: Math.round(Math.min(...pts.map(p => p[1]))),
  endX: Math.round(Math.max(...pts.map(p => p[0]))),
  endY: Math.round(Math.max(...pts.map(p => p[1]))),
}
```

Applies the 2D rotation matrix to all 4 corners (translated to image center first), then takes the axis-aligned bounding box of the rotated corners. This produces the tightest rectangle that contains the rotated crop region.

#### `renderToDisplay(src, dst)` — Letterbox Scaling

```typescript
const scale = Math.min(dst.width / src.width, dst.height / src.height)
const dw = src.width * scale, dh = src.height * scale
const dx = (dst.width - dw) / 2, dy = (dst.height - dh) / 2
ctx.drawImage(src, dx, dy, dw, dh)
```

Uniform-scale (no distortion) with centering. The same scale factor is used by `getDisplayBox` to map crop coordinates from image space to display space.

#### `drawCropOverlay(dst, box, isPending)`

Draws four filled rectangles to darken the area outside the crop box (top, bottom, left strip, right strip), then strokes the crop box border with a dashed line. Renders 8 handles — 4 corners (10×10 squares) and 4 edge midpoints (wider 20×10 rectangles to indicate axis of movement). `isPending` controls opacity and color (indigo vs white).

---

### `useImageEditor` — `src/composables/use-image-editor.ts`

#### Canvas Architecture

Three canvas refs:

| Ref | Purpose |
|-----|---------|
| `workingCanvas` | Current editing state — modified by flip/rotate, never modified by crop (crop is pending) |
| `originalCanvas` | Immutable copy of the loaded image — used by `resetAll()` |
| `displayCanvasEl` | DOM canvas element — receives the scaled rendering for display |

#### Hit-Test Constants

```typescript
const HANDLE_SIZE = 10
const HIT_TOLERANCE = 4
const ZONE_MARGIN = HANDLE_SIZE / 2 + HIT_TOLERANCE  // = 9px
```

`ZONE_MARGIN = 9` means a 9px square Chebyshev distance around each handle center is considered a hit.

#### `hitTestHandle(mx, my, box)` — Chebyshev Distance

```typescript
// Chebyshev distance: max(|Δx|, |Δy|) — forms a square hit zone
if (Math.max(Math.abs(mx - x), Math.abs(my - y)) <= ZONE_MARGIN) return 'nw'
```

Chebyshev distance (L∞ norm) creates square hit zones rather than circles (L2) or diamonds (L1). Corners are tested before edge midpoints so corner handles take precedence when zones overlap.

#### `HANDLE_AXIS` — Edge Control Mapping

```typescript
const HANDLE_AXIS: Record<string, [boolean, boolean, boolean, boolean]> = {
  nw: [true, true, false, false],  // moves x and y
  ne: [false, true, true, false],  // moves y and endX
  sw: [true, false, false, true],  // moves x and endY
  se: [false, false, true, true],  // moves endX and endY
  n:  [false, true, false, false], // moves y only
  s:  [false, false, false, true], // moves endY only
  w:  [true, false, false, false], // moves x only
  e:  [false, false, true, false], // moves endX only
}
```

The tuple `[ax, ay, aex, aey]` maps to which of `{x, y, endX, endY}` gets the delta applied. `applyHandleDelta` reads this to know which edges to adjust.

#### Crop Box State Machine

| Ref | Description |
|-----|-------------|
| `cropBox` | Active selection drawn by the user in crop mode |
| `pendingCropBox` | Confirmed crop (press "Confirm") — shown as indigo overlay when not in crop mode |
| `newCropAnchor` | Fixed anchor point while drawing a new selection |
| `handleDrag` | Active `HandleDragState` during resize/move drag |

**State transitions:**
- Enter crop mode → `cropBox` pre-populated from `pendingCropBox` if it exists
- Draw new box → `newCropAnchor` set on mousedown, `cropBox` updated on mousemove
- Drag handle → `handleDrag` set on mousedown, `cropBox` updated via `applyHandleDelta` on mousemove
- Confirm crop → `cropBox` copied to `pendingCropBox`, action logged as `'pending'`
- Apply crop to `download()` → `cropCanvas(workingCanvas, pendingCropBox)` used for export only — `workingCanvas` is not modified

#### Action Pipeline

Each operation appends an `ImageAction` to `actionPipeline`:

```typescript
interface ImageAction {
  id: string              // `${Date.now()}-${random5chars}`
  type: 'load' | 'flip' | 'rotate' | 'crop'
  params: Record<string, unknown>
  status: 'applied' | 'pending'
  timestamp: string       // ISO 8601
}
```

`buildPipelineSummary()` collapses the pipeline into a compact summary: flip states are XOR-accumulated (two horizontal flips = no flip), rotation angles are summed modulo 360, and only the last crop is shown.

#### `download()` — Non-Destructive Export

```typescript
const exportCanvas = pendingCropBox.value
  ? cropCanvas(workingCanvas.value, pendingCropBox.value)
  : workingCanvas.value
await downloadCanvas(exportCanvas, `${base}-edited.${ext}`, exportFormat.value, exportQuality.value / 100)
```

The crop is applied to a **temporary canvas** at download time. `workingCanvas` is never modified by the crop operation, allowing the user to adjust or cancel the crop after export.

---

## 8. Type System Reference

### `src/types/json.ts`

```typescript
export type JsonPrimitive = string | number | boolean | null

export type JsonValue = JsonPrimitive | JsonObject | JsonArray

export interface JsonObject {
  [key: string]: JsonValue
}

export interface JsonArray extends Array<JsonValue> {}

export type DataType = 'string' | 'number' | 'boolean' | 'null' | 'array' | 'object'

export interface JsonNodeEntry {
  key: string | number   // string for objects, number index for arrays
  value: JsonValue
}

export interface ValidationResult {
  isValid: boolean
  hasError: boolean
  errorMessage: string | null
  parsedData: JsonValue | null
}
```

`JsonArray extends Array<JsonValue>` rather than being a type alias so it participates in nominal typing and is distinguishable from plain arrays.

### `src/types/tree-visualization.ts`

```typescript
export interface TreeNode {
  id: string           // "node-N" sequential ID
  name: string         // key name or array index
  value: string        // abbreviated display string
  type: DataType
  children: TreeNode[]
  isExpanded: boolean  // mutable by Three.js click handler
  depth: number
}

export interface NodeColorMap {
  object: string; array: string; string: string
  number: string; boolean: string; null: string
}

export const NODE_COLORS: NodeColorMap = {
  object: '#f97316',   // orange
  array: '#06b6d4',    // cyan
  string: '#10b981',   // emerald
  number: '#6366f1',   // indigo
  boolean: '#ec4899',  // pink
  null: '#64748b'      // slate
}
```

### `src/types/image-editor.ts`

```typescript
export interface CropBox { x: number; y: number; endX: number; endY: number }

export interface DisplayBox {
  x: number; y: number; endX: number; endY: number
  scale: number    // ratio of display canvas to working canvas
  offsetX: number  // letterbox horizontal offset
  offsetY: number  // letterbox vertical offset
}

export type HandleZone = 'nw'|'ne'|'sw'|'se'|'n'|'s'|'e'|'w'|'move'|null

export type ImageActionType = 'load' | 'flip' | 'rotate' | 'crop'
export type ImageActionStatus = 'applied' | 'pending'

export interface ImageAction {
  id: string
  type: ImageActionType
  params: Record<string, unknown>
  status: ImageActionStatus
  timestamp: string
}

export interface HandleDragState {
  zone: Exclude<HandleZone, null>  // active handle (not null)
  startMouseX: number
  startMouseY: number
  startBox: CropBox               // box state at drag start (delta-based)
}
```

`HandleDragState.startBox` is a snapshot of `cropBox` at mousedown. All drag updates compute delta from start rather than incrementally — this avoids accumulated floating-point drift and makes the drag exactly reproducible.

### `src/utils/color-utils.ts` (exported types)

```typescript
export interface RgbColor { r: number; g: number; b: number }
export interface HslColor { h: number; s: number; l: number }
export interface Color {
  hex: string         // "#rrggbb" lowercase
  r: number; g: number; b: number   // 0–255
  h: number           // 0–360 (degrees)
  s: number           // 0–100 (percent)
  l: number           // 0–100 (percent)
}
export type CopyFormat = 'hex' | 'rgb' | 'hsl'
```

### `src/utils/text-diff.ts` (exported types)

```typescript
export type CharType = 'equal' | 'added' | 'removed'
export type LineType = 'equal' | 'added' | 'removed' | 'modified'
export interface CharDiff { type: CharType; text: string }
export interface DiffLine { type: LineType; content?: string; chars?: CharDiff[] }
export interface DiffStats { added: number; removed: number; modified: number; equal: number }
export interface RenderedLine { lineNumber: number | null; type: LineType | 'empty'; content?: string; chars?: CharDiff[] }
export interface RenderedPair { left: RenderedLine; right: RenderedLine; isDiff: boolean }
```

### `src/utils/base64.ts` (exported types)

```typescript
export type LineEnding = 'LF' | 'CRLF'
export const MAX_DECODE_FILE_BYTES = 50 * 1024 * 1024  // 50 MB
```

---

## 9. Build & Deployment

### `vite.config.ts`

```typescript
export default defineConfig({
  plugins: [vue()],
  base: '/lit-code/',  // deployed at https://<user>.github.io/lit-code/
})
```

`base` sets the public path for all asset imports and the SPA root. Without this, navigating directly to the GitHub Pages URL would fail to load assets.

### `tailwind.config.js` — Custom Tokens

**Custom colors:**

| Scale | Values |
|-------|--------|
| `primary.50–900` | Indigo palette `#eef2ff` → `#312e81` |
| `json.string` | `#059669` (Emerald-600) |
| `json.number` | `#2563eb` (Blue-600) |
| `json.boolean` | `#7c3aed` (Violet-600) |
| `json.null` | `#6b7280` (Gray-500) |
| `json.object` | `#ea580c` (Orange-600) |
| `json.array` | `#0891b2` (Cyan-600) |
| `surface.DEFAULT` | `#ffffff` |
| `surface.secondary` | `#f8fafc` |
| `surface.tertiary` | `#f1f5f9` |

**Custom shadows:**

```javascript
'soft':     '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)'
'soft-lg':  '0 10px 40px -3px rgba(0,0,0,0.10), 0 4px 6px -2px rgba(0,0,0,0.05)'
'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.02)'
```

**Custom animations:**

```javascript
'fade-in':    'fadeIn 0.2s ease-out'     // opacity 0→1
'slide-up':   'slideUp 0.3s ease-out'    // opacity + translateY(10px→0)
'pulse-soft': 'pulseSoft 2s infinite'    // opacity 1→0.7→1
```

**Font stack:**

```javascript
mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace']
```

Applied to all code/monospace elements via `font-mono` utility.

### `src/style.css` — Global Overrides

Key `@layer` customizations:

- **Scrollbars** (webkit): `width: 6px`, rounded thumb, color `#94a3b8` (light) / `#475569` (dark)
- **Focus ring**: `focus-visible:ring-2 ring-primary-500 ring-offset-2`
- **Text selection**: `bg-primary-200/60` background

Custom utility classes:
- `.scrollbar-hide` — `overflow: hidden` shorthand
- `.select-none` — `user-select: none`

### `package.json` — Key Scripts

```json
{
  "scripts": {
    "dev":     "vite",
    "build":   "vue-tsc -b && vite build",
    "preview": "vite preview",
    "deploy":  "gh-pages -d dist"
  }
}
```

`build` runs `vue-tsc -b` (TypeScript type checking across the whole project) before Vite's bundle step — the build fails if there are any type errors.

### Production Build Characteristics

- **Base path:** `/lit-code/` — all chunks and assets are prefixed
- **Code splitting:** Vite automatically code-splits dynamic imports; Three.js (~1 MB) is the dominant chunk
- **Asset handling:** Images, fonts served from `/lit-code/assets/`
- **Browser targets:** ES2020+ (Vite default) — no IE11 support

---

*End of technical reference.*
