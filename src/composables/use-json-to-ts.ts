import { computed, reactive, ref } from 'vue'
import { useJsonValidator } from './use-json-validator'
import { inferSchema } from '../utils/ts-schema-infer'
import { renderTypeScript } from '../utils/ts-schema-render'
import { exampleJson } from '../utils/json-to-ts-examples'
import { DEFAULT_OPTIONS } from '../types/json-to-ts'
import type { JsonToTsOptions } from '../types/json-to-ts'
import type { JsonValue } from '../types/json'

export function useJsonToTs() {
  const { jsonText, isValid, errorMessage, parsedData, clearJson } = useJsonValidator()
  const options = reactive<JsonToTsOptions>({ ...DEFAULT_OPTIONS })
  const hasCopied = ref(false)

  const output = computed(() => {
    // isValid is false for empty/whitespace or malformed JSON, so an invalid
    // state (including empty input) always yields an empty output panel.
    if (!isValid.value) return ''
    return renderTypeScript(inferSchema(parsedData.value as JsonValue, options), options)
  })

  const hasOutput = computed(() => output.value.length > 0)

  function loadExample(): void {
    jsonText.value = exampleJson
  }

  async function copyOutput(): Promise<void> {
    if (!output.value) return
    await navigator.clipboard.writeText(output.value)
    hasCopied.value = true
    setTimeout(() => { hasCopied.value = false }, 2000)
  }

  function clearAll(): void {
    clearJson()
    hasCopied.value = false
  }

  return {
    jsonText,
    options,
    output,
    isValid,
    errorMessage,
    hasOutput,
    hasCopied,
    exampleJson,
    loadExample,
    copyOutput,
    clearAll,
  }
}
