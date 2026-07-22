import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

// currentThemeName is a module-scoped singleton initialized at import time,
// so each test re-imports a fresh module after resetting the environment.
async function importTheme() {
  return await import('../../src/composables/use-theme')
}

describe('useTheme', () => {
  beforeEach(() => {
    vi.resetModules()
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('defaults to light with no stored value and no dark preference', async () => {
    const { useTheme } = await importTheme()
    const { currentThemeName } = useTheme()
    expect(currentThemeName.value).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('restores a stored theme from localStorage', async () => {
    localStorage.setItem('json-visualizer-theme', 'midnight')
    const { useTheme } = await importTheme()
    const { currentThemeName } = useTheme()
    expect(currentThemeName.value).toBe('midnight')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('ignores garbage stored values', async () => {
    localStorage.setItem('json-visualizer-theme', 'neon')
    const { useTheme } = await importTheme()
    expect(useTheme().currentThemeName.value).toBe('light')
  })

  it('falls back to the system dark preference', async () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }))
    const { useTheme } = await importTheme()
    const { currentThemeName } = useTheme()
    expect(currentThemeName.value).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('setTheme persists to localStorage and toggles the dark class', async () => {
    const { useTheme } = await importTheme()
    const { setTheme } = useTheme()

    setTheme('dark')
    expect(localStorage.getItem('json-visualizer-theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    setTheme('midnight')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    setTheme('forest')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('cycleTheme walks light → dark → midnight → forest → sunset → light', async () => {
    const { useTheme } = await importTheme()
    const { currentThemeName, cycleTheme } = useTheme()
    const seen: string[] = [currentThemeName.value]
    for (let i = 0; i < 5; i++) {
      cycleTheme()
      seen.push(currentThemeName.value)
    }
    expect(seen).toEqual(['light', 'dark', 'midnight', 'forest', 'sunset', 'light'])
  })

  it('exposes all five themes and the current theme object', async () => {
    const { useTheme } = await importTheme()
    const { allThemes, currentTheme, currentThemeName } = useTheme()
    expect(allThemes.value).toHaveLength(5)
    expect(currentTheme.value.name).toBe(currentThemeName.value)
  })
})
