<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import DiffOutputPanel from '../components/DiffOutputPanel.vue'
import { useTheme } from '../composables/use-theme'
import { useTextDiff } from '../composables/use-text-diff'

defineEmits<{ (e: 'back'): void }>()

const { currentTheme } = useTheme()

const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
  originalText,
  modifiedText,
  stats,
  hasResult,
  diffIndices,
  currentDiffStep,
  currentPairIndex,
  leftLines,
  rightLines,
  compare,
  goToNext,
  goToPrev,
} = useTextDiff()

// Scroll sync
const leftPanel = ref<InstanceType<typeof DiffOutputPanel>>()
const rightPanel = ref<InstanceType<typeof DiffOutputPanel>>()
let isSyncing = false

function onLeftScroll() {
  if (isSyncing) return
  isSyncing = true
  const el = rightPanel.value?.scrollEl
  if (el && leftPanel.value?.scrollEl) el.scrollTop = leftPanel.value.scrollEl.scrollTop
  isSyncing = false
}

function onRightScroll() {
  if (isSyncing) return
  isSyncing = true
  const el = leftPanel.value?.scrollEl
  if (el && rightPanel.value?.scrollEl) el.scrollTop = rightPanel.value.scrollEl.scrollTop
  isSyncing = false
}

onMounted(() => {
  leftPanel.value?.scrollEl?.addEventListener('scroll', onLeftScroll)
  rightPanel.value?.scrollEl?.addEventListener('scroll', onRightScroll)
})

onUnmounted(() => {
  leftPanel.value?.scrollEl?.removeEventListener('scroll', onLeftScroll)
  rightPanel.value?.scrollEl?.removeEventListener('scroll', onRightScroll)
})

// Auto-scroll to current diff on navigation
watch(currentPairIndex, (pairIdx) => {
  if (pairIdx < 0) return
  const leftEl = leftPanel.value?.scrollEl
  const rightEl = rightPanel.value?.scrollEl
  if (!leftEl || !rightEl) return

  // Each line is ~28px tall; center the target line in the panel
  const lineHeight = 28
  const target = Math.max(0, pairIdx * lineHeight - leftEl.clientHeight / 2 + lineHeight / 2)
  leftEl.scrollTop = target
  rightEl.scrollTop = target
})
</script>

<template>
  <div class="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col">
    <ToolHeader
      tool-name="Text Compare"
      tool-description="Compare two texts with line and character-level diff"
      @back="$emit('back')"
    />

    <div class="flex-1 flex flex-col gap-3 overflow-hidden">
      <!-- Input textareas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3" style="flex-shrink: 0;">
        <div class="flex flex-col gap-1">
          <label
            class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >Original</label>
          <textarea
            v-model="originalText"
            placeholder="Paste original text here..."
            rows="6"
            class="w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50"
            :class="[
              currentTheme.colors.bgCard,
              currentTheme.colors.textPrimary,
              isDarkTheme
                ? 'ring-1 ring-white/10 placeholder:text-gray-600'
                : 'border border-white/50 placeholder:text-gray-300'
            ]"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label
            class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >Modified</label>
          <textarea
            v-model="modifiedText"
            placeholder="Paste modified text here..."
            rows="6"
            class="w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50"
            :class="[
              currentTheme.colors.bgCard,
              currentTheme.colors.textPrimary,
              isDarkTheme
                ? 'ring-1 ring-white/10 placeholder:text-gray-600'
                : 'border border-white/50 placeholder:text-gray-300'
            ]"
          />
        </div>
      </div>

      <!-- Toolbar: compare button + stats + navigation -->
      <div class="flex items-center gap-3 flex-wrap flex-shrink-0">
        <!-- Compare button -->
        <button
          class="px-4 py-1.5 rounded-lg text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          :class="isDarkTheme
            ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500'
            : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600'"
          @click="compare"
        >
          Compare
        </button>

        <!-- Stats (visible after first compare) -->
        <template v-if="hasResult">
          <div class="flex items-center gap-2 text-xs font-medium">
            <span
              v-if="stats.added > 0"
              class="px-2 py-0.5 rounded-full transition-colors duration-300"
              :class="isDarkTheme ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700'"
            >+{{ stats.added }} added</span>
            <span
              v-if="stats.removed > 0"
              class="px-2 py-0.5 rounded-full transition-colors duration-300"
              :class="isDarkTheme ? 'bg-red-900/50 text-red-400' : 'bg-red-100 text-red-700'"
            >-{{ stats.removed }} removed</span>
            <span
              v-if="stats.modified > 0"
              class="px-2 py-0.5 rounded-full transition-colors duration-300"
              :class="isDarkTheme ? 'bg-amber-900/50 text-amber-400' : 'bg-amber-100 text-amber-700'"
            >~{{ stats.modified }} modified</span>
            <span
              v-if="stats.equal > 0"
              class="px-2 py-0.5 rounded-full transition-colors duration-300"
              :class="isDarkTheme ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'"
            >={{ stats.equal }} equal</span>
          </div>

          <!-- Navigation (only if there are diffs to navigate) -->
          <div v-if="diffIndices.length > 0" class="flex items-center gap-1 ml-auto">
            <button
              class="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
              :class="isDarkTheme
                ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
                : 'text-gray-500 hover:text-gray-800 hover:bg-black/5'"
              aria-label="Previous diff"
              @click="goToPrev"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span
              class="text-xs font-mono px-2 transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >{{ currentDiffStep + 1 }} / {{ diffIndices.length }}</span>
            <button
              class="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
              :class="isDarkTheme
                ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
                : 'text-gray-500 hover:text-gray-800 hover:bg-black/5'"
              aria-label="Next diff"
              @click="goToNext"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </template>
      </div>

      <!-- Output panels -->
      <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 overflow-hidden">
        <DiffOutputPanel
          ref="leftPanel"
          :lines="leftLines"
          :current-pair-index="currentPairIndex"
          side="left"
        />
        <DiffOutputPanel
          ref="rightPanel"
          :lines="rightLines"
          :current-pair-index="currentPairIndex"
          side="right"
        />
      </div>
    </div>
  </div>
</template>
