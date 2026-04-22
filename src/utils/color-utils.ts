export interface RgbColor { r: number; g: number; b: number }
export interface HslColor { h: number; s: number; l: number }

export interface Color {
  hex: string
  r: number; g: number; b: number
  h: number; s: number; l: number
}

export type CopyFormat = 'hex' | 'rgb' | 'hsl'

export function hexToRgb(hex: string): RgbColor {
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) h = h.split('').map(c => c + c).join('')
  const n = parseInt(h, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
}

export function rgbToHsl(r: number, g: number, b: number): HslColor {
  const rn = r / 255, gn = g / 255, bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) }

  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6
  else if (max === gn) h = ((bn - rn) / d + 2) / 6
  else h = ((rn - gn) / d + 4) / 6

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

export function hslToRgb(h: number, s: number, l: number): RgbColor {
  const sn = s / 100, ln = l / 100
  const k = (n: number) => (n + h / 30) % 12
  const a = sn * Math.min(ln, 1 - ln)
  const f = (n: number) => ln - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return {
    r: Math.round(f(0) * 255),
    g: Math.round(f(8) * 255),
    b: Math.round(f(4) * 255),
  }
}

export function fromRgb(r: number, g: number, b: number): Color {
  const hsl = rgbToHsl(r, g, b)
  return { r, g, b, hex: rgbToHex(r, g, b), ...hsl }
}

export function fromHsl(h: number, s: number, l: number): Color {
  const { r, g, b } = hslToRgb(h, s, l)
  return { h, s, l, r, g, b, hex: rgbToHex(r, g, b) }
}

export function fromHex(hex: string): Color {
  const { r, g, b } = hexToRgb(hex)
  return fromRgb(r, g, b)
}

export function rotateHue(color: Color, degrees: number): Color {
  return fromHsl((color.h + degrees + 360) % 360, color.s, color.l)
}

export function isValidHex(hex: string): boolean {
  return /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex.trim())
}

export function getContrastColor(color: Color): '#ffffff' | '#000000' {
  // WCAG relative luminance
  const toLinear = (c: number) => {
    const n = c / 255
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)
  }
  const lum = 0.2126 * toLinear(color.r) + 0.7152 * toLinear(color.g) + 0.0722 * toLinear(color.b)
  return lum > 0.179 ? '#000000' : '#ffffff'
}

export function formatColor(color: Color, format: CopyFormat): string {
  if (format === 'hex') return color.hex
  if (format === 'rgb') return `rgb(${color.r}, ${color.g}, ${color.b})`
  return `hsl(${color.h}, ${color.s}%, ${color.l}%)`
}

export function getShades(base: Color, count = 5): Color[] {
  return [0.8, 0.6, 0.4, 0.25, 0.1].slice(0, count).map(factor =>
    fromHsl(base.h, base.s, Math.max(2, Math.round(base.l * factor)))
  )
}

export function getTints(base: Color, count = 5): Color[] {
  return [0.2, 0.4, 0.6, 0.75, 0.9].slice(0, count).map(factor =>
    fromHsl(base.h, base.s, Math.min(98, Math.round(base.l + (100 - base.l) * factor)))
  )
}

export function getComplementary(base: Color): Color[] {
  return [rotateHue(base, 180)]
}

export function getAnalogous(base: Color): Color[] {
  return [
    rotateHue(base, -60),
    rotateHue(base, -30),
    rotateHue(base, 30),
    rotateHue(base, 60),
  ]
}

export function getTriadic(base: Color): Color[] {
  return [rotateHue(base, 120), rotateHue(base, 240)]
}

export function getSplitComplementary(base: Color): Color[] {
  return [rotateHue(base, 150), rotateHue(base, 210)]
}
