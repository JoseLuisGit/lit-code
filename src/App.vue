<script setup lang="ts">
import { useTheme } from './composables/use-theme'

const { currentTheme } = useTheme()
</script>

<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300"
    :class="currentTheme.colors.bgPrimary"
  >
    <RouterView v-slot="{ Component }">
      <Transition name="view" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
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
