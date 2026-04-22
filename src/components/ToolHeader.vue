<script setup lang="ts">
import { computed } from 'vue'
import ThemeSelector from './ThemeSelector.vue'
import { useTheme } from '../composables/use-theme'

interface Props {
  toolName: string
  toolDescription?: string
}

defineProps<Props>()
defineEmits<{ (e: 'back'): void }>()

const { currentTheme } = useTheme()

const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)
</script>

<template>
  <header class="mb-6 md:mb-8">
    <div class="flex items-center justify-between">
      <!-- Back button -->
      <div class="w-32">
        <button
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          :class="[
            isDarkTheme
              ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
              : 'text-gray-500 hover:text-gray-800 hover:bg-black/5'
          ]"
          @click="$emit('back')"
          aria-label="Go back to home"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Home
        </button>
      </div>

      <!-- Center: tool name -->
      <div class="flex-1 text-center">
        <h1
          class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent transition-colors duration-300"
          :class="[
            isDarkTheme
              ? 'bg-gradient-to-r from-white via-gray-200 to-white'
              : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
          ]"
        >
          {{ toolName }}
        </h1>
        <p
          v-if="toolDescription"
          class="text-xs md:text-sm font-medium mt-0.5 transition-colors duration-300"
          :class="currentTheme.colors.textMuted"
        >
          {{ toolDescription }}
        </p>
      </div>

      <!-- Theme selector -->
      <div class="flex justify-end w-32">
        <ThemeSelector />
      </div>
    </div>
  </header>
</template>
