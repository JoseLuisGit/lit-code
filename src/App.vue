<script setup lang="ts">
import { ref } from 'vue'
import JsonInput from './components/JsonInput.vue'
import JsonViewer from './components/JsonViewer.vue'

const jsonText = ref('')
</script>

<template>
  <div class="h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <div class="h-full max-w-[1600px] mx-auto flex flex-col">
      <!-- Header -->
      <header class="mb-6">
        <h1 class="text-4xl font-bold text-gray-800 text-center">
          JSON Visualizer
        </h1>
        <p class="text-center text-gray-600 mt-2">
          Visualiza JSON de forma interactiva en tiempo real
        </p>
      </header>

      <!-- Main Content - Two Columns -->
      <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
        <!-- Left Panel - JSON Input -->
        <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col overflow-hidden">
          <JsonInput v-model="jsonText" />
        </div>

        <!-- Right Panel - JSON Viewer -->
        <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col overflow-hidden">
          <JsonViewer :jsonText="jsonText" />
        </div>
      </div>
    </div>
  </div>
</template>
