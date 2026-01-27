# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JSON Visualizer - An interactive tool for visualizing JSON data with both a traditional tree view and a 3D node-based visualization using Three.js.

Built with Vue 3, TypeScript, and Vite following functional and declarative programming patterns.

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # TypeScript check + production build
npm run preview  # Preview production build
```

## Architecture

### Data Flow

```
App.vue (jsonText state)
    ├── JsonInput.vue (input/format/clear)
    └── JsonViewer.vue (display)
            ├── JsonNode.vue (recursive tree view)
            └── JsonTreeModal.vue (3D visualization)
                    └── use-tree-visualizer.ts (Three.js scene)
```

### Key Components

- **JsonInput.vue**: Text input with validation feedback, format and clear buttons
- **JsonViewer.vue**: Orchestrates display - shows errors, empty state, or parsed JSON with expand/collapse controls
- **JsonNode.vue**: Recursive component rendering JSON tree with color-coded types
- **JsonTreeModal.vue**: Full-screen modal with Three.js-powered 3D tree visualization

### Composables

- **use-json-validator.ts**: Reactive JSON parsing with `isValid`, `hasError`, `parsedData` state
- **use-json-node.ts**: Node expansion logic, type detection, and formatting helpers
- **use-tree-visualizer.ts**: Complete Three.js scene management - OrbitControls, raycasting for hover/click, draggable nodes, edge rendering with bezier curves

### Utilities

- **json-to-tree.ts**: Transforms `JsonValue` into `TreeNode` structure for 3D visualization

### Type Definitions

- **types/json.ts**: `JsonValue`, `JsonPrimitive`, `JsonObject`, `JsonArray`, `DataType`, `ValidationResult`
- **types/tree-visualization.ts**: `TreeNode`, `NodeColorMap`, `NODE_COLORS` constant

## Code Patterns

- Vue Composition API with `<script setup>` exclusively
- Composables as pure functions returning reactive state and methods
- Interfaces over types for extendability
- Descriptive boolean variable names: `isValid`, `hasError`, `hasContent`, `isExpanded`
- Named exports for functions, use `function` keyword for pure functions

## Tech Stack

- **Vue 3** - Composition API
- **TypeScript** - Strict typing
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D visualization with OrbitControls
