<script setup lang="ts">
import { computed } from 'vue'
import ThemeSelector from '../components/ThemeSelector.vue'
import { useTheme } from '../composables/use-theme'
import { toolRegistry, type Tool } from '../tools/registry'

const emit = defineEmits<{ (e: 'select-tool', toolId: string): void }>()

const { currentTheme } = useTheme()

const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

function handleCardClick(tool: Tool): void {
  if (tool.status !== 'active') return
  emit('select-tool', tool.id)
}
</script>

<template>
  <div class="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col">
    <!-- Header -->
    <header class="mb-8 md:mb-12">
      <div class="flex items-center justify-between">
        <!-- Left spacer -->
        <div class="w-32 hidden sm:block"></div>

        <!-- Center: branding -->
        <div class="flex-1 text-center">
          <div class="inline-flex items-center gap-3 mb-2">
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300"
              :class="[
                isDarkTheme
                  ? 'bg-gradient-to-br from-primary-400 to-primary-500'
                  : 'bg-gradient-to-br from-primary-500 to-primary-600'
              ]"
            >
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1
              class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent transition-colors duration-300"
              :class="[
                isDarkTheme
                  ? 'bg-gradient-to-r from-white via-gray-200 to-white'
                  : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
              ]"
            >
              lit-code
            </h1>
          </div>
          <p
            class="text-sm md:text-base font-medium transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >
            A collection of developer tools
          </p>
        </div>

        <!-- Theme selector -->
        <div class="flex justify-end w-32">
          <ThemeSelector />
        </div>
      </div>
    </header>

    <!-- Tools grid -->
    <main class="flex-1 overflow-y-auto">
      <div class="mb-4">
        <h2
          class="text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
          :class="currentTheme.colors.textMuted"
        >
          Developer Tools
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div
          v-for="tool in toolRegistry"
          :key="tool.id"
          class="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200"
          :class="[
            currentTheme.colors.bgCard,
            currentTheme.colors.shadow,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
            tool.status === 'active'
              ? [currentTheme.colors.bgCardHover, 'cursor-pointer hover:ring-2 hover:ring-primary-500/60 hover:scale-[1.01]']
              : 'opacity-60 cursor-not-allowed'
          ]"
          :title="tool.status === 'coming-soon' ? 'Coming soon' : undefined"
          :role="tool.status === 'active' ? 'button' : undefined"
          :tabindex="tool.status === 'active' ? 0 : undefined"
          @click="handleCardClick(tool)"
          @keydown.enter="handleCardClick(tool)"
          @keydown.space.prevent="handleCardClick(tool)"
        >
          <!-- Top row: icon + status badge -->
          <div class="flex items-start justify-between">
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-colors duration-300 flex-shrink-0"
              :class="[
                isDarkTheme
                  ? 'bg-gradient-to-br from-primary-400 to-primary-500'
                  : 'bg-gradient-to-br from-primary-500 to-primary-600'
              ]"
            >
              <svg class="w-5 h-5 text-white" fill="none" :viewBox="tool.iconViewBox" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tool.icon" />
              </svg>
            </div>

            <span
              v-if="tool.status === 'coming-soon'"
              class="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
              :class="isDarkTheme ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'"
            >
              Coming soon
            </span>
          </div>

          <!-- Name & description -->
          <div class="flex-1">
            <h3
              class="font-semibold text-base mb-1 transition-colors duration-300"
              :class="currentTheme.colors.textPrimary"
            >
              {{ tool.name }}
            </h3>
            <p
              class="text-xs leading-relaxed transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >
              {{ tool.description }}
            </p>
          </div>

          <!-- Bottom row: tags + arrow -->
          <div class="flex items-center justify-between">
            <div class="flex flex-wrap gap-1">
              <span
                v-for="tag in tool.tags"
                :key="tag"
                class="text-[10px] font-medium px-1.5 py-0.5 rounded transition-colors duration-300"
                :class="isDarkTheme ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'"
              >
                {{ tag }}
              </span>
            </div>

            <svg
              v-if="tool.status === 'active'"
              class="w-4 h-4 flex-shrink-0 transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="mt-6 text-center">
      <p
        class="text-xs transition-colors duration-300"
        :class="currentTheme.colors.textMuted"
      >
        Select a tool to get started
      </p>
    </footer>
  </div>
</template>
