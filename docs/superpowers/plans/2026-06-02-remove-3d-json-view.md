# Remove 3D JSON View Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

> **User preference (from memory):** Never commit code on the user's behalf. The user reviews and commits manually. **Skip every `git commit` step** in this plan — leave the working tree dirty after each task so the user can inspect and stage.

**Goal:** Completely remove the Three.js-powered 3D JSON tree visualization (modal, composable, transformer, types) and every reference to it across source code, configuration, dependencies, and documentation.

**Architecture:** The 3D view is a self-contained subsystem with only one consumer call site (`JsonViewer.vue` opens `JsonTreeModal.vue`). Deletion is performed in dependency order — first remove the consumer reference, then delete the now-orphaned files, then prune dependencies, then sync docs. TypeScript's strict mode is the safety net: each task ends with `npm run build` to catch any missed import.

**Tech Stack:** Vue 3 (Composition API, `<script setup>`), TypeScript (strict), Vite, Three.js (to be removed).

---

## File Inventory

**Files to delete entirely (4):**
- `src/components/JsonTreeModal.vue` — full-screen 3D modal Vue component
- `src/composables/use-tree-visualizer.ts` — Three.js scene/camera/renderer lifecycle composable
- `src/utils/json-to-tree.ts` — `JsonValue` → `TreeNode` transformer (only used by 3D)
- `src/types/tree-visualization.ts` — `TreeNode`, `NodeColorMap`, `NODE_COLORS` (only used by 3D)

**Files to modify (6):**
- `src/components/JsonViewer.vue` — remove modal import, "Vista 3D" button, mount, and related state
- `src/tools/registry.ts` — strip "and 3D graph" from JSON Viewer description
- `package.json` — remove `three` and `@types/three` dependencies
- `README.md` — remove 3D bullet from JSON Viewer features + Three.js from Tech Stack
- `CLAUDE.md` — update Project Overview, data flow, key components, composables, utils, types, tech stack
- `docs/technical-reference.md` — strip 3D-related sections

**Files NOT to modify:**
- `src/types/json.ts` — `JsonValue`, `DataType`, etc. still used by the 2D tree view (`JsonNode.vue`)
- `package-lock.json` — regenerated automatically by `npm install` in Task 3
- `docs/superpowers/plans/2026-04-17-json-input-syntax-highlighting.md` — historical artifact; leave untouched

---

## Task 1: Remove 3D modal references from `JsonViewer.vue`

The "Vista 3D" button, the `<JsonTreeModal>` mount, the `isModalOpen` ref, and `openModal`/`closeModal` functions all need to disappear. This is the linchpin: removing this call site is what makes the other files truly orphan and safe to delete.

**Files:**
- Modify: `src/components/JsonViewer.vue`

- [ ] **Step 1: Remove the `JsonTreeModal` import**

In `src/components/JsonViewer.vue:5`, delete the line:

```ts
import JsonTreeModal from './JsonTreeModal.vue'
```

- [ ] **Step 2: Remove modal state and handler functions**

In `src/components/JsonViewer.vue:27-37`, delete these lines:

```ts
const isModalOpen = ref(false)
// ...
function openModal(): void {
  isModalOpen.value = true
}

function closeModal(): void {
  isModalOpen.value = false
}
```

Keep `viewerKey` and `initialExpandDepth` — they belong to the 2D tree view (expand/collapse/reset controls).

The final script-section state declarations should look like:

```ts
const viewerKey = ref(0)
const initialExpandDepth = ref(2)

function expandAll(): void {
  initialExpandDepth.value = 999
  viewerKey.value++
}

function collapseAll(): void {
  initialExpandDepth.value = 0
  viewerKey.value++
}

function resetView(): void {
  initialExpandDepth.value = 2
  viewerKey.value++
}
```

- [ ] **Step 3: Remove the "Vista 3D" button from the template**

In `src/components/JsonViewer.vue`, delete the entire button block (currently lines 149–163):

```html
<!-- 3D Button -->
<button
  class="inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all shadow-sm"
  :class="isDark
    ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500'
    : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800'"
  @click="openModal"
  title="Abrir visualización 3D"
  aria-label="Abrir visualización 3D del árbol JSON"
>
  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
  </svg>
  <span>Vista 3D</span>
</button>
```

The remaining sibling elements in that controls cluster (the view-controls `div` with Expand/Collapse/Reset and the Fullscreen `button`) stay intact.

- [ ] **Step 4: Remove the `<JsonTreeModal>` mount from the template**

In `src/components/JsonViewer.vue`, delete the modal mount block (currently lines 264–269):

```html
<!-- 3D Modal -->
<JsonTreeModal
  :isOpen="isModalOpen"
  :jsonData="parsedData"
  @close="closeModal"
/>
```

- [ ] **Step 5: Verify the build still type-checks**

Run: `npm run build`
Expected: PASS — the build should succeed. TypeScript will not yet complain about the orphaned files because nothing imports them anymore; they simply exist on disk.

If the build fails with errors mentioning `JsonTreeModal`, `isModalOpen`, `openModal`, or `closeModal`, there's a leftover reference in `JsonViewer.vue` — search and remove it.

- [ ] **Step 6: STOP — let the user review**

Do not commit. Inform the user Task 1 is complete and the working tree is ready for review.

---

## Task 2: Delete the four 3D-only source files

Now that nothing imports them, these files are dead code on disk. TypeScript compiled fine in Task 1 only because we removed the consumer — the files themselves still type-check standalone. We delete them now in one batch.

**Files:**
- Delete: `src/components/JsonTreeModal.vue`
- Delete: `src/composables/use-tree-visualizer.ts`
- Delete: `src/utils/json-to-tree.ts`
- Delete: `src/types/tree-visualization.ts`

- [ ] **Step 1: Confirm no stragglers reference these modules**

Run a project-wide search before deleting:

```bash
grep -rE "JsonTreeModal|use-tree-visualizer|json-to-tree|tree-visualization|jsonToTree|TreeNode|NODE_COLORS" src/
```

Expected: **No matches.** If any source file under `src/` matches, fix that file first — do not delete until the search returns clean.

Note: `TreeNode` is a name worth double-checking. The 2D viewer (`JsonNode.vue`) does NOT use `TreeNode` — it works directly with `JsonValue`. So a clean search result is expected.

- [ ] **Step 2: Delete the four files**

Run from project root:

```bash
rm src/components/JsonTreeModal.vue
rm src/composables/use-tree-visualizer.ts
rm src/utils/json-to-tree.ts
rm src/types/tree-visualization.ts
```

- [ ] **Step 3: Verify the build still type-checks**

Run: `npm run build`
Expected: PASS — same as before. If anything errors with "Cannot find module ..." referencing these paths, restore that file and re-run the Step 1 search; you missed a reference.

- [ ] **Step 4: STOP — let the user review**

Do not commit. Inform the user Task 2 is complete.

---

## Task 3: Remove `three` and `@types/three` from `package.json`

With every source file referencing Three.js gone, the runtime dependency and its types package become unused weight in the bundle and `node_modules`.

**Files:**
- Modify: `package.json`
- Modify (auto): `package-lock.json` — regenerated by `npm install`

- [ ] **Step 1: Edit `package.json` dependencies**

Open `package.json`. Remove these two lines from the `dependencies` block (currently lines 13–14):

```json
"@types/three": "^0.182.0",
"three": "^0.182.0",
```

After editing, the `dependencies` section should read:

```json
"dependencies": {
  "vue": "^3.5.24",
  "vue-router": "^4.6.4"
}
```

Make sure no trailing comma is left dangling on the line above `}` — JSON does not allow trailing commas.

- [ ] **Step 2: Reinstall dependencies to regenerate the lockfile**

Run: `npm install`
Expected: Lockfile updates; `node_modules/three` and `node_modules/@types/three` are removed. No errors.

- [ ] **Step 3: Verify the build still type-checks AND runs**

Run: `npm run build`
Expected: PASS. The build is the strict-mode safety net — if any leftover code still references `three` or `@types/three`, this is where it would surface as a `Cannot find module 'three'` error.

- [ ] **Step 4: Spot-check the dev server runs and JSON viewer still works**

Run: `npm run dev`
Open the JSON Viewer route (`/json-viewer`) in the browser and paste a small JSON snippet. Confirm:
1. The tree view (2D) still renders with expand/collapse/reset controls.
2. The fullscreen button still works.
3. **The "Vista 3D" button is GONE** from the controls cluster.
4. No console errors mention `three`, `THREE`, `TreeNode`, or `JsonTreeModal`.

Stop the dev server (`Ctrl+C`) once verified.

- [ ] **Step 5: STOP — let the user review**

Do not commit. Inform the user Task 3 is complete.

---

## Task 4: Update `src/tools/registry.ts` description

The registry advertises "3D graph" in the JSON Viewer tool card on the home screen. The card shows up in `HomeView.vue`. Stale copy = user clicks expecting 3D and gets confused.

**Files:**
- Modify: `src/tools/registry.ts:17`

- [ ] **Step 1: Edit the description**

In `src/tools/registry.ts:17`, replace:

```ts
description: 'Visualize, format, and explore JSON data structures with an interactive tree view and 3D graph.',
```

with:

```ts
description: 'Visualize, format, and explore JSON data structures with an interactive tree view.',
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: STOP — let the user review**

Do not commit.

---

## Task 5: Update `README.md`

Two changes: drop the 3D bullet under JSON Viewer, drop Three.js from Tech Stack.

**Files:**
- Modify: `README.md:12` (3D bullet)
- Modify: `README.md:72` (Tech Stack)

- [ ] **Step 1: Remove the 3D feature bullet**

In `README.md`, delete this line (currently line 12):

```markdown
- Interactive 3D visualization with Three.js (draggable nodes, orbit controls, hover info panel)
```

The JSON Viewer section after the edit should read:

```markdown
### JSON Viewer
- Real-time JSON validation with error messages
- Expandable/collapsible tree view with color-coded types
- Automatic JSON formatting and compaction
- Syntax highlighting in the editor
```

- [ ] **Step 2: Remove Three.js from the Tech Stack list**

In `README.md`, delete this line (currently line 72):

```markdown
- **Three.js** — 3D visualization (JSON Viewer)
```

The Tech Stack section after the edit should read:

```markdown
## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — strict mode
- **Vite** — build tool
- **Tailwind CSS** — utility-first styling
```

- [ ] **Step 3: STOP — let the user review**

Do not commit.

---

## Task 6: Update `CLAUDE.md`

The project root `CLAUDE.md` describes the project to future Claude sessions. Leaving stale 3D content here actively misinforms.

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Rewrite the Project Overview**

In `CLAUDE.md`, replace lines 5–9 (Project Overview section):

```markdown
## Project Overview

JSON Visualizer - An interactive tool for visualizing JSON data with both a traditional tree view and a 3D node-based visualization using Three.js.

Built with Vue 3, TypeScript, and Vite following functional and declarative programming patterns.
```

with:

```markdown
## Project Overview

JSON Visualizer - An interactive tool for visualizing JSON data with a tree view.

Built with Vue 3, TypeScript, and Vite following functional and declarative programming patterns.
```

- [ ] **Step 2: Trim the Data Flow diagram**

In `CLAUDE.md`, replace the current Data Flow block (lines 21–30):

```markdown
### Data Flow

```
App.vue (jsonText state)
    ├── JsonInput.vue (input/format/clear)
    └── JsonViewer.vue (display)
            ├── JsonNode.vue (recursive tree view)
            └── JsonTreeModal.vue (3D visualization)
                    └── use-tree-visualizer.ts (Three.js scene)
```
```

with:

```markdown
### Data Flow

```
App.vue (jsonText state)
    ├── JsonInput.vue (input/format/clear)
    └── JsonViewer.vue (display)
            └── JsonNode.vue (recursive tree view)
```
```

- [ ] **Step 3: Remove the `JsonTreeModal.vue` entry from Key Components**

In `CLAUDE.md`, delete this bullet (currently line 37):

```markdown
- **JsonTreeModal.vue**: Full-screen modal with Three.js-powered 3D tree visualization
```

- [ ] **Step 4: Remove the `use-tree-visualizer.ts` entry from Composables**

In `CLAUDE.md`, delete this bullet (currently line 43):

```markdown
- **use-tree-visualizer.ts**: Complete Three.js scene management - OrbitControls, raycasting for hover/click, draggable nodes, edge rendering with bezier curves
```

- [ ] **Step 5: Remove the `json-to-tree.ts` entry from Utilities**

In `CLAUDE.md`, delete this bullet (currently line 47):

```markdown
- **json-to-tree.ts**: Transforms `JsonValue` into `TreeNode` structure for 3D visualization
```

If that leaves the **Utilities** subsection empty, delete the subsection heading too. (Verify by re-reading the section after the edit.)

- [ ] **Step 6: Remove the `tree-visualization.ts` entry from Type Definitions**

In `CLAUDE.md`, delete this bullet (currently line 52):

```markdown
- **types/tree-visualization.ts**: `TreeNode`, `NodeColorMap`, `NODE_COLORS` constant
```

- [ ] **Step 7: Remove Three.js from the Tech Stack list**

In `CLAUDE.md`, delete this line (currently line 68):

```markdown
- **Three.js** - 3D visualization with OrbitControls
```

- [ ] **Step 8: STOP — let the user review**

Do not commit.

---

## Task 7: Update `docs/technical-reference.md`

This file has ~12 sections referencing the 3D feature. Because it's a large reference doc, the safest pattern is: find the section heading, delete the entire section through the next sibling heading. Read each section before deleting to confirm scope.

**Files:**
- Modify: `docs/technical-reference.md`

- [ ] **Step 1: Read the file in chunks to identify all 3D-related sections**

Read the file with `Read` using offset/limit (the file exceeds the single-read token limit). The grep already mapped the affected lines; use them as anchors:

| Line | Context |
|------|---------|
| 38 | Tech stack table row: `| 3D Visualization | Three.js | 0.182.0 |` — delete this row only |
| 67, 75, 82, 90 | File tree entries: `JsonTreeModal.vue`, `use-tree-visualizer.ts`, `json-to-tree.ts`, `tree-visualization.ts` — delete each line |
| 98 | Tool table row mentioning "3D-visualize" — change description to remove "3D-visualize" |
| 473–494 | Architecture / dependency-graph section referencing `JsonTreeModal` → `Three.js scene` — delete or rewrite affected lines |
| 699–755 | `### json-to-tree.ts` section — delete entire section through the next `###` heading |
| 757–921 | `### useTreeVisualizer` section — delete entire section through the next `###` heading |
| 1721–1731 | `### src/types/tree-visualization.ts` section — delete entire section through the next `###` heading |
| 1904 | Performance bullet: "Three.js (~1 MB) is the dominant chunk" — delete this bullet |

Lines 123, 375, 414, 1337, 1344, 1350, 1600 mention the word "Three" but unrelated to Three.js (they say "Three operations", "Three side effects", "Three canvas refs", "three formats", "3-digit hex"). **Leave them.**

- [ ] **Step 2: Delete the tech-stack table row**

In `docs/technical-reference.md:38`, delete the line:

```markdown
| 3D Visualization | Three.js | 0.182.0 |
```

- [ ] **Step 3: Delete the four file-tree entries**

Delete lines containing `JsonTreeModal.vue`, `use-tree-visualizer.ts`, `json-to-tree.ts`, `tree-visualization.ts` from the file tree block (around lines 67, 75, 82, 90). Adjust surrounding tree-drawing characters (`├──` / `└──`) if removing an entry leaves a broken-looking branch.

- [ ] **Step 4: Update the tool table description**

In `docs/technical-reference.md:98`, change:

```markdown
| JSON Viewer | `json-viewer` | Parse, format, tree-view, and 3D-visualize JSON |
```

to:

```markdown
| JSON Viewer | `json-viewer` | Parse, format, and tree-view JSON |
```

- [ ] **Step 5: Trim the architecture / dependency-graph block (lines 473–494)**

Read lines 470–500 to see the full context. Remove any line that references `JsonTreeModal`, `Three.js scene`, `jsonToTree`, `TreeNode`, or `useTreeVisualizer` inside the diagram. The remaining diagram should describe only the 2D path (`JsonViewer → JsonNode → parsedData`).

- [ ] **Step 6: Delete the `### json-to-tree.ts` section (around lines 699–755)**

Read from line 699 to the next `### ` heading. Delete every line in that range, including the section heading itself.

- [ ] **Step 7: Delete the `### useTreeVisualizer` section (around lines 757–921)**

Same procedure: read from line 757 to the next `### ` heading (not `####`, etc. — the next sibling-level heading). Delete the whole block including the heading.

- [ ] **Step 8: Delete the `### src/types/tree-visualization.ts` section (around lines 1721–1731)**

Same procedure: read, identify boundaries, delete from heading through (but not including) the next sibling heading.

- [ ] **Step 9: Delete the Three.js performance bullet (around line 1904)**

Find and delete the bullet:

```markdown
- **Code splitting:** Vite automatically code-splits dynamic imports; Three.js (~1 MB) is the dominant chunk
```

If the entire bullet's *only* substantive content was the Three.js mention, delete the whole bullet. If the bullet talks generally about code-splitting and just *mentions* Three.js as the example, rewrite to remove the Three.js mention:

```markdown
- **Code splitting:** Vite automatically code-splits dynamic imports.
```

Use judgement when reading the actual line.

- [ ] **Step 10: Final grep — verify the doc is clean**

Run:

```bash
grep -niE "three\.js|threejs|JsonTreeModal|use-tree-visualizer|json-to-tree|tree-visualization|jsonToTree|TreeNode|NODE_COLORS|3D" docs/technical-reference.md
```

Expected: **No matches.** Any remaining hit means a missed reference. Inspect the line and decide: delete, edit, or (if it's an unrelated "three" / "3-digit") leave.

- [ ] **Step 11: STOP — let the user review**

Do not commit.

---

## Task 8: Final whole-project verification

Belt-and-braces pass to make sure no 3D ghost remains anywhere in the repo.

- [ ] **Step 1: Search the entire repo for stragglers**

Run:

```bash
grep -rniE "three\.js|JsonTreeModal|use-tree-visualizer|json-to-tree|tree-visualization|jsonToTree|NODE_COLORS|\"three\"|@types/three" \
  --include='*.ts' --include='*.vue' --include='*.json' --include='*.md' \
  --exclude-dir=node_modules --exclude-dir=dist --exclude-dir='.git' \
  --exclude='package-lock.json' \
  --exclude='docs/superpowers/plans/*'
```

Expected: **No matches** (excluding `package-lock.json` which is regenerated, and prior plans which are historical).

If matches appear, fix them in their respective files using the patterns from earlier tasks.

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected: PASS with no errors. Bundle size should be noticeably smaller (Three.js was ~1 MB).

- [ ] **Step 3: Dev-server smoke test**

Run: `npm run dev`

In the browser:
1. Visit `/` (home). The JSON Viewer card description no longer mentions "3D graph".
2. Click into JSON Viewer. Paste a small valid JSON.
3. Confirm the 2D tree renders. Expand / Collapse / Reset / Fullscreen buttons still work.
4. **No "Vista 3D" button anywhere.**
5. Open browser DevTools console — no errors mentioning `THREE`, `three`, `TreeNode`, `JsonTreeModal`.
6. Test all other tools briefly (Text Compare, Base64, Color Palette, Image Editor) — they should be unaffected.

Stop the dev server.

- [ ] **Step 4: STOP — hand off to the user for final review and commit**

Inform the user the implementation is complete. The user will review the diff and commit themselves.

---

## Plan Self-Review

**Spec coverage:** The user asked to (a) eliminate the 3D JSON view and (b) eliminate all references to it. Coverage map:

| Spec requirement | Covered by |
|------------------|-----------|
| Remove 3D modal component | Task 2 |
| Remove 3D composable | Task 2 |
| Remove 3D-only utils and types | Task 2 |
| Remove modal usage in consumer | Task 1 |
| Remove Three.js dependency | Task 3 |
| Update tool registry copy | Task 4 |
| Update README | Task 5 |
| Update CLAUDE.md | Task 6 |
| Update technical-reference.md | Task 7 |
| Verify nothing broken | Task 8 |

No gaps identified.

**Placeholder scan:** No `TBD`, `TODO`, `implement later`, or "similar to Task N" placeholders. Every step contains either the exact code to remove, the exact replacement text, or an exact command.

**Type consistency:** No new types or functions introduced — this is purely a removal plan. The only names referenced (`JsonTreeModal`, `isModalOpen`, `openModal`, `closeModal`, `JsonValue`, `TreeNode`, etc.) match the current codebase exactly.
