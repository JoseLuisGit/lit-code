import { ref, computed } from 'vue'
import {
  fromHex, fromRgb, fromHsl,
  isValidHex,
  formatColor,
  getShades, getTints,
  getComplementary, getAnalogous, getTriadic, getSplitComplementary,
} from '../utils/color-utils'
import type { Color, CopyFormat } from '../utils/color-utils'

export type { Color, CopyFormat }

export interface Palette {
  name: string
  description: string
  colors: Color[]
}

const DEFAULT_HEX = '#3b82f6'

export function useColorPalette() {
  const baseColor = ref<Color>(fromHex(DEFAULT_HEX))

  const hexInput = ref(DEFAULT_HEX)
  const rgbR = ref(baseColor.value.r)
  const rgbG = ref(baseColor.value.g)
  const rgbB = ref(baseColor.value.b)
  const hslH = ref(baseColor.value.h)
  const hslS = ref(baseColor.value.s)
  const hslL = ref(baseColor.value.l)

  const copyFormat = ref<CopyFormat>('hex')
  const copiedKey = ref<string | null>(null)

  const palettes = computed<Palette[]>(() => [
    { name: 'Shades', description: 'Darker variants', colors: getShades(baseColor.value) },
    { name: 'Tints', description: 'Lighter variants', colors: getTints(baseColor.value) },
    { name: 'Complementary', description: 'Opposite on the color wheel', colors: getComplementary(baseColor.value) },
    { name: 'Analogous', description: 'Adjacent colors (±30°, ±60°)', colors: getAnalogous(baseColor.value) },
    { name: 'Triadic', description: 'Three evenly spaced colors (+120°, +240°)', colors: getTriadic(baseColor.value) },
    { name: 'Split Complementary', description: 'Near the complement (+150°, +210°)', colors: getSplitComplementary(baseColor.value) },
  ])

  function syncInputs(color: Color): void {
    hexInput.value = color.hex
    rgbR.value = color.r
    rgbG.value = color.g
    rgbB.value = color.b
    hslH.value = color.h
    hslS.value = color.s
    hslL.value = color.l
  }

  function setFromHex(raw: string): void {
    const hex = raw.startsWith('#') ? raw : `#${raw}`
    if (!isValidHex(hex)) return
    const color = fromHex(hex)
    baseColor.value = color
    syncInputs(color)
  }

  function setFromRgb(r: number, g: number, b: number): void {
    const clamp = (v: number) => Math.min(255, Math.max(0, Math.round(v)))
    const color = fromRgb(clamp(r), clamp(g), clamp(b))
    baseColor.value = color
    syncInputs(color)
  }

  function setFromHsl(h: number, s: number, l: number): void {
    const ch = ((h % 360) + 360) % 360
    const cs = Math.min(100, Math.max(0, s))
    const cl = Math.min(100, Math.max(0, l))
    const color = fromHsl(ch, cs, cl)
    baseColor.value = color
    syncInputs(color)
  }

  async function copySwatch(color: Color, key: string): Promise<void> {
    await navigator.clipboard.writeText(formatColor(color, copyFormat.value))
    copiedKey.value = key
    setTimeout(() => {
      if (copiedKey.value === key) copiedKey.value = null
    }, 2000)
  }

  async function copyPalette(palette: Palette): Promise<void> {
    const slug = palette.name.toLowerCase().replace(/\s+/g, '-')
    const css = palette.colors
      .map((c, i) => `--${slug}-${i + 1}: ${formatColor(c, copyFormat.value)};`)
      .join('\n')
    await navigator.clipboard.writeText(css)
    copiedKey.value = `palette-${palette.name}`
    setTimeout(() => {
      if (copiedKey.value === `palette-${palette.name}`) copiedKey.value = null
    }, 2000)
  }

  return {
    baseColor,
    hexInput, rgbR, rgbG, rgbB, hslH, hslS, hslL,
    copyFormat, copiedKey,
    palettes,
    setFromHex, setFromRgb, setFromHsl,
    copySwatch, copyPalette,
    formatColor,
  }
}
