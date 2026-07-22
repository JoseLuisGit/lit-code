import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useColorPalette } from '../../src/composables/use-color-palette'

function stubClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText },
    configurable: true,
  })
  return writeText
}

describe('useColorPalette — base color inputs', () => {
  it('starts with the default blue and synced inputs', () => {
    const palette = useColorPalette()
    expect(palette.baseColor.value.hex).toBe('#3b82f6')
    expect(palette.hexInput.value).toBe('#3b82f6')
    expect(palette.rgbR.value).toBe(59)
    expect(palette.rgbG.value).toBe(130)
    expect(palette.rgbB.value).toBe(246)
  })

  it('setFromHex accepts values without # and syncs all inputs', () => {
    const palette = useColorPalette()
    palette.setFromHex('ff0000')
    expect(palette.baseColor.value.hex).toBe('#ff0000')
    expect(palette.hexInput.value).toBe('#ff0000')
    expect(palette.rgbR.value).toBe(255)
    expect(palette.hslH.value).toBe(0)
  })

  it('setFromHex ignores invalid values', () => {
    const palette = useColorPalette()
    palette.setFromHex('#zzz')
    expect(palette.baseColor.value.hex).toBe('#3b82f6')
  })

  it('setFromRgb clamps and rounds channels', () => {
    const palette = useColorPalette()
    palette.setFromRgb(300, -5, 12.7)
    expect(palette.rgbR.value).toBe(255)
    expect(palette.rgbG.value).toBe(0)
    expect(palette.rgbB.value).toBe(13)
  })

  it('setFromHsl wraps hue and clamps saturation/lightness', () => {
    const palette = useColorPalette()
    palette.setFromHsl(-30, 150, 50)
    expect(palette.hslH.value).toBe(330)
    expect(palette.hslS.value).toBe(100)
    expect(palette.hslL.value).toBe(50)
  })
})

describe('useColorPalette — palettes', () => {
  it('generates the six palettes with expected sizes', () => {
    const { palettes } = useColorPalette()
    expect(palettes.value.map(p => [p.name, p.colors.length])).toEqual([
      ['Shades', 5],
      ['Tints', 5],
      ['Complementary', 1],
      ['Analogous', 4],
      ['Triadic', 2],
      ['Split Complementary', 2],
    ])
  })

  it('palettes recompute when the base color changes', () => {
    const palette = useColorPalette()
    palette.setFromHex('#ff0000')
    const complementary = palette.palettes.value[2].colors[0]
    expect(complementary.h).toBe(180)
  })
})

describe('useColorPalette — copying', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('copySwatch writes the formatted color and resets copiedKey after 2s', async () => {
    const writeText = stubClipboard()
    const palette = useColorPalette()
    await palette.copySwatch(palette.baseColor.value, 'swatch-1')
    expect(writeText).toHaveBeenCalledWith('#3b82f6')
    expect(palette.copiedKey.value).toBe('swatch-1')
    vi.advanceTimersByTime(2000)
    expect(palette.copiedKey.value).toBeNull()
  })

  it('copySwatch respects the selected copy format', async () => {
    const writeText = stubClipboard()
    const palette = useColorPalette()
    palette.copyFormat.value = 'rgb'
    await palette.copySwatch(palette.baseColor.value, 'k')
    expect(writeText).toHaveBeenCalledWith('rgb(59, 130, 246)')
  })

  it('an earlier timer does not clear a newer copiedKey (race guard)', async () => {
    stubClipboard()
    const palette = useColorPalette()
    await palette.copySwatch(palette.baseColor.value, 'first')
    vi.advanceTimersByTime(1000)
    await palette.copySwatch(palette.baseColor.value, 'second')
    vi.advanceTimersByTime(1000) // first timer fires now
    expect(palette.copiedKey.value).toBe('second')
    vi.advanceTimersByTime(1000) // second timer fires
    expect(palette.copiedKey.value).toBeNull()
  })

  it('copyPalette writes CSS custom properties with a slugged name', async () => {
    const writeText = stubClipboard()
    const palette = useColorPalette()
    const split = palette.palettes.value[5]
    await palette.copyPalette(split)
    const css = writeText.mock.calls[0][0] as string
    const lines = css.split('\n')
    expect(lines).toHaveLength(2)
    expect(lines[0]).toMatch(/^--split-complementary-1: #[0-9a-f]{6};$/)
    expect(lines[1]).toMatch(/^--split-complementary-2: #[0-9a-f]{6};$/)
    expect(palette.copiedKey.value).toBe('palette-Split Complementary')
  })
})
