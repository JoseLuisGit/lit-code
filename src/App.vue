<script setup lang="ts">
import { ref, computed } from 'vue'
import JsonInput from './components/JsonInput.vue'
import JsonViewer from './components/JsonViewer.vue'
import ThemeSelector from './components/ThemeSelector.vue'
import { useTheme } from './composables/use-theme'

const jsonText = ref('')
const { currentTheme } = useTheme()

const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)
</script>

<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300"
    :class="currentTheme.colors.bgPrimary"
  >
    <div class="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col">
      <!-- Header -->
      <header class="mb-6 md:mb-8">
        <div class="flex items-center justify-between">
          <!-- Left spacer for balance -->
          <div class="w-32 hidden sm:block"></div>

          <!-- Center content -->
          <div class="flex-1 text-center">
            <div class="inline-flex items-center gap-3 mb-2">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300"
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
                JSON Visualizer
              </h1>
            </div>
            <p
              class="text-sm md:text-base font-medium transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >
              Visualiza y explora estructuras JSON de forma interactiva
            </p>
          </div>

          <!-- Theme selector -->
          <div class="flex justify-end w-32">
            <ThemeSelector />
          </div>
        </div>
      </header>

      <!-- Main Content - Two Columns -->
      <main class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
        <!-- Left Panel - JSON Input -->
        <section
          class="rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300"
          :class="[
            currentTheme.colors.bgCard,
            currentTheme.colors.shadow,
            currentTheme.colors.bgCardHover,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50'
          ]"
          aria-label="Panel de entrada JSON"
        >
          <JsonInput v-model="jsonText" :theme="currentTheme" />
        </section>

        <!-- Right Panel - JSON Viewer -->
        <section
          class="rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300"
          :class="[
            currentTheme.colors.bgCard,
            currentTheme.colors.shadow,
            currentTheme.colors.bgCardHover,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50'
          ]"
          aria-label="Panel de visualización JSON"
        >
          <JsonViewer :jsonText="jsonText" :theme="currentTheme" />
        </section>
      </main>

      <!-- Footer -->
      <footer class="mt-4 text-center">
        <p
          class="text-xs transition-colors duration-300"
          :class="currentTheme.colors.textMuted"
        >
          Presiona
          <kbd
            class="px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300"
            :class="isDarkTheme ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'"
          >Ctrl</kbd>
          +
          <kbd
            class="px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300"
            :class="isDarkTheme ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'"
          >V</kbd>
          para pegar y formatear automáticamente
        </p>
      </footer>
    </div>
  </div>
</template>
