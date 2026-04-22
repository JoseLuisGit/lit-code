<script setup lang="ts">
import { computed } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'
import { useColorPalette } from '../composables/use-color-palette'
import { getContrastColor } from '../utils/color-utils'

defineEmits<{ (e: 'back'): void }>()

const { currentTheme } = useTheme()
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
  baseColor, hexInput, rgbR, rgbG, rgbB, hslH, hslS, hslL,
  copyFormat, copiedKey, palettes,
  setFromHex, setFromRgb, setFromHsl,
  copySwatch, copyPalette, formatColor,
} = useColorPalette()

const cardClass = computed(() => [
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.shadow,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-white/50',
])

const inputClass = computed(() => [
  'rounded-lg px-2 py-1 text-sm font-mono outline-none transition-all duration-200',
  'focus:ring-2 focus:ring-primary-500/50',
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.textPrimary,
  isDarkTheme.value
    ? 'ring-1 ring-white/10'
    : 'border border-gray-200',
])

const tabActiveClass = computed(() =>
  isDarkTheme.value ? 'bg-white/15 text-white' : 'bg-white text-gray-900 shadow-sm'
)
const tabInactiveClass = computed(() =>
  isDarkTheme.value ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800'
)
const ghostBtn = computed(() =>
  isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
    : 'text-gray-500 hover:text-gray-700 hover:bg-black/5'
)

function onHexChange(e: Event): void {
  setFromHex((e.target as HTMLInputElement).value)
}

function onHexBlur(): void {
  hexInput.value = baseColor.value.hex
}
</script>

<template>
  <div class="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col">
    <ToolHeader
      tool-name="Color Palette"
      tool-description="Convert HEX/RGB/HSL and generate color palettes"
      @back="$emit('back')"
    />

    <div class="flex-1 flex flex-col gap-4 overflow-hidden">

      <!-- Color Picker Section -->
      <div
        class="rounded-2xl p-4 md:p-5 flex-shrink-0 transition-all duration-300"
        :class="cardClass"
      >
        <div class="flex items-center gap-5 flex-wrap">

          <!-- Native picker + preview swatch -->
          <div class="flex items-center gap-3 flex-shrink-0">
            <div class="relative">
              <div
                class="w-16 h-16 rounded-xl shadow-md cursor-pointer overflow-hidden flex-shrink-0 ring-2 ring-white/20"
                :style="{ backgroundColor: baseColor.hex }"
              >
                <input
                  type="color"
                  :value="baseColor.hex"
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  @input="setFromHex(($event.target as HTMLInputElement).value)"
                />
              </div>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
                :class="currentTheme.colors.textMuted"
              >Base Color</p>
              <p
                class="text-sm font-mono font-semibold mt-0.5 transition-colors duration-300"
                :class="currentTheme.colors.textPrimary"
              >{{ baseColor.hex }}</p>
            </div>
          </div>

          <!-- Divider -->
          <div
            class="hidden sm:block w-px h-12 flex-shrink-0 transition-colors duration-300"
            :class="isDarkTheme ? 'bg-white/10' : 'bg-gray-200'"
          />

          <!-- HEX input -->
          <div class="flex items-center gap-2">
            <span
              class="text-xs font-semibold w-7 transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >HEX</span>
            <input
              type="text"
              :value="hexInput"
              placeholder="#3b82f6"
              class="w-28"
              :class="inputClass"
              @change="onHexChange"
              @blur="onHexBlur"
            />
          </div>

          <!-- RGB inputs -->
          <div class="flex items-center gap-2">
            <span
              class="text-xs font-semibold w-7 transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >RGB</span>
            <input
              type="number" min="0" max="255"
              :value="rgbR" placeholder="R"
              class="w-14 text-center"
              :class="inputClass"
              @change="setFromRgb(+($event.target as HTMLInputElement).value, rgbG, rgbB)"
            />
            <input
              type="number" min="0" max="255"
              :value="rgbG" placeholder="G"
              class="w-14 text-center"
              :class="inputClass"
              @change="setFromRgb(rgbR, +($event.target as HTMLInputElement).value, rgbB)"
            />
            <input
              type="number" min="0" max="255"
              :value="rgbB" placeholder="B"
              class="w-14 text-center"
              :class="inputClass"
              @change="setFromRgb(rgbR, rgbG, +($event.target as HTMLInputElement).value)"
            />
          </div>

          <!-- HSL inputs -->
          <div class="flex items-center gap-2">
            <span
              class="text-xs font-semibold w-7 transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >HSL</span>
            <div class="flex items-center gap-1">
              <input
                type="number" min="0" max="360"
                :value="hslH" placeholder="H"
                class="w-14 text-center"
                :class="inputClass"
                @change="setFromHsl(+($event.target as HTMLInputElement).value, hslS, hslL)"
              />
              <span class="text-xs" :class="currentTheme.colors.textMuted">°</span>
            </div>
            <div class="flex items-center gap-1">
              <input
                type="number" min="0" max="100"
                :value="hslS" placeholder="S"
                class="w-14 text-center"
                :class="inputClass"
                @change="setFromHsl(hslH, +($event.target as HTMLInputElement).value, hslL)"
              />
              <span class="text-xs" :class="currentTheme.colors.textMuted">%</span>
            </div>
            <div class="flex items-center gap-1">
              <input
                type="number" min="0" max="100"
                :value="hslL" placeholder="L"
                class="w-14 text-center"
                :class="inputClass"
                @change="setFromHsl(hslH, hslS, +($event.target as HTMLInputElement).value)"
              />
              <span class="text-xs" :class="currentTheme.colors.textMuted">%</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Palettes Section -->
      <div class="flex-1 flex flex-col gap-0 overflow-hidden">

        <!-- Copy format selector -->
        <div class="flex items-center justify-between mb-3 flex-shrink-0">
          <span
            class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >Palettes</span>
          <div
            class="inline-flex rounded-lg p-0.5 gap-0.5 transition-colors duration-300"
            :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'"
          >
            <button
              v-for="fmt in (['hex', 'rgb', 'hsl'] as const)"
              :key="fmt"
              class="px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 uppercase"
              :class="copyFormat === fmt ? tabActiveClass : tabInactiveClass"
              @click="copyFormat = fmt"
            >{{ fmt }}</button>
          </div>
        </div>

        <!-- Palette rows -->
        <div class="flex-1 overflow-y-auto space-y-3 pr-1">
          <div
            v-for="palette in palettes"
            :key="palette.name"
            class="rounded-2xl p-4 transition-all duration-300"
            :class="cardClass"
          >
            <!-- Palette header -->
            <div class="flex items-center justify-between mb-3">
              <div>
                <h3
                  class="text-sm font-semibold transition-colors duration-300"
                  :class="currentTheme.colors.textPrimary"
                >{{ palette.name }}</h3>
                <p
                  class="text-xs transition-colors duration-300"
                  :class="currentTheme.colors.textMuted"
                >{{ palette.description }}</p>
              </div>
              <button
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                :class="copiedKey === `palette-${palette.name}` ? 'text-green-500' : ghostBtn"
                @click="copyPalette(palette)"
              >
                <svg v-if="copiedKey !== `palette-${palette.name}`" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ copiedKey === `palette-${palette.name}` ? 'Copied!' : 'Copy as CSS vars' }}
              </button>
            </div>

            <!-- Swatches -->
            <div class="flex flex-wrap gap-3">
              <button
                v-for="(color, idx) in palette.colors"
                :key="idx"
                class="group flex flex-col items-center gap-1.5 focus:outline-none"
                :title="`Click to copy ${formatColor(color, copyFormat)}`"
                @click="copySwatch(color, `${palette.name}-${idx}`)"
              >
                <!-- Color square -->
                <div
                  class="w-14 h-14 rounded-xl shadow-md transition-all duration-150 group-hover:scale-105 group-hover:shadow-lg group-active:scale-95 relative overflow-hidden"
                  :style="{ backgroundColor: color.hex }"
                >
                  <!-- Copied checkmark overlay -->
                  <div
                    v-if="copiedKey === `${palette.name}-${idx}`"
                    class="absolute inset-0 flex items-center justify-center"
                    :style="{ backgroundColor: color.hex }"
                  >
                    <svg class="w-5 h-5" :style="{ color: getContrastColor(color) }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <!-- Color value label -->
                <span
                  class="text-[10px] font-mono max-w-[56px] truncate transition-colors duration-300"
                  :class="copiedKey === `${palette.name}-${idx}` ? 'text-green-500' : currentTheme.colors.textMuted"
                >{{ formatColor(color, copyFormat) }}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
