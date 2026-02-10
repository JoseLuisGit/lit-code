<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useJsonValidator } from '../composables/use-json-validator'
import JsonNode from './JsonNode.vue'
import JsonTreeModal from './JsonTreeModal.vue'
import type { Theme } from '../composables/use-theme'

interface Props {
  jsonText: string
  theme: Theme
}

const props = defineProps<Props>()

const isDark = computed(() => props.theme.name === 'dark' || props.theme.name === 'midnight')

const { parsedData, errorMessage, setJsonText } = useJsonValidator(props.jsonText)

watch(() => props.jsonText, (newValue) => {
  setJsonText(newValue)
})

const hasData = computed(() => parsedData.value !== null)
const hasError = computed(() => errorMessage.value !== null)
const isEmpty = computed(() => !props.jsonText.trim())

const isModalOpen = ref(false)
const viewerKey = ref(0)
const initialExpandDepth = ref(2)

function openModal(): void {
  isModalOpen.value = true
}

function closeModal(): void {
  isModalOpen.value = false
}

function expandAll(): void {
  initialExpandDepth.value = 999
  viewerKey.value++
}

function collapseAll(): void {
  initialExpandDepth.value = 0
  viewerKey.value++
}

function resetView(): void {
  initialExpandDepth.value = 2
  viewerKey.value++
}
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
          :class="isDark ? 'bg-gradient-to-br from-cyan-400 to-cyan-500' : 'bg-gradient-to-br from-cyan-500 to-cyan-600'"
        >
          <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h2
          class="text-lg font-semibold transition-colors duration-300"
          :class="theme.colors.textPrimary"
        >Visualizador</h2>
      </div>

      <!-- Controls -->
      <div v-if="hasData" class="flex items-center gap-1.5">
        <!-- View controls group -->
        <div
          class="flex items-center gap-0.5 p-1 rounded-lg transition-colors duration-300"
          :class="isDark ? 'bg-slate-700' : 'bg-gray-100'"
        >
          <button
            class="p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
            :class="isDark
              ? 'text-slate-300 hover:text-white hover:bg-slate-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white'"
            title="Expandir todo"
            aria-label="Expandir todos los nodos"
            @click="expandAll"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
          <button
            class="p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
            :class="isDark
              ? 'text-slate-300 hover:text-white hover:bg-slate-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white'"
            title="Colapsar todo"
            aria-label="Colapsar todos los nodos"
            @click="collapseAll"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <button
            class="p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
            :class="isDark
              ? 'text-slate-300 hover:text-white hover:bg-slate-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white'"
            title="Restablecer vista"
            aria-label="Restablecer vista por defecto"
            @click="resetView"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <!-- 3D Button -->
        <button
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all shadow-sm"
          :class="isDark
            ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500'
            : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800'"
          @click="openModal"
          title="Abrir visualización 3D"
          aria-label="Abrir visualización 3D del árbol JSON"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <span>Vista 3D</span>
        </button>
      </div>
    </div>

    <!-- Content Area -->
    <div
      class="flex-1 overflow-auto rounded-xl ring-1 shadow-inner-soft transition-colors duration-300"
      :class="isDark
        ? 'bg-slate-800/50 ring-slate-700'
        : 'bg-surface-secondary ring-gray-100'"
    >
      <!-- Error State -->
      <div v-if="hasError" class="p-6 animate-fade-in" role="alert">
        <div
          class="flex items-start gap-4 p-4 border rounded-xl transition-colors duration-300"
          :class="isDark ? 'bg-red-900/30 border-red-800' : 'bg-red-50 border-red-200'"
        >
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
            :class="isDark ? 'bg-red-900/50' : 'bg-red-100'"
          >
            <svg
              class="w-5 h-5"
              :class="isDark ? 'text-red-400' : 'text-red-600'"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p
              class="font-semibold"
              :class="isDark ? 'text-red-300' : 'text-red-800'"
            >Error de sintaxis JSON</p>
            <p
              class="text-sm mt-1 break-words"
              :class="isDark ? 'text-red-400' : 'text-red-600'"
            >{{ errorMessage }}</p>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="isEmpty" class="flex flex-col items-center justify-center h-full py-16 px-6 animate-fade-in">
        <div
          class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
          :class="isDark ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'"
        >
          <svg
            class="w-10 h-10"
            :class="isDark ? 'text-slate-500' : 'text-gray-400'"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p
          class="text-lg font-medium mb-1 transition-colors duration-300"
          :class="isDark ? 'text-slate-300' : 'text-gray-700'"
        >Sin datos JSON</p>
        <p
          class="text-sm text-center max-w-xs transition-colors duration-300"
          :class="isDark ? 'text-slate-500' : 'text-gray-500'"
        >
          Ingresa o pega JSON válido en el panel de entrada para visualizar su estructura
        </p>
      </div>

      <!-- Data Display -->
      <div v-else-if="hasData" class="p-4 animate-fade-in">
        <JsonNode
          :key="viewerKey"
          :data="parsedData"
          name="root"
          :isRoot="true"
          :depth="0"
          :initialExpandDepth="initialExpandDepth"
          :lineNumber="1"
          :theme="theme"
        />
      </div>
    </div>

    <!-- 3D Modal -->
    <JsonTreeModal
      :isOpen="isModalOpen"
      :jsonData="parsedData"
      @close="closeModal"
    />
  </div>
</template>
