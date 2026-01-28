<script setup lang="ts">
import { useJsonNode } from '../composables/use-json-node'
import type { JsonValue } from '../types/json'

interface Props {
  data: JsonValue
  name: string
  isRoot?: boolean
  depth?: number
  initialExpandDepth?: number
  lineNumber?: number
}

const props = withDefaults(defineProps<Props>(), {
  isRoot: false,
  depth: 0,
  initialExpandDepth: 2,
  lineNumber: 1
})

const {
  isExpanded,
  dataType,
  isExpandable,
  itemCount,
  entries,
  toggleExpand,
  getValueColor,
  formatValue
} = useJsonNode(props.data, props.depth, props.initialExpandDepth)
</script>

<template>
  <div class="json-node">
    <div class="flex items-start gap-2">
      <!-- Line number -->
      <span class="flex-shrink-0 w-8 text-right text-xs text-gray-400 select-none font-mono mt-0.5">
        {{ lineNumber }}
      </span>

      <div
        class="flex-1 flex items-start gap-2 py-0.5 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors"
        :class="{ 'cursor-pointer': isExpandable }"
        @click="toggleExpand"
      >
        <!-- Expand/Collapse Icon -->
        <span v-if="isExpandable" class="flex-shrink-0 w-4 h-4 mt-0.5 select-none text-gray-400 hover:text-gray-600">
          <svg
            class="transition-transform duration-150"
            :class="{ 'rotate-90': isExpanded }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <span v-else class="flex-shrink-0 w-4 h-4 mt-0.5 flex items-center justify-center">
          <span class="w-1.5 h-1.5 rounded-full" :class="dataType === 'null' ? 'bg-gray-400' : 'bg-current ' + getValueColor(dataType)"></span>
        </span>

        <!-- Name -->
        <span v-if="!isRoot" class="font-medium text-blue-800 flex-shrink-0">
          {{ name }}<span class="text-gray-400">:</span>
        </span>

        <!-- Value or Type -->
        <span v-if="isExpandable" class="text-gray-500 font-mono text-sm">
          <span class="text-gray-400">{{ dataType === 'array' ? '[' : '{' }}</span>
          <span class="text-orange-600">{{ itemCount }}</span>
          <span class="text-gray-400">{{ dataType === 'array' ? ']' : '}' }}</span>
          <span v-if="!isExpanded" class="text-gray-400 ml-1">...</span>
        </span>
        <span v-else :class="getValueColor(dataType)" class="font-mono text-sm break-words max-w-md">
          {{ formatValue(data) }}
        </span>
      </div>
    </div>

    <!-- Children -->
    <div
      v-if="isExpandable && isExpanded"
      class="ml-4 pl-3 border-l-2 border-blue-200 hover:border-blue-300 transition-colors"
    >
      <JsonNode
        v-for="(entry, index) in entries"
        :key="entry.key"
        :data="entry.value"
        :name="String(entry.key)"
        :depth="depth + 1"
        :initialExpandDepth="initialExpandDepth"
        :lineNumber="lineNumber + index + 1"
      />
    </div>
  </div>
</template>

<style scoped>
.json-node {
  font-family: 'Courier New', monospace;
}
</style>
