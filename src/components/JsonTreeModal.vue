<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import type { JsonValue } from '../types/json'
import { jsonToTree } from '../utils/json-to-tree'
import { useTreeVisualizer } from '../composables/use-tree-visualizer'

interface Props {
  isOpen: boolean
  jsonData: JsonValue | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const containerRef = ref<HTMLElement | null>(null)
const { state, initialize, dispose, zoomIn, zoomOut, resetView, expandAll, collapseAll } = useTreeVisualizer(containerRef)

function handleClose(): void {
  dispose()
  emit('close')
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    handleClose()
  }
}

watch(
  () => props.isOpen,
  async (isOpen) => {
    if (isOpen && props.jsonData !== null) {
      await nextTick()
      const treeData = jsonToTree(props.jsonData)
      initialize(treeData)
      window.addEventListener('keydown', handleKeydown)
    } else {
      window.removeEventListener('keydown', handleKeydown)
      dispose()
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        @click="handleClose"
      />

      <!-- Modal -->
      <div class="relative z-10 w-[95vw] h-[90vh] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">

        <!-- Header -->
        <div class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-slate-900 via-slate-900/95 to-transparent">
          <div class="flex items-center gap-4">
            <h2 class="text-white font-semibold text-lg">JSON Tree View</h2>
            <div class="flex items-center gap-1 bg-slate-800 rounded-lg p-1">
              <button
                class="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                title="Zoom Out"
                @click="zoomOut"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                </svg>
              </button>
              <span class="text-slate-400 text-xs px-2 min-w-[3rem] text-center">
                {{ Math.round(state.zoomLevel * 100) }}%
              </span>
              <button
                class="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                title="Zoom In"
                @click="zoomIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
              <div class="w-px h-4 bg-slate-600 mx-1"></div>
              <button
                class="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                title="Reset View"
                @click="resetView"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
            <div class="flex items-center gap-1 bg-slate-800 rounded-lg p-1">
              <button
                class="px-3 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors text-xs font-medium"
                title="Expand All Nodes"
                @click="expandAll"
              >
                Expand All
              </button>
              <button
                class="px-3 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors text-xs font-medium"
                title="Collapse All Nodes"
                @click="collapseAll"
              >
                Collapse All
              </button>
            </div>
          </div>

          <button
            class="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            @click="handleClose"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Help tooltip -->
        <div class="absolute bottom-4 right-4 z-20 text-slate-400 text-xs bg-slate-800/90 px-3 py-2 rounded-lg backdrop-blur-sm">
          <span class="text-slate-500">Drag background</span> to pan
          <span class="mx-2 text-slate-600">|</span>
          <span class="text-slate-500">Drag node</span> to move
          <span class="mx-2 text-slate-600">|</span>
          <span class="text-slate-500">Scroll</span> to zoom
          <span class="mx-2 text-slate-600">|</span>
          <span class="text-slate-500">Click node</span> to expand
        </div>

        <!-- Node Info Panel -->
        <div
          v-if="state.hoveredNode"
          class="absolute bottom-4 left-4 z-20 bg-slate-800/95 text-white px-4 py-3 rounded-xl shadow-xl max-w-sm backdrop-blur-sm border border-slate-700"
        >
          <div class="flex items-center gap-2 mb-1">
            <span
              class="w-3 h-3 rounded-full"
              :class="{
                'bg-orange-500': state.hoveredNode.type === 'object',
                'bg-cyan-500': state.hoveredNode.type === 'array',
                'bg-emerald-500': state.hoveredNode.type === 'string',
                'bg-indigo-500': state.hoveredNode.type === 'number',
                'bg-pink-500': state.hoveredNode.type === 'boolean',
                'bg-slate-500': state.hoveredNode.type === 'null'
              }"
            ></span>
            <span class="text-xs uppercase tracking-wider text-slate-400 font-medium">
              {{ state.hoveredNode.type }}
            </span>
          </div>
          <p class="font-semibold text-white">{{ state.hoveredNode.name }}</p>
          <p class="text-sm text-slate-300 mt-1 break-all line-clamp-3">{{ state.hoveredNode.value }}</p>
        </div>

        <!-- Canvas Container -->
        <div
          ref="containerRef"
          class="w-full h-full"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
