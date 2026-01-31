<script setup lang="ts">
import { watch, computed, ref } from 'vue'
import { useJsonValidator } from '../composables/use-json-validator'

interface Props {
  modelValue: string
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const {
  jsonText,
  errorMessage,
  isValid,
  hasContent,
  formatJson,
  clearJson,
  setJsonText
} = useJsonValidator(props.modelValue)

const lineNumbersRef = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

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
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-gray-800">JSON Input</h2>
      <div class="flex gap-2">
        <button
          @click="loadSampleData"
          class="px-4 py-2 text-sm font-medium bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Load Sample
        </button>
        <button
          @click="formatJson"
          class="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Format
        </button>
        <button
          @click="clearJson"
          class="px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear
        </button>
      </div>
    </div>

    <div class="flex-1 flex border-2 rounded-lg overflow-hidden" :class="errorMessage ? 'border-red-500 bg-red-50' : 'border-gray-300'">
      <div
        ref="lineNumbersRef"
        class="flex flex-col bg-gray-100 text-gray-500 font-mono text-sm text-right select-none overflow-hidden px-2 py-4"
      >
        <div v-for="lineNum in lineNumbers" :key="lineNum" class="leading-5">
          {{ lineNum }}
        </div>
      </div>
      <textarea
        ref="textareaRef"
        v-model="jsonText"
        @paste="handlePaste"
        @scroll="handleScroll"
        placeholder="Paste or type your JSON here..."
        class="flex-1 p-4 font-mono text-sm focus:outline-none resize-none bg-transparent"
      ></textarea>
    </div>

    <div v-if="errorMessage" class="mt-2 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
      <strong>Error:</strong> {{ errorMessage }}
    </div>
    <div v-else-if="hasContent && isValid" class="mt-2 p-2 bg-green-100 border border-green-300 rounded text-green-700 text-sm">
      Valid JSON
    </div>
  </div>
</template>
