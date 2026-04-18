<script setup lang="ts">
import { watch, computed, ref, onMounted, onUnmounted } from 'vue'
import { useJsonValidator } from '../composables/use-json-validator'
import { useJsonHighlighter } from '../composables/use-json-highlighter'
import type { Theme } from '../composables/use-theme'

interface Props {
  modelValue: string
  theme: Theme
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const isDark = computed(() => props.theme.name === 'dark' || props.theme.name === 'midnight')

const {
  jsonText,
  errorMessage,
  isValid,
  hasContent,
  formatJson,
  compactJson,
  clearJson,
  setJsonText
} = useJsonValidator(props.modelValue)

const { highlightedHtml } = useJsonHighlighter(
  () => jsonText.value,
  () => props.theme
)

const lineNumbersRef = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)
const preRef = ref<HTMLPreElement | null>(null)
const isFocused = ref(false)

const lineNumbers = computed(() => {
  const lines = jsonText.value.split('\n')
  return Array.from({ length: lines.length }, (_, i) => i + 1)
})

watch(jsonText, (newValue) => {
  emit('update:modelValue', newValue)
})

function handleScroll() {
  if (lineNumbersRef.value && textareaRef.value) {
    lineNumbersRef.value.scrollTop = textareaRef.value.scrollTop
  }
  if (preRef.value && textareaRef.value) {
    preRef.value.scrollTop = textareaRef.value.scrollTop
    preRef.value.scrollLeft = textareaRef.value.scrollLeft
  }
}

function handlePaste() {
  setTimeout(() => {
    try {
      if (jsonText.value.trim()) {
        const parsed = JSON.parse(jsonText.value)
        jsonText.value = JSON.stringify(parsed, null, 2)
      }
    } catch {
      // Keep the pasted text as is if it's not valid JSON
    }
  }, 0)
}

function loadSampleData() {
  const sampleData = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    },
    hobbies: ["reading", "coding", "gaming"],
    isActive: true
  }
  setJsonText(JSON.stringify(sampleData, null, 2))
}

async function copyToClipboard() {
  if (jsonText.value) {
    await navigator.clipboard.writeText(jsonText.value)
  }
}

const isFullscreen = ref(false)

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isFullscreen.value) isFullscreen.value = false
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <Teleport to="body" :disabled="!isFullscreen">
    <div :class="isFullscreen ? 'fixed inset-0 z-50 flex flex-col p-4 md:p-6' : 'flex flex-col h-full'">
      <!-- Backdrop (fullscreen only) -->
      <div
        v-if="isFullscreen"
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="isFullscreen = false"
      />
      <!-- Content card -->
      <div
        :class="isFullscreen
          ? ['relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden', theme.colors.bgCard, theme.colors.shadow]
          : 'flex flex-col h-full'"
      >
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
          :class="isDark ? 'bg-gradient-to-br from-primary-400 to-primary-500' : 'bg-gradient-to-br from-primary-500 to-primary-600'"
        >
          <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <h2
          class="text-lg font-semibold transition-colors duration-300"
          :class="theme.colors.textPrimary"
        >Entrada</h2>
      </div>
      <div class="flex items-center gap-1.5">
        <button
          @click="loadSampleData"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
          :class="isDark
            ? 'text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500'
            : 'text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300'"
          title="Cargar datos de ejemplo"
          aria-label="Cargar datos de ejemplo"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span class="hidden sm:inline">Ejemplo</span>
        </button>
        <button
          v-if="hasContent"
          @click="copyToClipboard"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
          :class="isDark
            ? 'text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500'
            : 'text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300'"
          title="Copiar al portapapeles"
          aria-label="Copiar JSON al portapapeles"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button
          @click="formatJson"
          :disabled="!hasContent"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          :class="[
            theme.colors.accent,
            theme.colors.accentHover,
            'focus:ring-primary-500'
          ]"
          title="Formatear JSON"
          aria-label="Formatear JSON"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <span class="hidden sm:inline">Formatear</span>
        </button>
        <button
          @click="compactJson"
          :disabled="!hasContent || !isValid"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          :class="isDark
            ? 'text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500'
            : 'text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300'"
          title="Compactar JSON"
          aria-label="Compactar JSON"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
          </svg>
          <span class="hidden sm:inline">Compacto</span>
        </button>
        <button
          @click="clearJson"
          :disabled="!hasContent"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          :class="isDark
            ? 'text-red-400 bg-red-900/30 hover:bg-red-900/50 focus:ring-red-500'
            : 'text-red-600 bg-red-50 hover:bg-red-100 focus:ring-red-300'"
          title="Limpiar contenido"
          aria-label="Limpiar contenido"
        >
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        <button
          @click="toggleFullscreen"
          class="inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
          :class="isDark
            ? 'text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500'
            : 'text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300'"
          :title="isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'"
          :aria-label="isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'"
        >
          <svg v-if="!isFullscreen" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <svg v-else class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Editor Container -->
    <div
      class="flex-1 flex rounded-xl overflow-hidden transition-all duration-200 ring-1"
      :class="[
        errorMessage
          ? isDark ? 'ring-red-500/50 bg-red-900/20' : 'ring-red-300 bg-red-50/50'
          : isFocused
            ? isDark ? 'ring-primary-500 ring-2 bg-slate-800' : 'ring-primary-300 ring-2 bg-white'
            : isDark ? 'ring-slate-600 bg-slate-800/50' : 'ring-gray-200 bg-surface-secondary',
      ]"
    >
      <!-- Line Numbers -->
      <div
        ref="lineNumbersRef"
        class="flex flex-col py-4 px-3 text-right select-none overflow-hidden border-r transition-colors"
        :class="[
          errorMessage
            ? isDark ? 'bg-red-900/30 border-red-800 text-red-400' : 'bg-red-100/50 border-red-200 text-red-400'
            : isDark ? 'bg-slate-900/50 border-slate-700 text-slate-500' : 'bg-surface-tertiary border-gray-100 text-gray-400'
        ]"
        aria-hidden="true"
      >
        <div
          v-for="lineNum in lineNumbers"
          :key="lineNum"
          class="font-mono text-xs leading-5 tabular-nums"
        >
          {{ lineNum }}
        </div>
      </div>

      <!-- Syntax highlight layer + transparent textarea overlay -->
      <div class="relative flex-1 overflow-hidden">
        <!-- Highlighted pre layer (pointer-events:none, visually underneath) -->
        <pre
          ref="preRef"
          class="absolute inset-0 m-0 p-4 font-mono text-sm leading-5 whitespace-pre-wrap break-words pointer-events-none overflow-hidden select-none"
          :class="isDark ? 'text-slate-200' : 'text-gray-800'"
          aria-hidden="true"
          v-html="highlightedHtml || ''"
        ></pre>

        <!-- Transparent textarea — captures input, shows only the caret -->
        <textarea
          ref="textareaRef"
          v-model="jsonText"
          @paste="handlePaste"
          @scroll="handleScroll"
          @focus="isFocused = true"
          @blur="isFocused = false"
          placeholder="Pega o escribe tu JSON aquí..."
          class="absolute inset-0 w-full h-full p-4 font-mono text-sm leading-5 focus:outline-none resize-none bg-transparent whitespace-pre-wrap break-words"
          :class="isDark ? 'placeholder:text-slate-500' : 'placeholder:text-gray-400'"
          :style="{ '-webkit-text-fill-color': 'transparent', color: 'transparent', 'caret-color': isDark ? '#e2e8f0' : '#374151' }"
          aria-label="Editor de JSON"
          spellcheck="false"
        ></textarea>
      </div>
    </div>

    <!-- Status Messages -->
    <div class="mt-3 min-h-[2rem]">
      <div
        v-if="errorMessage"
        class="flex items-start gap-2 p-3 border rounded-lg animate-fade-in"
        :class="isDark ? 'bg-red-900/30 border-red-800' : 'bg-red-50 border-red-200'"
        role="alert"
      >
        <svg
          class="w-4 h-4 flex-shrink-0 mt-0.5"
          :class="isDark ? 'text-red-400' : 'text-red-500'"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div class="flex-1 min-w-0">
          <p
            class="text-sm font-medium"
            :class="isDark ? 'text-red-300' : 'text-red-800'"
          >Error de sintaxis</p>
          <p
            class="text-xs mt-0.5 truncate"
            :class="isDark ? 'text-red-400' : 'text-red-600'"
          >{{ errorMessage }}</p>
        </div>
      </div>
      <div
        v-else-if="hasContent && isValid"
        class="flex items-center gap-2 p-3 border rounded-lg animate-fade-in"
        :class="isDark ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-200'"
        role="status"
      >
        <svg
          class="w-4 h-4"
          :class="isDark ? 'text-emerald-400' : 'text-emerald-500'"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p
          class="text-sm font-medium"
          :class="isDark ? 'text-emerald-300' : 'text-emerald-700'"
        >JSON válido</p>
        <span
          class="ml-auto text-xs tabular-nums"
          :class="isDark ? 'text-emerald-400' : 'text-emerald-600'"
        >{{ lineNumbers.length }} líneas</span>
      </div>
      </div>
    </div>
    </div>
  </Teleport>
</template>
