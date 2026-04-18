<script setup lang="ts">
import { computed } from 'vue'
import { useJsonNode } from '../composables/use-json-node'
import type { JsonValue } from '../types/json'
import type { Theme, ThemeColors } from '../composables/use-theme'

interface Props {
  data: JsonValue
  name: string
  isRoot?: boolean
  depth?: number
  initialExpandDepth?: number
  lineNumber?: number
  theme?: Theme
}

const props = withDefaults(defineProps<Props>(), {
  isRoot: false,
  depth: 0,
  initialExpandDepth: 2,
  lineNumber: 1
})

const isDark = computed(() => props.theme?.name === 'dark' || props.theme?.name === 'midnight')

type JsonColorKey = keyof Pick<ThemeColors, 'jsonString' | 'jsonNumber' | 'jsonBoolean' | 'jsonNull' | 'jsonObject' | 'jsonArray'>

const JSON_COLOR_KEYS: Record<string, JsonColorKey> = {
  string: 'jsonString',
  number: 'jsonNumber',
  boolean: 'jsonBoolean',
  null: 'jsonNull',
  object: 'jsonObject',
  array: 'jsonArray',
}

const {
  isExpanded,
  dataType,
  isExpandable,
  itemCount,
  entries,
  toggleExpand,
  formatValue
} = useJsonNode(() => props.data, props.depth, props.initialExpandDepth)

function getTypeIcon(type: string): string {
  switch (type) {
    case 'object': return '{}'
    case 'array': return '[]'
    case 'string': return 'Aa'
    case 'number': return '#'
    case 'boolean': return '◐'
    case 'null': return 'ø'
    default: return '·'
  }
}

function getTypeBadgeColor(type: string): string {
  if (isDark.value) {
    switch (type) {
      case 'object': return 'bg-orange-900/50 text-orange-400'
      case 'array': return 'bg-cyan-900/50 text-cyan-400'
      case 'string': return 'bg-emerald-900/50 text-emerald-400'
      case 'number': return 'bg-blue-900/50 text-blue-400'
      case 'boolean': return 'bg-violet-900/50 text-violet-400'
      case 'null': return 'bg-slate-700 text-slate-400'
      default: return 'bg-slate-700 text-slate-400'
    }
  }
  switch (type) {
    case 'object': return 'bg-orange-100 text-orange-700'
    case 'array': return 'bg-cyan-100 text-cyan-700'
    case 'string': return 'bg-emerald-100 text-emerald-700'
    case 'number': return 'bg-blue-100 text-blue-700'
    case 'boolean': return 'bg-violet-100 text-violet-700'
    case 'null': return 'bg-gray-100 text-gray-600'
    default: return 'bg-gray-100 text-gray-600'
  }
}

function getValueColor(type: string): string {
  if (props.theme) {
    const key = JSON_COLOR_KEYS[type]
    return key ? props.theme.colors[key] : props.theme.colors.textSecondary
  }
  switch (type) {
    case 'string': return 'text-emerald-600'
    case 'number': return 'text-blue-600'
    case 'boolean': return 'text-violet-600'
    case 'null': return 'text-gray-500'
    default: return 'text-gray-800'
  }
}
</script>

<template>
  <div class="json-node group/node">
    <div class="flex items-start gap-1.5">
      <!-- Line number -->
      <span
        class="flex-shrink-0 w-8 text-right text-[10px] select-none font-mono mt-1 tabular-nums opacity-60 group-hover/node:opacity-100 transition-opacity"
        :class="isDark ? 'text-slate-500' : 'text-gray-400'"
        aria-hidden="true"
      >
        {{ lineNumber }}
      </span>

      <div
        class="flex-1 flex items-start gap-1.5 py-1 px-2 -mx-2 rounded-lg transition-all"
        :class="[
          isExpandable
            ? isDark ? 'cursor-pointer hover:bg-slate-700/50' : 'cursor-pointer hover:bg-primary-50/70'
            : isDark ? 'hover:bg-slate-700/30' : 'hover:bg-gray-50',
        ]"
        :role="isExpandable ? 'button' : undefined"
        :aria-expanded="isExpandable ? isExpanded : undefined"
        :tabindex="isExpandable ? 0 : undefined"
        @click="toggleExpand"
        @keydown.enter="toggleExpand"
        @keydown.space.prevent="toggleExpand"
      >
        <!-- Expand/Collapse Icon -->
        <span
          v-if="isExpandable"
          class="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded transition-colors"
          :class="isExpanded
            ? isDark ? 'text-primary-400' : 'text-primary-500'
            : isDark ? 'text-slate-500 group-hover/node:text-slate-400' : 'text-gray-400 group-hover/node:text-gray-600'"
        >
          <svg
            class="w-3.5 h-3.5 transition-transform duration-200 ease-out"
            :class="{ 'rotate-90': isExpanded }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <span
          v-else
          class="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[9px] font-bold rounded"
          :class="getTypeBadgeColor(dataType)"
          :title="dataType"
        >
          {{ getTypeIcon(dataType) }}
        </span>

        <!-- Name -->
        <span
          v-if="!isRoot"
          class="font-medium flex-shrink-0"
          :class="isDark ? 'text-primary-400' : 'text-primary-700'"
        >
          "{{ name }}"<span :class="isDark ? 'text-slate-500' : 'text-gray-400'" class="ml-0.5">:</span>
        </span>

        <!-- Value or Type -->
        <span
          v-if="isExpandable"
          class="font-mono text-sm flex items-center gap-1.5"
          :class="isDark ? 'text-slate-400' : 'text-gray-600'"
        >
          <span
            class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold"
            :class="dataType === 'array'
              ? isDark ? 'bg-cyan-900/50 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
              : isDark ? 'bg-orange-900/50 text-orange-400' : 'bg-orange-100 text-orange-700'"
          >
            {{ dataType === 'array' ? '[]' : '{}' }}
            <span class="tabular-nums">{{ itemCount }}</span>
          </span>
          <span
            v-if="!isExpanded"
            class="text-xs"
            :class="isDark ? 'text-slate-500' : 'text-gray-400'"
          >•••</span>
        </span>
        <span
          v-else
          :class="getValueColor(dataType)"
          class="font-mono text-sm break-all"
        >
          {{ formatValue(data) }}
        </span>
      </div>
    </div>

    <!-- Children -->
    <div
      v-if="isExpandable && isExpanded"
      class="ml-5 pl-3 border-l-2 transition-colors animate-fade-in"
      :class="isDark
        ? 'border-slate-700 hover:border-slate-600'
        : 'border-primary-100 hover:border-primary-200'"
    >
      <JsonNode
        v-for="(entry, index) in entries"
        :key="entry.key"
        :data="entry.value"
        :name="String(entry.key)"
        :depth="depth + 1"
        :initialExpandDepth="initialExpandDepth"
        :lineNumber="lineNumber + index + 1"
        :theme="theme"
      />
    </div>
  </div>
</template>

<style scoped>
.json-node {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.8125rem;
  line-height: 1.5;
}
</style>
