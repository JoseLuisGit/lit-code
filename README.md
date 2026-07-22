# lit-code

A collection of developer tools built with Vue 3, TypeScript, and Tailwind CSS. Features an interactive home screen for selecting tools, with 5 theme variants and smooth view transitions.

## Tools

### JSON Viewer
- Real-time JSON validation with error messages
- Expandable/collapsible tree view with color-coded types
- Automatic JSON formatting and compaction
- Syntax highlighting in the editor

### Text Compare
- Side-by-side text comparison with line-level diff (LCS algorithm)
- Character-level highlighting within modified lines
- Diff navigation (prev/next) with synchronized scroll between panels
- Stats bar: added / removed / modified / equal line counts

### Base64
- Encode text or files to Base64
- LF / CRLF line ending control for text encoding
- Decode Base64 text or files (max 50 MB)
- Copy output or download as `.txt`

### Color Palette
- Live color picker with synced HEX / RGB / HSL inputs
- Six palette generators: Shades, Tints, Complementary, Analogous, Triadic, Split Complementary
- Click any swatch to copy in HEX / RGB / HSL format
- "Copy as CSS vars" per palette row

### Regex Tester
- Live match highlighting over the test string as you type
- Flag toggles (`g`, `i`, `m`, `s`, `u`, `y`) with descriptions
- Match list with numbered positions and capture groups (named groups supported)
- Replace mode with `$1`, `$&`, `$<name>` substitution preview
- Ready-to-copy code snippets in TypeScript, JavaScript, PHP and Java with per-language escaping and flag mapping
- Built-in example library (email, URL, ISO date, IPv4, hex color, phone, password, and more)

#### How to use
1. Type a pattern in the `/.../` bar — matching runs live.
2. Toggle flags by clicking their buttons (hover for a description).
3. Paste a test string — matches highlight in place and list on the right.
4. Switch to **Replace** to preview substitutions.
5. Open the **Code** tab to copy a snippet in your language.

#### Flag mapping across languages
| JS | PHP (PCRE) | Java (`Pattern`) |
|----|------------|------------------|
| `i` | `i` | `CASE_INSENSITIVE` |
| `m` | `m` | `MULTILINE` |
| `s` | `s` | `DOTALL` |
| `u` | `u` | `UNICODE_CHARACTER_CLASS` |
| `g` | `preg_match_all` / `preg_replace` | loop with `Matcher.find()` |
| `y` | not supported | not supported |

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # TypeScript check + production build
npm run preview  # Preview production build
```

## Architecture

```
App.vue                            # Thin shell — gradient bg + <Transition> routing
├── views/HomeView.vue             # Landing screen with tool card grid
├── views/JsonViewerView.vue       # JSON Viewer tool
│       └── DiffOutputPanel.vue   # One diff panel side (left/right)
├── views/TextCompareView.vue      # Text Compare tool
├── views/Base64View.vue           # Base64 Encoder / Decoder tool
├── views/ColorPaletteView.vue     # Color Palette tool
└── views/RegexTesterView.vue      # Regex Tester tool

tools/registry.ts                  # Central tool registry (id, name, status, tags)
types/regex.ts                     # Regex Tester type definitions
utils/text-diff.ts                 # Pure LCS diff algorithm (no Vue, no DOM)
utils/base64.ts                    # Pure Base64 encode/decode utilities
utils/color-utils.ts               # Pure color math: HEX↔RGB↔HSL + palette generators
utils/regex-engine.ts              # Pure regex compile/match/replace/highlight logic
utils/regex-snippets.ts            # TS/JS/PHP/Java code snippet generators
utils/regex-examples.ts            # Built-in regex example library
composables/use-text-diff.ts       # Reactive diff state and navigation
composables/use-base64.ts          # Reactive Base64 encode/decode state
composables/use-color-palette.ts   # Reactive color picker and palette state
composables/use-regex-tester.ts    # Reactive regex testing state
composables/use-theme.ts           # 5-theme system with localStorage persistence
components/ToolHeader.vue          # Reusable header with back button + ThemeSelector
```

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — strict mode
- **Vite** — build tool
- **Tailwind CSS** — utility-first styling
