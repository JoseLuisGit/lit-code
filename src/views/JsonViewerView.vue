<script setup lang="ts">
import { ref, computed } from 'vue'
import JsonInput from '../components/JsonInput.vue'
import JsonViewer from '../components/JsonViewer.vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'

const { currentTheme } = useTheme()
const jsonText = ref('')

const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)
</script>

<template>
  <div class="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col">
    <ToolHeader
      tool-name="JSON Viewer"
      tool-description="Visualize and explore JSON structures interactively"
    />

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
        aria-label="JSON input panel"
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
        aria-label="JSON viewer panel"
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
        Press
        <kbd
          class="px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300"
          :class="isDarkTheme ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'"
        >Ctrl</kbd>
        +
        <kbd
          class="px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300"
          :class="isDarkTheme ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'"
        >V</kbd>
        to paste and auto-format
      </p>
    </footer>
  </div>
</template>
