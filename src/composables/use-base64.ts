import { ref, computed, watch } from 'vue'
import {
  encodeText,
  encodeFile,
  decodeBase64,
  decodeFileContent,
  downloadAsFile,
  formatFileSize,
  MAX_DECODE_FILE_BYTES,
} from '../utils/base64'
import type { LineEnding } from '../utils/base64'

export type { LineEnding }
export type Mode = 'encode' | 'decode'
export type InputType = 'text' | 'file'

export function useBase64() {
  const mode = ref<Mode>('encode')
  const inputType = ref<InputType>('text')
  const lineEnding = ref<LineEnding>('LF')

  const inputText = ref('')
  const outputText = ref('')
  const selectedFile = ref<File | null>(null)

  const isProcessing = ref(false)
  const error = ref<string | null>(null)
  const hasCopied = ref(false)

  const hasOutput = computed(() => outputText.value.length > 0)

  const canProcess = computed(() =>
    inputType.value === 'text'
      ? inputText.value.trim().length > 0
      : selectedFile.value !== null
  )

  const showLineEnding = computed(
    () => mode.value === 'encode' && inputType.value === 'text'
  )

  const showDownload = computed(
    () => hasOutput.value && (inputType.value === 'file' || mode.value === 'decode')
  )

  const outputFilename = computed(() => {
    if (mode.value === 'encode') {
      return selectedFile.value ? `${selectedFile.value.name}.b64.txt` : 'encoded.txt'
    }
    return selectedFile.value
      ? selectedFile.value.name.replace(/\.b64\.txt$|\.txt$/, '') || 'decoded.txt'
      : 'decoded.txt'
  })

  async function process(): Promise<void> {
    error.value = null
    outputText.value = ''
    isProcessing.value = true

    try {
      if (mode.value === 'encode') {
        if (inputType.value === 'text') {
          outputText.value = encodeText(inputText.value, lineEnding.value)
        } else if (selectedFile.value) {
          outputText.value = await encodeFile(selectedFile.value)
        }
      } else {
        if (inputType.value === 'file' && selectedFile.value) {
          if (selectedFile.value.size > MAX_DECODE_FILE_BYTES) {
            error.value = `File too large (max 50 MB). Selected: ${formatFileSize(selectedFile.value.size)}`
            return
          }
        }

        const raw =
          inputType.value === 'text'
            ? inputText.value
            : await decodeFileContent(selectedFile.value!)

        outputText.value = decodeBase64(raw)
      }
    } catch {
      error.value =
        mode.value === 'decode'
          ? 'Invalid Base64 input — check the content and try again.'
          : 'Failed to encode the input.'
    } finally {
      isProcessing.value = false
    }
  }

  async function copyOutput(): Promise<void> {
    if (!outputText.value) return
    await navigator.clipboard.writeText(outputText.value)
    hasCopied.value = true
    setTimeout(() => { hasCopied.value = false }, 2000)
  }

  function downloadOutput(): void {
    if (!outputText.value) return
    downloadAsFile(outputText.value, outputFilename.value)
  }

  function clearAll(): void {
    inputText.value = ''
    outputText.value = ''
    selectedFile.value = null
    error.value = null
    hasCopied.value = false
  }

  watch([mode, inputType], clearAll)

  return {
    mode,
    inputType,
    lineEnding,
    inputText,
    outputText,
    selectedFile,
    isProcessing,
    error,
    hasCopied,
    hasOutput,
    canProcess,
    showLineEnding,
    showDownload,
    outputFilename,
    process,
    copyOutput,
    downloadOutput,
    clearAll,
  }
}
