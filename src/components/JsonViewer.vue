<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useJsonValidator } from '../composables/use-json-validator'
import JsonNode from './JsonNode.vue'
import JsonTreeModal from './JsonTreeModal.vue'

interface Props {
  jsonText: string
}

const props = defineProps<Props>()

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
    <div class="mb-3 flex items-center justify-between flex-wrap gap-2">
      <h2 class="text-xl font-bold text-gray-800">JSON Viewer</h2>
      <div v-if="hasData" class="flex items-center gap-2">
        <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            class="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-300"
            title="Expandir todo"
            @click="expandAll"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
          <button
            class="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-300"
            title="Colapsar todo"
            @click="collapseAll"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <button
            class="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            title="Resetear vista"
            @click="resetView"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        <button
          class="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5"
          @click="openModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          3D
        </button>
      </div>
    </div>

    <div class="flex-1 overflow-auto bg-white rounded-lg border border-gray-200 shadow-inner">
      <div v-if="hasError" class="p-4 text-red-600">
        <div class="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="font-semibold">Error de sintaxis JSON</p>
            <p class="text-sm mt-1 text-red-500">{{ errorMessage }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="isEmpty" class="text-gray-400 text-center py-12 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p class="font-medium">Sin datos JSON</p>
        <p class="text-sm mt-1">Ingresa JSON valido en el panel izquierdo</p>
      </div>

      <div v-else-if="hasData" class="p-4">
        <JsonNode
          :key="viewerKey"
          :data="parsedData"
          name="root"
          :isRoot="true"
          :depth="0"
          :initialExpandDepth="initialExpandDepth"
        />
      </div>
    </div>

    <JsonTreeModal
      :isOpen="isModalOpen"
      :jsonData="parsedData"
      @close="closeModal"
    />
  </div>
</template>
