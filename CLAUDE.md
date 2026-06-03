# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JSON Visualizer - An interactive tool for visualizing JSON data with a tree view.

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
            └── JsonNode.vue (recursive tree view)
```

### Key Components

- **JsonInput.vue**: Text input with validation feedback, format and clear buttons
- **JsonViewer.vue**: Orchestrates display - shows errors, empty state, or parsed JSON with expand/collapse controls
- **JsonNode.vue**: Recursive component rendering JSON tree with color-coded types

### Composables

- **use-json-validator.ts**: Reactive JSON parsing with `isValid`, `hasError`, `parsedData` state
- **use-json-node.ts**: Node expansion logic, type detection, and formatting helpers

### Type Definitions

- **types/json.ts**: `JsonValue`, `JsonPrimitive`, `JsonObject`, `JsonArray`, `DataType`, `ValidationResult`

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
