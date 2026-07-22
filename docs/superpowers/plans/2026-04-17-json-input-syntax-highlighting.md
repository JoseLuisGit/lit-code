# JSON Input Syntax Highlighting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add live, theme-aware syntax highlighting to the JSON input textarea — keys in a bold green, string values in a lighter green, numbers in blue, booleans in lilac, and null in gray, all adapting to the active theme.

**Architecture:** Three-layer change. (1) `use-theme.ts` gains a `syntaxColors` nested object per theme with raw CSS hex values (not Tailwind classes) for use in `innerHTML`. (2) A new `use-json-highlighter.ts` composable tokenizes the raw JSON string with a regex and returns a computed HTML string with inline `<span style="...">` tags. (3) `JsonInput.vue` replaces the plain `<textarea>` with an overlay pattern: a transparent textarea captures input on top, while a `<pre>` underneath mirrors the same text with highlights. Scroll is kept in sync between all three layers (line numbers, pre, textarea).

**Tech Stack:** Vue 3 Composition API, TypeScript, regex-based tokenizer, inline CSS styles (required — Tailwind classes cannot be used dynamically inside `v-html`).

---

### Task 1: Add `syntaxColors` to each theme

**Files:**
- Modify: `src/composables/use-theme.ts`

- [ ] **Step 1: Extend `ThemeColors` interface with nested `syntaxColors`**

Add the following nested interface block inside `ThemeColors`, after `jsonArray`:

```ts
// Inside ThemeColors interface, after jsonArray: string
syntaxColors: {
  key: string         // JSON object keys ("name":) — strong green
  string: string      // string values — lighter green
  number: string      // number values — blue
  boolean: string     // boolean values — lilac/violet
  null: string        // null values — gray
  punctuation: string // { } [ ] : , — muted
}
```

- [ ] **Step 2: Add `syntaxColors` to the `light` theme**

Inside `themes.light.colors`, after `jsonArray`:

```ts
syntaxColors: {
  key: '#166534',         // green-800
  string: '#16a34a',      // green-600
  number: '#1d4ed8',      // blue-700
  boolean: '#6d28d9',     // violet-700
  null: '#6b7280',        // gray-500
  punctuation: '#9ca3af', // gray-400
},
```

- [ ] **Step 3: Add `syntaxColors` to the `dark` theme**

Inside `themes.dark.colors`, after `jsonArray`:

```ts
syntaxColors: {
  key: '#6ee7b7',         // emerald-300
  string: '#34d399',      // emerald-400
  number: '#60a5fa',      // blue-400
  boolean: '#a78bfa',     // violet-400
  null: '#6b7280',        // gray-500
  punctuation: '#4b5563', // gray-600
},
```

- [ ] **Step 4: Add `syntaxColors` to the `midnight` theme**

Inside `themes.midnight.colors`, after `jsonArray`:

```ts
syntaxColors: {
  key: '#99f6e4',         // teal-200
  string: '#5eead4',      // teal-300
  number: '#818cf8',      // indigo-400
  boolean: '#c084fc',     // purple-400
  null: '#64748b',        // slate-500
  punctuation: '#475569', // slate-600
},
```

- [ ] **Step 5: Add `syntaxColors` to the `forest` theme**

Inside `themes.forest.colors`, after `jsonArray`:

```ts
syntaxColors: {
  key: '#14532d',         // green-900
  string: '#166534',      // green-800
  number: '#134e4a',      // teal-900
  boolean: '#3f6212',     // lime-800
  null: '#6b7280',        // gray-500
  punctuation: '#6b7280', // gray-500
},
```

- [ ] **Step 6: Add `syntaxColors` to the `sunset` theme**

Inside `themes.sunset.colors`, after `jsonArray`:

```ts
syntaxColors: {
  key: '#881337',         // rose-900
  string: '#be123c',      // rose-700
  number: '#9a3412',      // orange-800
  boolean: '#6b21a8',     // purple-800
  null: '#6b7280',        // gray-500
  punctuation: '#9ca3af', // gray-400
},
```

- [ ] **Step 7: Verify TypeScript compiles without errors**

```bash
npm run build
```
Expected: exits with code 0, no type errors.

- [ ] **Step 8: Commit**

```bash
git add src/composables/use-theme.ts
git commit -m "feat: add syntaxColors css values to each theme for input highlighting"
```

---

### Task 2: Create `use-json-highlighter.ts` composable

**Files:**
- Create: `src/composables/use-json-highlighter.ts`

- [ ] **Step 1: Create the file with the tokenizer**

Create `src/composables/use-json-highlighter.ts` with the full content below.

Key design notes:
- The token regex is instantiated **inside** `tokenize()` so `lastIndex` is always fresh (a module-level regex with `/g` flag holds state between calls).
- `escapeHtml` runs on every fragment _before_ it is inserted into the HTML string, preventing XSS when the JSON contains `<`, `>`, or `&`.
- Strings followed by optional whitespace and `:` are keys. Strings not followed by `:` are values.

```ts
import { computed } from 'vue'
import type { Theme } from './use-theme'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function tokenize(json: string, theme: Theme): string {
  // Matches (in order):
  //   - a JSON string optionally followed by whitespace + colon  → key or string value
  //   - true | false | null keywords
  //   - numbers (integer, float, exponential)
  //   - single punctuation chars: { } [ ] , :
  const TOKEN_REGEX =
    /("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[{}[\],:])/g

  const { syntaxColors } = theme.colors
  let result = ''
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = TOKEN_REGEX.exec(json)) !== null) {
    const token = match[0]

    // Append any literal text before this token
    result += escapeHtml(json.slice(lastIndex, match.index))

    let color: string
    let fontWeight = '400'

    if (token.startsWith('"') && token.endsWith(':')) {
      // "key":  — string ending with colon (key token)
      color = syntaxColors.key
      fontWeight = '600'
    } else if (token.startsWith('"')) {
      // "value"  — plain string
      color = syntaxColors.string
    } else if (token === 'true' || token === 'false') {
      color = syntaxColors.boolean
    } else if (token === 'null') {
      color = syntaxColors.null
    } else if (/^-?\d/.test(token)) {
      color = syntaxColors.number
    } else {
      // { } [ ] , :
      color = syntaxColors.punctuation
    }

    result += `<span style="color:${color};font-weight:${fontWeight}">${escapeHtml(token)}</span>`
    lastIndex = match.index + token.length
  }

  // Append remaining text after the last token
  result += escapeHtml(json.slice(lastIndex))
  return result
}

export function useJsonHighlighter(jsonText: () => string, theme: () => Theme) {
  const highlightedHtml = computed(() => {
    const text = jsonText()
    if (!text.trim()) return ''
    return tokenize(text, theme())
  })

  return { highlightedHtml }
}
```

- [ ] **Step 2: Verify TypeScript compiles without errors**

```bash
npm run build
```
Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/composables/use-json-highlighter.ts
git commit -m "feat: add use-json-highlighter composable with theme-aware JSON tokenizer"
```

---

### Task 3: Wire the overlay editor in `JsonInput.vue`

**Files:**
- Modify: `src/components/JsonInput.vue`

- [ ] **Step 1: Add the import and composable call**

In the `<script setup>` block, add:

```ts
import { useJsonHighlighter } from '../composables/use-json-highlighter'
```

After the `useJsonValidator` setup, add:

```ts
const { highlightedHtml } = useJsonHighlighter(
  () => jsonText.value,
  () => props.theme
)
```

Also add a ref for the `<pre>` layer so we can sync its scroll:

```ts
const preRef = ref<HTMLPreElement | null>(null)
```

- [ ] **Step 2: Update `handleScroll` to sync the pre layer**

Replace the existing `handleScroll` function with:

```ts
function handleScroll() {
  if (lineNumbersRef.value && textareaRef.value) {
    lineNumbersRef.value.scrollTop = textareaRef.value.scrollTop
  }
  if (preRef.value && textareaRef.value) {
    preRef.value.scrollTop = textareaRef.value.scrollTop
    preRef.value.scrollLeft = textareaRef.value.scrollLeft
  }
}
```

- [ ] **Step 3: Replace the `<!-- Textarea -->` section with the overlay**

Find and replace the `<!-- Textarea -->` comment and `<textarea>` element (lines 197–212 in the original) with:

```html
<!-- Syntax highlight layer + transparent textarea overlay -->
<div class="relative flex-1 overflow-hidden">
  <!-- Highlighted pre layer (pointer-events:none, visually underneath) -->
  <pre
    ref="preRef"
    class="absolute inset-0 m-0 p-4 font-mono text-sm leading-5 whitespace-pre-wrap break-words pointer-events-none overflow-hidden select-none"
    :class="isDark ? 'text-slate-200' : 'text-gray-800'"
    aria-hidden="true"
    v-html="highlightedHtml || ''"
  ></pre>

  <!-- Transparent textarea — captures input, shows only the caret -->
  <textarea
    ref="textareaRef"
    v-model="jsonText"
    @paste="handlePaste"
    @scroll="handleScroll"
    @focus="isFocused = true"
    @blur="isFocused = false"
    placeholder="Pega o escribe tu JSON aquí..."
    class="absolute inset-0 w-full h-full p-4 font-mono text-sm leading-5 focus:outline-none resize-none bg-transparent whitespace-pre-wrap break-words"
    :class="isDark ? 'placeholder:text-slate-500' : 'placeholder:text-gray-400'"
    style="-webkit-text-fill-color: transparent; color: transparent;"
    aria-label="Editor de JSON"
    spellcheck="false"
  ></textarea>
</div>
```

> **Why `color: transparent` + `-webkit-text-fill-color: transparent`?**
> `color: transparent` makes the typed text invisible so the colored `<pre>` layer shows through. `-webkit-text-fill-color` is required on WebKit/Blink (Chrome, Safari) where it overrides `color` for text rendering. The caret remains visible because caret color is determined separately.

- [ ] **Step 4: Fix the outer editor container to allow flex layout**

The `<!-- Editor Container -->` div uses `flex-1 flex`, but the new inner structure wraps textarea + pre in `relative flex-1`. Confirm the outer container still contains:

```html
class="flex-1 flex rounded-xl overflow-hidden transition-all duration-200 ring-1"
```

No change needed here — the `<div class="relative flex-1 overflow-hidden">` wrapper simply replaces the raw `<textarea>` as a flex child, keeping the layout identical.

- [ ] **Step 5: Start the dev server and verify**

```bash
npm run dev
```

Open http://localhost:5173 and test:
1. Click "Ejemplo" — verify keys appear in strong green, string values in lighter green, numbers in blue, booleans in lilac.
2. Type invalid JSON — verify the tokenizer handles partial input without crashing.
3. Switch all 5 themes (light → dark → midnight → forest → sunset) — verify colors update immediately.
4. Paste long JSON, scroll vertically — verify line numbers, pre highlight layer, and textarea all scroll in sync.
5. Click into the textarea — verify the caret is visible and typing works normally.

- [ ] **Step 6: Commit**

```bash
git add src/components/JsonInput.vue
git commit -m "feat: replace plain textarea with syntax-highlighted overlay in JSON input"
```

---

## Self-Review Checklist

| Spec requirement | Covered by |
|---|---|
| Keys in strong green | Task 1 `syntaxColors.key` + Task 2 `fontWeight: '600'` + `endsWith(':')` detection |
| String values in lighter green | Task 1 `syntaxColors.string` + Task 2 string branch |
| Booleans in lilac | Task 1 `syntaxColors.boolean` (violet shades) |
| Numbers in blue | Task 1 `syntaxColors.number` |
| Null in gray | Task 1 `syntaxColors.null` |
| Adapts to active theme | Task 2 composable receives reactive `theme()` getter; Task 3 uses `props.theme` |
| All 5 themes covered | Task 1, Steps 2–6 |
| Textarea still editable | Task 3 Step 3 — textarea stays on top, captures input |
| No XSS from user JSON | Task 2 `escapeHtml()` applied to every literal fragment and token |
| Scroll sync | Task 3 Step 2 — both scrollTop and scrollLeft synced to pre |
