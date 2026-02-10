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
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          @click="handleClose"
          aria-hidden="true"
        />

        <!-- Modal -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out delay-100"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="isOpen"
            class="relative z-10 w-full max-w-[95vw] h-[90vh] bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10"
          >
            <!-- Header -->
            <header class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-transparent">
              <div class="flex items-center gap-6 flex-wrap">
                <!-- Title -->
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <h2 id="modal-title" class="text-white font-semibold text-lg">Vista 3D del Árbol</h2>
                </div>

                <!-- Zoom Controls -->
                <div class="flex items-center gap-1 p-1 bg-slate-800/80 rounded-xl ring-1 ring-white/5">
                  <button
                    class="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                    title="Alejar"
                    aria-label="Alejar"
                    @click="zoomOut"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                    </svg>
                  </button>
                  <span class="text-slate-300 text-xs px-3 min-w-[3.5rem] text-center font-mono tabular-nums">
                    {{ Math.round(state.zoomLevel * 100) }}%
                  </span>
                  <button
                    class="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                    title="Acercar"
                    aria-label="Acercar"
                    @click="zoomIn"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                  <div class="w-px h-5 bg-slate-600 mx-1" aria-hidden="true"></div>
                  <button
                    class="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                    title="Restablecer vista"
                    aria-label="Restablecer vista"
                    @click="resetView"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>

                <!-- Expand/Collapse Controls -->
                <div class="flex items-center gap-1">
                  <button
                    class="px-3 py-1.5 text-slate-300 text-xs font-medium bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    title="Expandir todos los nodos"
                    aria-label="Expandir todos los nodos"
                    @click="expandAll"
                  >
                    Expandir
                  </button>
                  <button
                    class="px-3 py-1.5 text-slate-300 text-xs font-medium bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    title="Colapsar todos los nodos"
                    aria-label="Colapsar todos los nodos"
                    @click="collapseAll"
                  >
                    Colapsar
                  </button>
                </div>
              </div>

              <!-- Close Button -->
              <button
                class="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-red-600 rounded-lg transition-all ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-red-500"
                @click="handleClose"
                title="Cerrar (Esc)"
                aria-label="Cerrar modal"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <!-- Help Tooltip -->
            <div class="absolute bottom-5 right-5 z-20 flex items-center gap-3 text-[11px] bg-slate-800/90 px-4 py-2.5 rounded-xl backdrop-blur-sm ring-1 ring-white/5">
              <div class="flex items-center gap-1.5">
                <kbd class="px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono">Arrastrar</kbd>
                <span class="text-slate-400">para mover</span>
              </div>
              <div class="w-px h-3 bg-slate-600" aria-hidden="true"></div>
              <div class="flex items-center gap-1.5">
                <kbd class="px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono">Scroll</kbd>
                <span class="text-slate-400">para zoom</span>
              </div>
              <div class="w-px h-3 bg-slate-600" aria-hidden="true"></div>
              <div class="flex items-center gap-1.5">
                <kbd class="px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono">Click</kbd>
                <span class="text-slate-400">para expandir</span>
              </div>
              <div class="w-px h-3 bg-slate-600" aria-hidden="true"></div>
              <div class="flex items-center gap-1.5">
                <kbd class="px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono">Esc</kbd>
                <span class="text-slate-400">para cerrar</span>
              </div>
            </div>

            <!-- Node Info Panel -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div
                v-if="state.hoveredNode"
                class="absolute bottom-5 left-5 z-20 bg-slate-800/95 text-white px-4 py-3 rounded-xl shadow-xl max-w-sm backdrop-blur-sm ring-1 ring-white/10"
              >
                <div class="flex items-center gap-2 mb-2">
                  <span
                    class="w-3 h-3 rounded-full ring-2 ring-white/20"
                    :class="{
                      'bg-orange-500': state.hoveredNode.type === 'object',
                      'bg-cyan-500': state.hoveredNode.type === 'array',
                      'bg-emerald-500': state.hoveredNode.type === 'string',
                      'bg-blue-500': state.hoveredNode.type === 'number',
                      'bg-violet-500': state.hoveredNode.type === 'boolean',
                      'bg-slate-500': state.hoveredNode.type === 'null'
                    }"
                    aria-hidden="true"
                  ></span>
                  <span class="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    {{ state.hoveredNode.type }}
                  </span>
                </div>
                <p class="font-semibold text-white text-sm">{{ state.hoveredNode.name }}</p>
                <p class="text-xs text-slate-300 mt-1.5 break-all line-clamp-3 font-mono">{{ state.hoveredNode.value }}</p>
              </div>
            </Transition>

            <!-- Canvas Container -->
            <div
              ref="containerRef"
              class="w-full h-full cursor-grab active:cursor-grabbing"
            />
          </div>
        </Transition>
      </div>
    </Transition>
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
