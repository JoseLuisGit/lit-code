import { ref, computed } from 'vue'

export type ThemeName = 'light' | 'dark' | 'midnight' | 'forest' | 'sunset'

export interface ThemeColors {
  // Background colors
  bgPrimary: string
  bgSecondary: string
  bgTertiary: string
  bgCard: string
  bgCardHover: string

  // Text colors
  textPrimary: string
  textSecondary: string
  textMuted: string

  // Accent colors
  accent: string
  accentHover: string
  accentLight: string

  // Status colors
  success: string
  successLight: string
  error: string
  errorLight: string

  // Border colors
  border: string
  borderHover: string

  // JSON type colors
  jsonString: string
  jsonNumber: string
  jsonBoolean: string
  jsonNull: string
  jsonObject: string
  jsonArray: string

  // Shadows
  shadow: string
  shadowLg: string
}

export interface Theme {
  name: ThemeName
  label: string
  icon: string
  colors: ThemeColors
}

const themes: Record<ThemeName, Theme> = {
  light: {
    name: 'light',
    label: 'Claro',
    icon: '☀️',
    colors: {
      bgPrimary: 'from-slate-50 via-primary-50/30 to-slate-100',
      bgSecondary: 'bg-white/80',
      bgTertiary: 'bg-slate-50',
      bgCard: 'bg-white/80 backdrop-blur-sm',
      bgCardHover: 'hover:shadow-soft-lg',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-500',
      accent: 'bg-primary-600',
      accentHover: 'hover:bg-primary-700',
      accentLight: 'bg-primary-100',
      success: 'text-emerald-700',
      successLight: 'bg-emerald-50 border-emerald-200',
      error: 'text-red-700',
      errorLight: 'bg-red-50 border-red-200',
      border: 'border-gray-200',
      borderHover: 'hover:border-gray-300',
      jsonString: 'text-emerald-600',
      jsonNumber: 'text-blue-600',
      jsonBoolean: 'text-violet-600',
      jsonNull: 'text-gray-500',
      jsonObject: 'text-orange-600',
      jsonArray: 'text-cyan-600',
      shadow: 'shadow-soft',
      shadowLg: 'shadow-soft-lg',
    },
  },
  dark: {
    name: 'dark',
    label: 'Oscuro',
    icon: '🌙',
    colors: {
      bgPrimary: 'from-gray-900 via-gray-900 to-gray-950',
      bgSecondary: 'bg-gray-800/90',
      bgTertiary: 'bg-gray-900',
      bgCard: 'bg-gray-800/90 backdrop-blur-sm',
      bgCardHover: 'hover:bg-gray-800',
      textPrimary: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-500',
      accent: 'bg-primary-500',
      accentHover: 'hover:bg-primary-400',
      accentLight: 'bg-primary-900/50',
      success: 'text-emerald-400',
      successLight: 'bg-emerald-900/30 border-emerald-800',
      error: 'text-red-400',
      errorLight: 'bg-red-900/30 border-red-800',
      border: 'border-gray-700',
      borderHover: 'hover:border-gray-600',
      jsonString: 'text-emerald-400',
      jsonNumber: 'text-blue-400',
      jsonBoolean: 'text-violet-400',
      jsonNull: 'text-gray-500',
      jsonObject: 'text-orange-400',
      jsonArray: 'text-cyan-400',
      shadow: 'shadow-xl shadow-black/20',
      shadowLg: 'shadow-2xl shadow-black/30',
    },
  },
  midnight: {
    name: 'midnight',
    label: 'Medianoche',
    icon: '🌌',
    colors: {
      bgPrimary: 'from-slate-950 via-indigo-950 to-slate-950',
      bgSecondary: 'bg-slate-900/90',
      bgTertiary: 'bg-slate-950',
      bgCard: 'bg-slate-900/80 backdrop-blur-sm',
      bgCardHover: 'hover:bg-slate-800/80',
      textPrimary: 'text-slate-100',
      textSecondary: 'text-slate-300',
      textMuted: 'text-slate-500',
      accent: 'bg-indigo-500',
      accentHover: 'hover:bg-indigo-400',
      accentLight: 'bg-indigo-900/50',
      success: 'text-teal-400',
      successLight: 'bg-teal-900/30 border-teal-800',
      error: 'text-rose-400',
      errorLight: 'bg-rose-900/30 border-rose-800',
      border: 'border-slate-700',
      borderHover: 'hover:border-slate-600',
      jsonString: 'text-teal-400',
      jsonNumber: 'text-indigo-400',
      jsonBoolean: 'text-purple-400',
      jsonNull: 'text-slate-500',
      jsonObject: 'text-amber-400',
      jsonArray: 'text-sky-400',
      shadow: 'shadow-xl shadow-indigo-950/50',
      shadowLg: 'shadow-2xl shadow-indigo-950/60',
    },
  },
  forest: {
    name: 'forest',
    label: 'Bosque',
    icon: '🌲',
    colors: {
      bgPrimary: 'from-emerald-50 via-green-50 to-teal-50',
      bgSecondary: 'bg-white/80',
      bgTertiary: 'bg-emerald-50/50',
      bgCard: 'bg-white/80 backdrop-blur-sm',
      bgCardHover: 'hover:shadow-lg hover:shadow-emerald-100',
      textPrimary: 'text-emerald-950',
      textSecondary: 'text-emerald-800',
      textMuted: 'text-emerald-600',
      accent: 'bg-emerald-600',
      accentHover: 'hover:bg-emerald-700',
      accentLight: 'bg-emerald-100',
      success: 'text-green-700',
      successLight: 'bg-green-50 border-green-200',
      error: 'text-red-700',
      errorLight: 'bg-red-50 border-red-200',
      border: 'border-emerald-200',
      borderHover: 'hover:border-emerald-300',
      jsonString: 'text-green-600',
      jsonNumber: 'text-teal-600',
      jsonBoolean: 'text-lime-600',
      jsonNull: 'text-emerald-400',
      jsonObject: 'text-amber-600',
      jsonArray: 'text-cyan-600',
      shadow: 'shadow-lg shadow-emerald-100',
      shadowLg: 'shadow-xl shadow-emerald-200',
    },
  },
  sunset: {
    name: 'sunset',
    label: 'Atardecer',
    icon: '🌅',
    colors: {
      bgPrimary: 'from-orange-50 via-rose-50 to-purple-50',
      bgSecondary: 'bg-white/80',
      bgTertiary: 'bg-orange-50/50',
      bgCard: 'bg-white/80 backdrop-blur-sm',
      bgCardHover: 'hover:shadow-lg hover:shadow-orange-100',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-500',
      accent: 'bg-orange-500',
      accentHover: 'hover:bg-orange-600',
      accentLight: 'bg-orange-100',
      success: 'text-emerald-700',
      successLight: 'bg-emerald-50 border-emerald-200',
      error: 'text-rose-700',
      errorLight: 'bg-rose-50 border-rose-200',
      border: 'border-orange-200',
      borderHover: 'hover:border-orange-300',
      jsonString: 'text-rose-600',
      jsonNumber: 'text-orange-600',
      jsonBoolean: 'text-purple-600',
      jsonNull: 'text-gray-500',
      jsonObject: 'text-amber-600',
      jsonArray: 'text-pink-600',
      shadow: 'shadow-lg shadow-orange-100',
      shadowLg: 'shadow-xl shadow-orange-200',
    },
  },
}

const STORAGE_KEY = 'json-visualizer-theme'

function getStoredTheme(): ThemeName {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && stored in themes) {
    return stored as ThemeName
  }
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

const currentThemeName = ref<ThemeName>(getStoredTheme())

export function useTheme() {
  const currentTheme = computed(() => themes[currentThemeName.value])
  const allThemes = computed(() => Object.values(themes))

  function setTheme(themeName: ThemeName): void {
    currentThemeName.value = themeName
    localStorage.setItem(STORAGE_KEY, themeName)

    // Update document class for dark mode detection
    if (themeName === 'dark' || themeName === 'midnight') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function cycleTheme(): void {
    const themeNames = Object.keys(themes) as ThemeName[]
    const currentIndex = themeNames.indexOf(currentThemeName.value)
    const nextIndex = (currentIndex + 1) % themeNames.length
    const nextTheme = themeNames[nextIndex]
    if (nextTheme) {
      setTheme(nextTheme)
    }
  }

  // Initialize dark class on mount
  if (typeof window !== 'undefined') {
    if (currentThemeName.value === 'dark' || currentThemeName.value === 'midnight') {
      document.documentElement.classList.add('dark')
    }
  }

  return {
    currentTheme,
    currentThemeName,
    allThemes,
    setTheme,
    cycleTheme,
  }
}
