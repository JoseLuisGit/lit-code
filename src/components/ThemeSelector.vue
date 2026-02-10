<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme, type ThemeName } from '../composables/use-theme'

const { currentTheme, allThemes, setTheme } = useTheme()
const isOpen = ref(false)
const selectorRef = ref<HTMLElement | null>(null)

function toggleDropdown(): void {
  isOpen.value = !isOpen.value
}

function selectTheme(themeName: ThemeName): void {
  setTheme(themeName)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent): void {
  if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    ref="selectorRef"
    class="theme-selector relative"
  >
    <!-- Toggle Button -->
    <button
      @click="toggleDropdown"
      class="inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
      :class="[
        currentTheme.name === 'dark' || currentTheme.name === 'midnight'
          ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 focus:ring-slate-500'
          : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md focus:ring-primary-500 shadow-soft'
      ]"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      aria-label="Seleccionar tema"
      title="Cambiar tema de color"
    >
      <span class="text-lg" aria-hidden="true">{{ currentTheme.icon }}</span>
      <span class="text-sm font-medium hidden sm:inline">{{ currentTheme.label }}</span>
      <svg
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden z-50"
        :class="[
          currentTheme.name === 'dark' || currentTheme.name === 'midnight'
            ? 'bg-slate-800 ring-1 ring-white/10 shadow-2xl'
            : 'bg-white ring-1 ring-black/5 shadow-xl'
        ]"
        role="listbox"
        aria-label="Temas disponibles"
      >
        <div class="p-1.5">
          <button
            v-for="theme in allThemes"
            :key="theme.name"
            @click="selectTheme(theme.name)"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-left"
            :class="[
              theme.name === currentTheme.name
                ? currentTheme.name === 'dark' || currentTheme.name === 'midnight'
                  ? 'bg-slate-700 text-white'
                  : 'bg-primary-50 text-primary-700'
                : currentTheme.name === 'dark' || currentTheme.name === 'midnight'
                  ? 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  : 'text-gray-700 hover:bg-gray-50'
            ]"
            role="option"
            :aria-selected="theme.name === currentTheme.name"
          >
            <span class="text-xl flex-shrink-0" aria-hidden="true">{{ theme.icon }}</span>
            <span class="flex-1 font-medium text-sm">{{ theme.label }}</span>
            <svg
              v-if="theme.name === currentTheme.name"
              class="w-4 h-4 flex-shrink-0"
              :class="[
                currentTheme.name === 'dark' || currentTheme.name === 'midnight'
                  ? 'text-primary-400'
                  : 'text-primary-600'
              ]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>

        <!-- Theme Preview Hint -->
        <div
          class="px-3 py-2 text-xs border-t"
          :class="[
            currentTheme.name === 'dark' || currentTheme.name === 'midnight'
              ? 'border-slate-700 text-slate-500'
              : 'border-gray-100 text-gray-400'
          ]"
        >
          El tema se guarda automáticamente
        </div>
      </div>
    </Transition>
  </div>
</template>

