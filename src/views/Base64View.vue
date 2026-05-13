<script setup lang="ts">
import { ref, computed } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'
import { useBase64 } from '../composables/use-base64'
import { formatFileSize } from '../utils/base64'

const { currentTheme } = useTheme()
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
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
  process,
  copyOutput,
  downloadOutput,
  clearAll,
} = useBase64()

// File dropzone
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement>()

function onDrop(e: DragEvent): void {
  isDragging.value = false
  const file = e.dataTransfer?.files[0]
  if (file) selectedFile.value = file
}

function onFileChange(e: Event): void {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) selectedFile.value = file
}

function clearFile(): void {
  selectedFile.value = null
  if (fileInput.value) fileInput.value.value = ''
}

const cardClass = computed(() => [
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.shadow,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-white/50',
])

const tabActiveClass = computed(() =>
  isDarkTheme.value
    ? 'bg-white/15 text-white'
    : 'bg-white text-gray-900 shadow-sm'
)

const tabInactiveClass = computed(() =>
  isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200'
    : 'text-gray-500 hover:text-gray-800'
)

const inputToggleActive = computed(() =>
  isDarkTheme.value
    ? 'bg-white/15 text-white'
    : 'bg-primary-600 text-white'
)

const inputToggleInactive = computed(() =>
  isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
    : 'text-gray-500 hover:text-gray-700 hover:bg-black/5'
)

const primaryBtn = computed(() =>
  isDarkTheme.value
    ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500'
    : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600'
)

const ghostBtn = computed(() =>
  isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
    : 'text-gray-500 hover:text-gray-700 hover:bg-black/5'
)

const textareaClass = computed(() => [
  'w-full font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50 rounded-xl p-3',
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.textPrimary,
  isDarkTheme.value
    ? 'ring-1 ring-white/10 placeholder:text-gray-600'
    : 'border border-white/50 placeholder:text-gray-300',
])
</script>

<template>
  <div class="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col">
    <ToolHeader
      tool-name="Base64"
      tool-description="Encode and decode text or files to/from Base64"
    />

    <div class="flex-1 flex flex-col gap-4 overflow-hidden">
      <!-- Mode tabs -->
      <div class="flex justify-center flex-shrink-0">
        <div
          class="inline-flex rounded-xl p-1 gap-1 transition-colors duration-300"
          :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'"
        >
          <button
            class="px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
            :class="mode === 'encode' ? tabActiveClass : tabInactiveClass"
            @click="mode = 'encode'"
          >Encode</button>
          <button
            class="px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
            :class="mode === 'decode' ? tabActiveClass : tabInactiveClass"
            @click="mode = 'decode'"
          >Decode</button>
        </div>
      </div>

      <!-- Two-panel layout -->
      <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden">

        <!-- LEFT: Input panel -->
        <div
          class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 overflow-hidden transition-all duration-300"
          :class="cardClass"
        >
          <!-- Panel header: label + input type toggle -->
          <div class="flex items-center justify-between flex-shrink-0">
            <span
              class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >Input</span>
            <div
              class="inline-flex rounded-lg p-0.5 gap-0.5 transition-colors duration-300"
              :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'"
            >
              <button
                class="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
                :class="inputType === 'text' ? inputToggleActive : inputToggleInactive"
                @click="inputType = 'text'"
              >Text</button>
              <button
                class="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
                :class="inputType === 'file' ? inputToggleActive : inputToggleInactive"
                @click="inputType = 'file'"
              >File</button>
            </div>
          </div>

          <!-- Text input -->
          <template v-if="inputType === 'text'">
            <textarea
              v-model="inputText"
              :placeholder="mode === 'encode' ? 'Paste text to encode...' : 'Paste Base64 to decode...'"
              class="flex-1 resize-none"
              :class="textareaClass"
            />

            <!-- LF / CRLF toggle (encode + text only) -->
            <div v-if="showLineEnding" class="flex items-center gap-2 flex-shrink-0">
              <span
                class="text-xs transition-colors duration-300"
                :class="currentTheme.colors.textMuted"
              >Line endings:</span>
              <div
                class="inline-flex rounded-lg p-0.5 gap-0.5"
                :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'"
              >
                <button
                  class="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium transition-all duration-200"
                  :class="lineEnding === 'LF' ? inputToggleActive : inputToggleInactive"
                  @click="lineEnding = 'LF'"
                >LF</button>
                <button
                  class="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium transition-all duration-200"
                  :class="lineEnding === 'CRLF' ? inputToggleActive : inputToggleInactive"
                  @click="lineEnding = 'CRLF'"
                >CRLF</button>
              </div>
            </div>
          </template>

          <!-- File input -->
          <template v-else>
            <!-- Dropzone -->
            <div
              v-if="!selectedFile"
              class="flex-1 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200"
              :class="[
                isDragging
                  ? (isDarkTheme ? 'border-primary-400 bg-primary-900/20' : 'border-primary-500 bg-primary-50')
                  : (isDarkTheme ? 'border-white/20 hover:border-white/40' : 'border-gray-200 hover:border-gray-300'),
              ]"
              @dragover.prevent="isDragging = true"
              @dragleave="isDragging = false"
              @drop.prevent="onDrop"
              @click="fileInput?.click()"
            >
              <svg
                class="w-10 h-10 transition-colors duration-300"
                :class="isDarkTheme ? 'text-gray-600' : 'text-gray-300'"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div class="text-center">
                <p
                  class="text-sm font-medium transition-colors duration-300"
                  :class="currentTheme.colors.textSecondary"
                >Drop file here or <span class="text-primary-500">browse</span></p>
                <p
                  v-if="mode === 'decode'"
                  class="text-xs mt-1 transition-colors duration-300"
                  :class="currentTheme.colors.textMuted"
                >Max 50 MB</p>
              </div>
              <input ref="fileInput" type="file" class="hidden" @change="onFileChange" />
            </div>

            <!-- File selected -->
            <div
              v-else
              class="flex-1 rounded-xl flex flex-col items-center justify-center gap-3 p-6 transition-colors duration-300"
              :class="isDarkTheme ? 'bg-white/5' : 'bg-gray-50'"
            >
              <svg
                class="w-12 h-12 transition-colors duration-300"
                :class="isDarkTheme ? 'text-primary-400' : 'text-primary-500'"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div class="text-center">
                <p
                  class="text-sm font-medium truncate max-w-[200px] transition-colors duration-300"
                  :class="currentTheme.colors.textPrimary"
                >{{ selectedFile.name }}</p>
                <p
                  class="text-xs mt-0.5 transition-colors duration-300"
                  :class="currentTheme.colors.textMuted"
                >{{ formatFileSize(selectedFile.size) }}</p>
              </div>
              <button
                class="text-xs px-3 py-1 rounded-lg transition-all duration-200"
                :class="ghostBtn"
                @click="clearFile"
              >Remove file</button>
            </div>
          </template>

          <!-- Process button + error -->
          <div class="flex flex-col gap-2 flex-shrink-0">
            <button
              class="w-full py-2 rounded-xl text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              :class="primaryBtn"
              :disabled="!canProcess || isProcessing"
              @click="process"
            >
              <span v-if="isProcessing">Processing…</span>
              <span v-else>{{ mode === 'encode' ? 'Encode' : 'Decode' }}</span>
            </button>

            <p
              v-if="error"
              class="text-xs px-3 py-2 rounded-lg transition-colors duration-300"
              :class="isDarkTheme ? 'bg-red-900/40 text-red-300' : 'bg-red-50 text-red-700 border border-red-200'"
            >{{ error }}</p>
          </div>
        </div>

        <!-- RIGHT: Output panel -->
        <div
          class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 overflow-hidden transition-all duration-300"
          :class="cardClass"
        >
          <!-- Panel header: label + actions -->
          <div class="flex items-center justify-between flex-shrink-0">
            <span
              class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >Output</span>
            <div class="flex items-center gap-1">
              <!-- Copy -->
              <button
                v-if="hasOutput"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                :class="ghostBtn"
                @click="copyOutput"
              >
                <svg v-if="!hasCopied" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else class="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ hasCopied ? 'Copied!' : 'Copy' }}
              </button>

              <!-- Download -->
              <button
                v-if="showDownload"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                :class="ghostBtn"
                @click="downloadOutput"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download .txt
              </button>

              <!-- Clear -->
              <button
                v-if="hasOutput"
                class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                :class="ghostBtn"
                @click="clearAll"
              >Clear</button>
            </div>
          </div>

          <!-- Empty state -->
          <div
            v-if="!hasOutput"
            class="flex-1 flex flex-col items-center justify-center gap-2 transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >
            <svg class="w-10 h-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="text-xs">Result will appear here</p>
          </div>

          <!-- Output textarea -->
          <textarea
            v-if="hasOutput"
            :value="outputText"
            readonly
            class="flex-1 resize-none"
            :class="textareaClass"
          />

          <!-- Char count -->
          <div v-if="hasOutput" class="flex-shrink-0 flex justify-end">
            <span
              class="text-[11px] transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >{{ outputText.length.toLocaleString() }} chars</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
