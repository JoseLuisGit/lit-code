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
const {
  state,
  initialize,
  dispose,
  zoomIn,
  zoomOut,
  resetView,
  expandAll,
  collapseAll,
  toggleAutoRotate
} = useTreeVisualizer(containerRef)

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
          class="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
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
            class="relative z-10 w-full max-w-[95vw] h-[90vh] bg-black/40 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10"
          >
            <!-- Header -->
            <header class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none">
              <div class="flex items-center gap-6 flex-wrap pointer-events-auto">
                <!-- Title -->
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm">
                    <svg class="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h2 id="modal-title" class="text-white font-bold text-xl tracking-tight">Cosmos JSON</h2>
                    <p class="text-xs text-slate-400 font-medium tracking-wide uppercase">Explorador 3D</p>
                  </div>
                </div>

                <!-- Controls Group -->
                <div class="flex items-center gap-2 p-1.5 bg-slate-950/50 backdrop-blur-md rounded-2xl ring-1 ring-white/10 shadow-xl">
                  <!-- Zoom -->
                  <div class="flex items-center gap-0.5 px-1">
                    <button
                      class="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                      @click="zoomOut"
                      title="Alejar"
                    >
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
                    </button>
                    <button
                      class="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                      @click="zoomIn"
                      title="Acercar"
                    >
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    </button>
                  </div>

                  <div class="w-px h-6 bg-white/10"></div>

                  <!-- Auto Rotate -->
                   <button
                    class="p-2 rounded-xl transition-all flex items-center gap-2 px-3"
                    :class="state.isAutoRotating ? 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50' : 'text-slate-400 hover:text-white hover:bg-white/10'"
                    @click="toggleAutoRotate"
                    title="Alternar rotación automática"
                  >
                    <svg class="w-4 h-4" :class="{'animate-spin-slow': state.isAutoRotating}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span class="text-xs font-medium hidden sm:block">Girar</span>
                  </button>

                  <div class="w-px h-6 bg-white/10"></div>

                  <!-- Tree Controls -->
                  <div class="flex items-center gap-1">
                    <button
                       class="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                       @click="expandAll"
                    >Expandir</button>
                    <button
                       class="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                       @click="collapseAll"
                    >Colapsar</button>
                    <button
                       class="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                       @click="resetView"
                    >Reset</button>
                  </div>
                </div>
              </div>

              <!-- Close Button -->
              <button
                class="pointer-events-auto p-2.5 text-slate-400 hover:text-white bg-slate-950/50 hover:bg-red-500/20 hover:text-red-200 rounded-full transition-all ring-1 ring-white/10 backdrop-blur-md"
                @click="handleClose"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <!-- Node Info Panel (Glassmorphism) -->
            <Transition
              enter-active-class="transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)"
              enter-from-class="opacity-0 translate-y-4 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-4 scale-95"
            >
              <div
                v-if="state.hoveredNode"
                class="absolute bottom-8 left-8 z-20 w-80 pointer-events-none"
              >
                <div class="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group">
                   <!-- Glow effect behind -->
                   <div class="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full group-hover:bg-primary-500/30 transition-colors"></div>

                   <div class="relative z-10">
                      <div class="flex items-center gap-3 mb-3">
                         <div
                           class="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]"
                            :class="{
                              'text-orange-400 bg-orange-400': state.hoveredNode.type === 'object',
                              'text-cyan-400 bg-cyan-400': state.hoveredNode.type === 'array',
                              'text-emerald-400 bg-emerald-400': state.hoveredNode.type === 'string',
                              'text-blue-400 bg-blue-400': state.hoveredNode.type === 'number',
                              'text-pink-400 bg-pink-400': state.hoveredNode.type === 'boolean',
                              'text-slate-400 bg-slate-400': state.hoveredNode.type === 'null'
                            }"
                         ></div>
                         <span class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                           {{ state.hoveredNode.type }}
                         </span>
                      </div>
                      
                      <h3 class="text-white font-bold text-lg leading-tight mb-1 truncate">{{ state.hoveredNode.name }}</h3>
                      
                      <div class="mt-3 bg-black/30 rounded-lg p-3 border border-white/5">
                        <p class="text-xs text-slate-300 font-mono break-all leading-relaxed max-h-32 overflow-hidden text-ellipsis">
                           {{ state.hoveredNode.value }}
                        </p>
                      </div>
                   </div>
                </div>
              </div>
            </Transition>

             <!-- Controls Hint -->
            <div class="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2 pointer-events-none">
              <div class="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2 text-[10px] text-slate-400">
                <span class="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></span>
                <span>{{ state.zoomLevel ? Math.round(state.zoomLevel * 100) : 0 }}% Zoom</span>
              </div>
            </div>

            <!-- Canvas Container -->
            <div
              ref="containerRef"
              class="w-full h-full cursor-grab active:cursor-grabbing bg-slate-950"
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
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
