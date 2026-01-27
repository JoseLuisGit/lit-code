<script setup lang="ts">
import { watch } from 'vue'
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

watch(jsonText, (newValue) => {
  emit('update:modelValue', newValue)
})

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
          class="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Load Sample
        </button>
        <button
          @click="formatJson"
          class="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Format
        </button>
        <button
          @click="clearJson"
          class="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Clear
        </button>
      </div>
    </div>

    <textarea
      v-model="jsonText"
      @paste="handlePaste"
      placeholder="Paste or type your JSON here..."
      class="flex-1 w-full p-4 font-mono text-sm border-2 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
      :class="errorMessage ? 'border-red-500 bg-red-50' : 'border-gray-300'"
    ></textarea>

    <div v-if="errorMessage" class="mt-2 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
      <strong>Error:</strong> {{ errorMessage }}
    </div>
    <div v-else-if="hasContent && isValid" class="mt-2 p-2 bg-green-100 border border-green-300 rounded text-green-700 text-sm">
      Valid JSON
    </div>
  </div>
</template>
