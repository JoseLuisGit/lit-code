# lit-code

A collection of developer tools built with Vue 3, TypeScript, and Tailwind CSS. Features an interactive home screen for selecting tools, with 5 theme variants and smooth view transitions.

## Tools

### JSON Viewer (active)
- Real-time JSON validation with error messages
- Expandable/collapsible tree view with color-coded types
- Automatic JSON formatting and compaction
- Syntax highlighting in the editor
- Interactive 3D visualization with Three.js
  - Draggable nodes
  - Zoom and pan with orbit controls
  - Expand/collapse nodes on click
  - Info panel on node hover

### Text Compare (active)
- Side-by-side text comparison with line-level diff
- Character-level highlighting within modified lines (LCS algorithm)
- Diff navigation (prev/next) with auto-scroll sync between panels
- Stats bar: added / removed / modified / equal line counts

### Base64 Encoder · Regex Tester · Color Palette
Coming soon.

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # TypeScript check + production build
npm run preview  # Preview production build
```

## Architecture

```
App.vue                          # Thin shell — gradient bg + <Transition> routing
├── views/HomeView.vue           # Landing screen with tool card grid
├── views/JsonViewerView.vue     # JSON Viewer tool
└── views/TextCompareView.vue    # Text Compare tool
        └── DiffOutputPanel.vue  # One side of the diff (left/right)

tools/registry.ts                # Central tool registry (id, name, status, tags)
utils/text-diff.ts               # Pure LCS diff algorithm (no Vue, no DOM)
composables/use-text-diff.ts     # Reactive wrapper for diff state and navigation
composables/use-theme.ts         # 5-theme system with localStorage persistence
components/ToolHeader.vue        # Reusable header with back button + ThemeSelector
```

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — strict mode
- **Vite** — build tool
- **Tailwind CSS** — utility-first styling
- **Three.js** — 3D visualization (JSON Viewer)
