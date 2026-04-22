<script setup lang="ts">
import { ref } from 'vue'
import HomeView from './views/HomeView.vue'
import JsonViewerView from './views/JsonViewerView.vue'
import TextCompareView from './views/TextCompareView.vue'
import { useTheme } from './composables/use-theme'

const { currentTheme } = useTheme()
const currentToolId = ref<string | null>(null)

function selectTool(toolId: string): void {
  currentToolId.value = toolId
}

function goHome(): void {
  currentToolId.value = null
}
</script>

<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300"
    :class="currentTheme.colors.bgPrimary"
  >
    <Transition name="view" mode="out-in">
      <HomeView
        v-if="currentToolId === null"
        key="home"
        @select-tool="selectTool"
      />
      <JsonViewerView
        v-else-if="currentToolId === 'json-viewer'"
        key="json-viewer"
        @back="goHome"
      />
      <TextCompareView
        v-else-if="currentToolId === 'text-compare'"
        key="text-compare"
        @back="goHome"
      />
    </Transition>
  </div>
</template>

<style scoped>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.view-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
