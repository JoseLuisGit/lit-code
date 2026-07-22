import { describe, it, expect } from 'vitest'
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  fromHex,
  fromRgb,
  fromHsl,
  rotateHue,
  isValidHex,
  getContrastColor,
  formatColor,
  getShades,
  getTints,
  getComplementary,
  getAnalogous,
  getTriadic,
  getSplitComplementary,
} from '../../src/utils/color-utils'

describe('hexToRgb', () => {
  it('parses a 6-digit hex with #', () => {
    expect(hexToRgb('#3b82f6')).toEqual({ r: 59, g: 130, b: 246 })
  })

  it('parses a 6-digit hex without #', () => {
    expect(hexToRgb('ff0000')).toEqual({ r: 255, g: 0, b: 0 })
  })

  it('expands 3-digit shorthand (#abc → #aabbcc)', () => {
    expect(hexToRgb('#abc')).toEqual(hexToRgb('#aabbcc'))
  })

  it('ignores surrounding whitespace', () => {
    expect(hexToRgb('  #00ff00  ')).toEqual({ r: 0, g: 255, b: 0 })
  })
})

describe('rgbToHex', () => {
  it('zero-pads each channel', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000')
  })

  it('converts known values', () => {
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff')
    expect(rgbToHex(59, 130, 246)).toBe('#3b82f6')
  })
})

describe('rgbToHsl / hslToRgb', () => {
  it('maps primaries to their canonical hues', () => {
    expect(rgbToHsl(255, 0, 0)).toEqual({ h: 0, s: 100, l: 50 })
    expect(rgbToHsl(0, 255, 0)).toEqual({ h: 120, s: 100, l: 50 })
    expect(rgbToHsl(0, 0, 255)).toEqual({ h: 240, s: 100, l: 50 })
  })

  it('treats achromatic grays as h=0 s=0', () => {
    expect(rgbToHsl(128, 128, 128)).toEqual({ h: 0, s: 0, l: 50 })
    expect(rgbToHsl(255, 255, 255)).toEqual({ h: 0, s: 0, l: 100 })
    expect(rgbToHsl(0, 0, 0)).toEqual({ h: 0, s: 0, l: 0 })
  })

  it('round-trips rgb → hsl → rgb within rounding tolerance', () => {
    const original = { r: 59, g: 130, b: 246 }
    const { h, s, l } = rgbToHsl(original.r, original.g, original.b)
    const back = hslToRgb(h, s, l)
    expect(Math.abs(back.r - original.r)).toBeLessThanOrEqual(2)
    expect(Math.abs(back.g - original.g)).toBeLessThanOrEqual(2)
    expect(Math.abs(back.b - original.b)).toBeLessThanOrEqual(2)
  })

  it('converts pure hues back to rgb', () => {
    expect(hslToRgb(0, 100, 50)).toEqual({ r: 255, g: 0, b: 0 })
    expect(hslToRgb(120, 100, 50)).toEqual({ r: 0, g: 255, b: 0 })
    expect(hslToRgb(240, 100, 50)).toEqual({ r: 0, g: 0, b: 255 })
  })
})

describe('fromHex / fromRgb / fromHsl', () => {
  it('produces consistent Color objects for the same color', () => {
    const viaHex = fromHex('#ff0000')
    const viaRgb = fromRgb(255, 0, 0)
    expect(viaHex).toEqual(viaRgb)
    expect(viaHex.hex).toBe('#ff0000')
    expect(viaHex.h).toBe(0)
    expect(viaHex.s).toBe(100)
    expect(viaHex.l).toBe(50)
  })

  it('fromHsl keeps the given hsl and derives rgb/hex', () => {
    const color = fromHsl(240, 100, 50)
    expect(color.h).toBe(240)
    expect(color.hex).toBe('#0000ff')
  })
})

describe('rotateHue', () => {
  it('rotates forward', () => {
    expect(rotateHue(fromHsl(30, 100, 50), 60).h).toBe(90)
  })

  it('wraps past 360', () => {
    expect(rotateHue(fromHsl(350, 100, 50), 30).h).toBe(20)
  })

  it('wraps negative rotations', () => {
    expect(rotateHue(fromHsl(10, 100, 50), -30).h).toBe(340)
  })
})

describe('isValidHex', () => {
  it('accepts 3- and 6-digit values with or without #', () => {
    expect(isValidHex('#fff')).toBe(true)
    expect(isValidHex('fff')).toBe(true)
    expect(isValidHex('#3b82f6')).toBe(true)
    expect(isValidHex('3B82F6')).toBe(true)
  })

  it('rejects invalid lengths and characters', () => {
    expect(isValidHex('#ffff')).toBe(false)
    expect(isValidHex('#fffff')).toBe(false)
    expect(isValidHex('#ggg')).toBe(false)
    expect(isValidHex('')).toBe(false)
  })
})

describe('getContrastColor', () => {
  it('returns black text on white background', () => {
    expect(getContrastColor(fromHex('#ffffff'))).toBe('#000000')
  })

  it('returns white text on black background', () => {
    expect(getContrastColor(fromHex('#000000'))).toBe('#ffffff')
  })

  it('flips around the luminance threshold', () => {
    // #777777 has luminance ~0.184 (just above 0.179) → black text
    expect(getContrastColor(fromHex('#777777'))).toBe('#000000')
    // #707070 has luminance ~0.162 (just below) → white text
    expect(getContrastColor(fromHex('#707070'))).toBe('#ffffff')
  })
})

describe('formatColor', () => {
  const color = fromHex('#3b82f6')

  it('formats hex', () => {
    expect(formatColor(color, 'hex')).toBe('#3b82f6')
  })

  it('formats rgb', () => {
    expect(formatColor(color, 'rgb')).toBe('rgb(59, 130, 246)')
  })

  it('formats hsl', () => {
    expect(formatColor(color, 'hsl')).toBe(`hsl(${color.h}, ${color.s}%, ${color.l}%)`)
  })
})

describe('getShades / getTints', () => {
  const base = fromHex('#3b82f6')

  it('returns 5 shades with strictly decreasing lightness', () => {
    const shades = getShades(base)
    expect(shades).toHaveLength(5)
    for (let i = 1; i < shades.length; i++) {
      expect(shades[i].l).toBeLessThan(shades[i - 1].l)
    }
  })

  it('returns 5 tints with strictly increasing lightness', () => {
    const tints = getTints(base)
    expect(tints).toHaveLength(5)
    for (let i = 1; i < tints.length; i++) {
      expect(tints[i].l).toBeGreaterThan(tints[i - 1].l)
    }
  })

  it('clamps shade lightness to a minimum of 2', () => {
    const shades = getShades(fromHsl(200, 50, 3))
    for (const shade of shades) {
      expect(shade.l).toBeGreaterThanOrEqual(2)
    }
  })

  it('clamps tint lightness to a maximum of 98', () => {
    const tints = getTints(fromHsl(200, 50, 97))
    for (const tint of tints) {
      expect(tint.l).toBeLessThanOrEqual(98)
    }
  })

  it('respects the count parameter', () => {
    expect(getShades(base, 3)).toHaveLength(3)
    expect(getTints(base, 2)).toHaveLength(2)
  })
})

describe('harmony palettes', () => {
  const base = fromHsl(30, 100, 50)

  it('complementary is a single color at h+180', () => {
    const result = getComplementary(base)
    expect(result).toHaveLength(1)
    expect(result[0].h).toBe(210)
  })

  it('analogous is four colors at -60/-30/+30/+60', () => {
    const hues = getAnalogous(base).map(c => c.h)
    expect(hues).toEqual([330, 0, 60, 90])
  })

  it('triadic is two colors at +120/+240', () => {
    const hues = getTriadic(base).map(c => c.h)
    expect(hues).toEqual([150, 270])
  })

  it('split complementary is two colors at +150/+210', () => {
    const hues = getSplitComplementary(base).map(c => c.h)
    expect(hues).toEqual([180, 240])
  })
})
