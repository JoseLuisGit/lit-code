import { ref, computed, watch } from 'vue'
import type { JsonValue } from '../types/json'

export function useJsonValidator(initialValue = '') {
  const jsonText = ref(initialValue)
  const errorMessage = ref<string | null>(null)
  const parsedData = ref<JsonValue | null>(null)

  const isValid = computed(() => !errorMessage.value && jsonText.value.trim() !== '')
  const hasError = computed(() => errorMessage.value !== null)
  const hasContent = computed(() => jsonText.value.trim() !== '')

  function validateAndParse() {
    try {
      if (!hasContent.value) {
        errorMessage.value = null
        parsedData.value = null
        return
      }

      parsedData.value = JSON.parse(jsonText.value) as JsonValue
      errorMessage.value = null
    } catch (error) {
      errorMessage.value = (error as Error).message
      parsedData.value = null
    }
  }

  function formatJson() {
    try {
      if (!hasContent.value) return

      const parsed = JSON.parse(jsonText.value) as JsonValue
      jsonText.value = JSON.stringify(parsed, null, 2)
      errorMessage.value = null
      parsedData.value = parsed
    } catch (error) {
      errorMessage.value = (error as Error).message
    }
  }

  function clearJson() {
    jsonText.value = ''
    errorMessage.value = null
    parsedData.value = null
  }

  function setJsonText(value: string) {
    jsonText.value = value
  }

  watch(jsonText, validateAndParse, { immediate: true })

  return {
    jsonText,
    errorMessage,
    parsedData,
    isValid,
    hasError,
    hasContent,
    formatJson,
    clearJson,
    setJsonText
  }
}
