<script setup lang="ts">
import { computed } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'
import { useJsonToTs } from '../composables/use-json-to-ts'

const { currentTheme } = useTheme()
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
  jsonText, options, output, errorMessage,
  hasOutput, hasCopied, loadExample, copyOutput, clearAll,
} = useJsonToTs()

const cardClass = computed(() => [
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.shadow,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-white/50',
])

const monoBoxClass = 'font-mono text-sm'

const toggles = [
  { key: 'detectEnums', label: 'enums' },
  { key: 'detectFormats', label: 'formats' },
  { key: 'emitComments', label: 'comments' },
] as const
</script>

<template>
  <div class="max-w-[1800px] mx-auto flex flex-col gap-4 pb-8">
    <ToolHeader
      tool-name="JSON to TypeScript"
      tool-description="Generate TypeScript types from JSON, live"
    />

    <!-- Options bar -->
    <div class="rounded-2xl p-4 md:p-5 flex flex-wrap items-center gap-3 transition-all duration-300" :class="cardClass">
      <label class="flex items-center gap-2 text-sm" :class="currentTheme.colors.textSecondary">
        Root name
        <input
          v-model="options.rootName"
          type="text"
          spellcheck="false"
          class="rounded-lg px-2 py-1 font-mono text-sm outline-none w-32 focus:ring-2 focus:ring-primary-500/50"
          :class="[
            currentTheme.colors.bgCard, currentTheme.colors.textPrimary,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
          ]"
        />
      </label>

      <div class="inline-flex rounded-lg p-0.5 gap-0.5" :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'">
        <button
          v-for="style in (['interface', 'type'] as const)"
          :key="style"
          class="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
          :class="options.style === style
            ? (isDarkTheme ? 'bg-white/15 text-white' : 'bg-white text-gray-900 shadow-sm')
            : (isDarkTheme ? 'text-gray-400' : 'text-gray-500')"
          @click="options.style = style"
        >{{ style }}</button>
      </div>

      <label
        v-for="toggle in toggles"
        :key="toggle.key"
        class="flex items-center gap-1.5 text-sm cursor-pointer"
        :class="currentTheme.colors.textSecondary"
      >
        <input v-model="options[toggle.key]" type="checkbox" class="accent-primary-600" />
        {{ toggle.label }}
      </label>

      <div class="ml-auto flex items-center gap-2">
        <button class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
          :class="isDarkTheme ? 'text-gray-400 hover:bg-white/10' : 'text-gray-500 hover:bg-black/5'"
          @click="loadExample">Example</button>
        <button class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
          :class="isDarkTheme ? 'text-gray-400 hover:bg-white/10' : 'text-gray-500 hover:bg-black/5'"
          @click="clearAll">Clear</button>
      </div>
    </div>

    <!-- Two-panel -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Input -->
      <div class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300" :class="cardClass">
        <span class="text-xs font-semibold uppercase tracking-wide" :class="currentTheme.colors.textMuted">JSON</span>
        <textarea
          v-model="jsonText"
          spellcheck="false"
          placeholder="Paste JSON here..."
          class="flex-1 min-h-[300px] lg:min-h-[440px] resize-none rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary-500/50"
          :class="[
            monoBoxClass, currentTheme.colors.bgCard, currentTheme.colors.textPrimary,
            isDarkTheme ? 'ring-1 ring-white/10 placeholder:text-gray-600' : 'border border-white/50 placeholder:text-gray-300',
          ]"
        />
        <p v-if="errorMessage" class="text-xs px-3 py-2 rounded-lg"
          :class="isDarkTheme ? 'bg-red-900/40 text-red-300' : 'bg-red-50 text-red-700 border border-red-200'"
        >{{ errorMessage }}</p>
      </div>

      <!-- Output -->
      <div class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300" :class="cardClass">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold uppercase tracking-wide" :class="currentTheme.colors.textMuted">TypeScript</span>
          <button
            v-if="hasOutput"
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
            :class="isDarkTheme ? 'text-gray-400 hover:bg-white/10' : 'text-gray-500 hover:bg-black/5'"
            @click="copyOutput"
          >{{ hasCopied ? 'Copied!' : 'Copy' }}</button>
        </div>
        <pre
          class="flex-1 min-h-[300px] lg:min-h-[440px] m-0 p-3 rounded-xl whitespace-pre-wrap break-words overflow-auto"
          :class="[
            monoBoxClass, currentTheme.colors.textPrimary,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
          ]"
        >{{ output }}</pre>
      </div>
    </div>
  </div>
</template>
