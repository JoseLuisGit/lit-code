# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JSON Visualizer - A project for visualizing JSON data in a visual and interactive way.

Built with Vue 3, TypeScript, and Vite following functional and declarative programming patterns.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript type checking first)
npm run build

# Preview production build
npm run preview
```

## Architecture

The project follows a modular, composable architecture with separation of concerns:

### Directory Structure

- **src/components/** - Vue components (JsonInput, JsonViewer, JsonNode)
- **src/composables/** - Reusable composition functions following VueUse patterns
  - `use-json-validator.ts` - JSON validation and parsing logic
  - `use-json-node.ts` - JSON node expansion and display logic
- **src/types/** - TypeScript type definitions and interfaces
  - `json.ts` - JSON-related types (JsonValue, JsonObject, JsonArray, DataType)

### Component Responsibilities

- **JsonInput.vue**: Handles user input, validation status display, and formatting controls
- **JsonViewer.vue**: Displays parsed JSON with error handling
- **JsonNode.vue**: Recursive component for rendering individual JSON nodes with expand/collapse

### Key Patterns

- Uses Composition API with `<script setup>` syntax exclusively
- Composables follow functional programming principles with pure functions
- All business logic is extracted into composables for reusability
- TypeScript interfaces (not types) for better extendability
- Descriptive variable names with auxiliary verbs (isValid, hasError, hasContent)

## Tech Stack

- **Vue 3**: Composition API with `<script setup>` syntax
- **TypeScript**: Strict typing with interfaces
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling with mobile-first responsive design
- **vue-tsc**: TypeScript compiler for Vue
