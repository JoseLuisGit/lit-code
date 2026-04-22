<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '../composables/use-theme'
import type { RenderedLine } from '../utils/text-diff'

interface Props {
  lines: RenderedLine[]
  currentPairIndex: number
  side: 'left' | 'right'
}

const props = defineProps<Props>()

const scrollEl = ref<HTMLElement>()
defineExpose({ scrollEl })

const { currentTheme } = useTheme()

const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)
</script>

<template>
  <div
    ref="scrollEl"
    class="h-full overflow-auto font-mono text-sm rounded-xl transition-colors duration-300"
    :class="[
      currentTheme.colors.bgCard,
      isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
    ]"
  >
    <!-- Empty state -->
    <div
      v-if="lines.length === 0"
      class="h-full flex items-center justify-center flex-col gap-2 transition-colors duration-300"
      :class="currentTheme.colors.textMuted"
    >
      <svg class="w-8 h-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span class="text-xs">No result</span>
    </div>

    <!-- Diff lines -->
    <div v-else class="min-w-full w-max">
      <div
        v-for="(line, idx) in lines"
        :key="idx"
        class="flex items-stretch min-h-[1.75rem] leading-7 w-full transition-colors duration-150"
        :class="[
          line.type === 'equal'
            ? (isDarkTheme ? 'bg-transparent text-gray-300' : 'bg-white/60 text-gray-700')
            : line.type === 'removed'
              ? (isDarkTheme ? 'bg-red-900/50 border-l-2 border-red-400 text-red-200' : 'bg-red-50 border-l-2 border-red-400 text-red-900')
              : line.type === 'added'
                ? (isDarkTheme ? 'bg-green-900/50 border-l-2 border-green-400 text-green-200' : 'bg-green-50 border-l-2 border-green-400 text-green-900')
                : line.type === 'modified'
                  ? (isDarkTheme ? 'bg-yellow-900/40 border-l-2 border-yellow-400 text-yellow-100' : 'bg-yellow-50 border-l-2 border-amber-400 text-yellow-900')
                  : (isDarkTheme ? 'bg-white/5 text-gray-500' : 'bg-gray-50/80 text-gray-300'),
          idx === currentPairIndex
            ? (isDarkTheme ? 'ring-1 ring-inset ring-primary-400/70' : 'ring-1 ring-inset ring-primary-500/50')
            : '',
        ]"
      >
        <!-- Line number -->
        <span
          class="select-none w-10 flex-shrink-0 text-right pr-3 pt-0.5 text-[11px] transition-colors duration-300"
          :class="[
            line.type === 'empty' ? 'opacity-0' : '',
            isDarkTheme ? 'text-gray-600' : 'text-gray-400',
          ]"
        >
          {{ line.lineNumber ?? '' }}
        </span>

        <!-- Line content -->
        <span class="px-2 pt-0.5 whitespace-pre">
          <!-- Empty placeholder -->
          <span
            v-if="line.type === 'empty'"
            class="transition-colors duration-300"
            :class="isDarkTheme ? 'text-gray-700' : 'text-gray-300'"
          >···</span>

          <!-- Modified line with char-level diff -->
          <template v-else-if="line.type === 'modified' && line.chars">
            <template v-for="(char, ci) in line.chars" :key="ci">
              <!-- Left side: show equal + removed chars -->
              <template v-if="side === 'left' && char.type !== 'added'">
                <span
                  :class="char.type === 'removed'
                    ? (isDarkTheme ? 'bg-red-500/50 text-red-100 line-through' : 'bg-red-200 text-red-800 line-through')
                    : ''"
                >{{ char.text }}</span>
              </template>
              <!-- Right side: show equal + added chars -->
              <template v-else-if="side === 'right' && char.type !== 'removed'">
                <span
                  :class="char.type === 'added'
                    ? (isDarkTheme ? 'bg-green-500/50 text-green-100' : 'bg-green-200 text-green-800')
                    : ''"
                >{{ char.text }}</span>
              </template>
            </template>
          </template>

          <!-- Plain content line -->
          <span v-else>{{ line.content }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
