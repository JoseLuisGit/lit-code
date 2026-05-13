<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch, ref } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'
import { useImageEditor } from '../composables/use-image-editor'
import { useJsonHighlighter } from '../composables/use-json-highlighter'

const { currentTheme } = useTheme()
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
  displayCanvasEl, selectedFile, isLoading, error,
  imageSize, isCropMode, cropBox, pendingCropBox, canvasCursor, customAngle,
  exportFormat, exportQuality,
  actionPipeline, pipelineSummaryJson, isActionPanelOpen,
  loadFile, render, applyFlip, applyRotation,
  confirmCrop, cancelConfirmedCrop,
  toggleCropMode, resetCrop, resetAll, download,
  onCropMouseDown, onCropMouseMove, onCropMouseUp,
  updateCropBoxFromInputs,
} = useImageEditor()

const isDragOver = ref(false)
const canvasContainer = ref<HTMLDivElement | null>(null)

const { highlightedHtml: highlightedPipelineJson } = useJsonHighlighter(
  () => pipelineSummaryJson.value,
  () => currentTheme.value,
)

const cardClass = computed(() => [
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.shadow,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-white/50',
])

const inputClass = computed(() => [
  'rounded-lg px-2 py-1 text-sm font-mono outline-none transition-all duration-200',
  'focus:ring-2 focus:ring-primary-500/50 w-full',
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.textPrimary,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-gray-200',
])

const btnBase = 'inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200'
const btnPrimary = computed(() => `${btnBase} bg-primary-500 hover:bg-primary-600 text-white`)
const btnGhost = computed(() =>
  `${btnBase} ${isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
    : 'text-gray-500 hover:text-gray-700 hover:bg-black/5'
  }`
)
const btnDanger = computed(() =>
  `${btnBase} ${isDarkTheme.value
    ? 'text-red-400 hover:text-red-200 hover:bg-red-900/20'
    : 'text-red-500 hover:text-red-700 hover:bg-red-50'
  }`
)
const sectionLabel = computed(() =>
  `text-xs font-semibold uppercase tracking-wide mb-2 transition-colors duration-300 ${currentTheme.value.colors.textMuted}`
)
const dividerClass = computed(() =>
  `my-3 border-t ${isDarkTheme.value ? 'border-white/10' : 'border-gray-200'}`
)

function onFileInput(e: Event): void {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) loadFile(file)
}

function onDrop(e: DragEvent): void {
  isDragOver.value = false
  const file = e.dataTransfer?.files[0]
  if (file) loadFile(file)
}

function onCropXInput(val: string): void {
  if (!cropBox.value) return
  updateCropBoxFromInputs({ ...cropBox.value, x: Number(val) })
}
function onCropYInput(val: string): void {
  if (!cropBox.value) return
  updateCropBoxFromInputs({ ...cropBox.value, y: Number(val) })
}
function onCropEndXInput(val: string): void {
  if (!cropBox.value) return
  updateCropBoxFromInputs({ ...cropBox.value, endX: Number(val) })
}
function onCropEndYInput(val: string): void {
  if (!cropBox.value) return
  updateCropBoxFromInputs({ ...cropBox.value, endY: Number(val) })
}

let ro: ResizeObserver | null = null

onMounted(() => {
  if (canvasContainer.value) {
    ro = new ResizeObserver(() => {
      if (!displayCanvasEl.value || !canvasContainer.value) return
      displayCanvasEl.value.width = canvasContainer.value.clientWidth
      displayCanvasEl.value.height = canvasContainer.value.clientHeight
      render()
    })
    ro.observe(canvasContainer.value)
  }
})

onUnmounted(() => ro?.disconnect())

watch(imageSize, () => render())
</script>

<template>
  <div class="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col">
    <ToolHeader
      tool-name="Image Editor"
      tool-description="Crop, flip, and rotate images with interactive canvas controls"
    />

    <div class="flex-1 grid lg:grid-cols-[1fr_280px] gap-4 overflow-hidden min-h-0">

      <!-- LEFT: Canvas area -->
      <div
        ref="canvasContainer"
        class="relative rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center min-h-0"
        :class="cardClass"
        @dragover.prevent="isDragOver = true"
        @dragleave="isDragOver = false"
        @drop.prevent="onDrop"
      >
        <!-- Dropzone when no image -->
        <template v-if="!imageSize && !isLoading">
          <label
            class="absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200"
            :class="isDragOver ? 'opacity-100' : 'opacity-70 hover:opacity-100'"
          >
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-dashed transition-colors duration-200"
              :class="isDragOver
                ? 'border-primary-400 bg-primary-500/10'
                : (isDarkTheme ? 'border-white/20' : 'border-gray-300')"
            >
              <svg class="w-8 h-8" :class="currentTheme.colors.textMuted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="text-center">
              <p class="text-sm font-medium" :class="currentTheme.colors.textPrimary">
                Drop image or <span class="text-primary-500 underline">browse</span>
              </p>
              <p class="text-xs mt-1" :class="currentTheme.colors.textMuted">PNG, JPEG, WebP, GIF</p>
            </div>
            <input type="file" accept="image/*" class="sr-only" @change="onFileInput" />
          </label>
        </template>

        <!-- Loading -->
        <div v-else-if="isLoading" class="flex items-center gap-2" :class="currentTheme.colors.textMuted">
          <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <span class="text-sm">Loading…</span>
        </div>

        <!-- Canvas — cursor driven by canvasCursor computed (inline style required for dynamic values) -->
        <canvas
          v-show="imageSize"
          ref="displayCanvasEl"
          class="w-full h-full block select-none"
          :style="{ cursor: isCropMode ? canvasCursor : 'default' }"
          @mousedown="onCropMouseDown"
          @mousemove="onCropMouseMove"
          @mouseup="onCropMouseUp"
          @mouseleave="onCropMouseUp"
        />

        <!-- Image size badge -->
        <div
          v-if="imageSize"
          class="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-mono transition-colors duration-300"
          :class="isDarkTheme ? 'bg-black/40 text-gray-300' : 'bg-white/60 text-gray-600'"
        >
          {{ imageSize.w }} × {{ imageSize.h }}
        </div>

        <!-- Error badge -->
        <div
          v-if="error"
          class="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-sm font-medium bg-red-500/90 text-white"
        >
          {{ error }}
        </div>
      </div>

      <!-- RIGHT: Controls panel -->
      <div
        class="rounded-2xl p-4 flex flex-col gap-0 overflow-y-auto transition-all duration-300"
        :class="cardClass"
      >

        <!-- Load section -->
        <div>
          <p :class="sectionLabel">Load</p>
          <label class="block">
            <span :class="btnGhost" class="w-full cursor-pointer text-center">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ selectedFile ? 'Replace Image' : 'Open Image' }}
            </span>
            <input type="file" accept="image/*" class="sr-only" @change="onFileInput" />
          </label>
          <p
            v-if="selectedFile"
            class="mt-1.5 text-xs truncate"
            :class="currentTheme.colors.textMuted"
          >{{ selectedFile.name }}</p>
        </div>

        <div :class="dividerClass" />

        <!-- Crop section -->
        <div>
          <p :class="sectionLabel">Crop</p>

          <!-- Toggle crop mode -->
          <button
            :class="isCropMode ? btnPrimary : btnGhost"
            class="w-full"
            :disabled="!imageSize"
            @click="toggleCropMode"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            {{ isCropMode ? 'Crop Mode: ON' : 'Crop Mode: OFF' }}
          </button>

          <!-- State 1: crop mode on, no selection drawn yet -->
          <p v-if="isCropMode && !cropBox" class="mt-1.5 text-xs" :class="currentTheme.colors.textMuted">
            Drag on the image to select a crop area
          </p>

          <!-- State 2: crop mode on, selection drawn -->
          <template v-if="isCropMode && cropBox">
            <div class="mt-3 grid grid-cols-2 gap-2">
              <label class="block">
                <span class="text-[10px] font-mono mb-0.5 block" :class="currentTheme.colors.textMuted">X</span>
                <input
                  type="number" min="0"
                  :value="cropBox?.x ?? 0"
                  :class="inputClass"
                  @change="onCropXInput(($event.target as HTMLInputElement).value)"
                />
              </label>
              <label class="block">
                <span class="text-[10px] font-mono mb-0.5 block" :class="currentTheme.colors.textMuted">Y</span>
                <input
                  type="number" min="0"
                  :value="cropBox?.y ?? 0"
                  :class="inputClass"
                  @change="onCropYInput(($event.target as HTMLInputElement).value)"
                />
              </label>
              <label class="block">
                <span class="text-[10px] font-mono mb-0.5 block" :class="currentTheme.colors.textMuted">End X</span>
                <input
                  type="number" min="1"
                  :value="cropBox?.endX ?? (imageSize?.w ?? 0)"
                  :class="inputClass"
                  @change="onCropEndXInput(($event.target as HTMLInputElement).value)"
                />
              </label>
              <label class="block">
                <span class="text-[10px] font-mono mb-0.5 block" :class="currentTheme.colors.textMuted">End Y</span>
                <input
                  type="number" min="1"
                  :value="cropBox?.endY ?? (imageSize?.h ?? 0)"
                  :class="inputClass"
                  @change="onCropEndYInput(($event.target as HTMLInputElement).value)"
                />
              </label>
            </div>
            <div class="mt-2 flex gap-2">
              <button :class="btnPrimary" class="flex-1" @click="confirmCrop">
                Confirm Crop
              </button>
              <button :class="btnGhost" class="flex-1" @click="resetCrop">Reset</button>
            </div>
          </template>

          <!-- State 3: pending crop confirmed, not in crop mode -->
          <div v-if="pendingCropBox && !isCropMode" class="mt-2">
            <div
              class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs mb-2"
              :class="isDarkTheme ? 'bg-indigo-500/15 text-indigo-300' : 'bg-indigo-50 text-indigo-600'"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              Crop pending — applies on download
            </div>
            <button :class="btnGhost" class="w-full text-xs" @click="cancelConfirmedCrop">
              Clear Crop
            </button>
          </div>
        </div>

        <div :class="dividerClass" />

        <!-- Flip section -->
        <div>
          <p :class="sectionLabel">Flip</p>
          <div class="flex gap-2">
            <button :class="btnGhost" class="flex-1" :disabled="!imageSize" @click="applyFlip(true, false)">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Horizontal
            </button>
            <button :class="btnGhost" class="flex-1" :disabled="!imageSize" @click="applyFlip(false, true)">
              <svg class="w-4 h-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Vertical
            </button>
          </div>
        </div>

        <div :class="dividerClass" />

        <!-- Rotate section -->
        <div>
          <p :class="sectionLabel">Rotate</p>
          <div class="flex gap-2 mb-2">
            <button :class="btnGhost" class="flex-1" :disabled="!imageSize" @click="applyRotation(-90)">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              90° CCW
            </button>
            <button :class="btnGhost" class="flex-1" :disabled="!imageSize" @click="applyRotation(90)">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 10H11a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
              </svg>
              90° CW
            </button>
          </div>
          <button :class="btnGhost" class="w-full mb-2" :disabled="!imageSize" @click="applyRotation(180)">
            180°
          </button>

          <!-- Custom angle -->
          <div class="flex gap-2 items-end">
            <div class="flex-1">
              <label class="text-[10px] font-mono mb-0.5 block" :class="currentTheme.colors.textMuted">Custom (°)</label>
              <input
                v-model.number="customAngle"
                type="number"
                :class="inputClass"
                placeholder="45"
              />
            </div>
            <button
              :class="btnGhost"
              :disabled="!imageSize"
              class="mb-px"
              @click="applyRotation(customAngle)"
            >Apply</button>
          </div>
        </div>

        <div :class="dividerClass" />

        <!-- Export section -->
        <div>
          <p :class="sectionLabel">Export</p>

          <!-- Format tabs -->
          <div
            class="inline-flex rounded-lg p-0.5 gap-0.5 mb-3 self-start"
            :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'"
          >
            <button
              v-for="fmt in (['png', 'jpeg'] as const)"
              :key="fmt"
              class="px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 uppercase"
              :class="exportFormat === fmt
                ? (isDarkTheme ? 'bg-white/15 text-white' : 'bg-white text-gray-900 shadow-sm')
                : (isDarkTheme ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800')"
              @click="exportFormat = fmt"
            >{{ fmt }}</button>
          </div>

          <!-- Quality slider (JPEG only) -->
          <div v-if="exportFormat === 'jpeg'" class="mb-3">
            <div class="flex justify-between mb-1">
              <label class="text-[10px] font-mono" :class="currentTheme.colors.textMuted">Quality</label>
              <span class="text-[10px] font-mono" :class="currentTheme.colors.textMuted">{{ exportQuality }}%</span>
            </div>
            <input
              v-model.number="exportQuality"
              type="range" min="10" max="100" step="5"
              class="w-full accent-primary-500"
            />
          </div>

          <button
            :class="btnPrimary"
            class="w-full mb-2"
            :disabled="!imageSize"
            @click="download"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </button>

          <button
            :class="btnDanger"
            class="w-full"
            :disabled="!imageSize"
            @click="resetAll"
          >
            Reset All
          </button>
        </div>

        <div :class="dividerClass" />

        <!-- Action Pipeline JSON panel -->
        <div class="rounded-xl overflow-hidden" :class="isDarkTheme ? 'bg-white/5' : 'bg-black/[0.03]'">
          <button
            class="w-full flex items-center justify-between px-3 py-2 text-xs font-medium"
            :class="currentTheme.colors.textSecondary ?? currentTheme.colors.textMuted"
            @click="isActionPanelOpen = !isActionPanelOpen"
          >
            <span class="flex items-center gap-2">
              <span class="font-mono opacity-50">{ }</span>
              Action Pipeline
              <span
                class="px-1.5 py-0.5 rounded-full font-mono text-[10px]"
                :class="isDarkTheme ? 'bg-white/10 text-gray-400' : 'bg-black/5 text-gray-500'"
              >{{ actionPipeline.length }}</span>
            </span>
            <svg
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="isActionPanelOpen ? 'rotate-180' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            v-show="isActionPanelOpen"
            class="border-t"
            :class="isDarkTheme ? 'border-white/10' : 'border-black/5'"
          >
            <pre
              class="p-3 text-[11px] font-mono overflow-x-auto max-h-52 overflow-y-auto leading-relaxed"
              :class="currentTheme.colors.textMuted"
              v-html="highlightedPipelineJson || '[]'"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
