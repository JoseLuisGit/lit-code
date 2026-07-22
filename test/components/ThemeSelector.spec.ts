import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import ThemeSelector from '../../src/components/ThemeSelector.vue'
import { useTheme } from '../../src/composables/use-theme'

describe('ThemeSelector', () => {
  beforeEach(() => {
    // useTheme state is a module singleton — reset to a known baseline
    localStorage.clear()
    useTheme().setTheme('light')
  })

  it('opens the dropdown listing all five themes', async () => {
    const wrapper = mount(ThemeSelector)
    expect(wrapper.find('[role="listbox"]').exists()).toBe(false)

    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[role="listbox"]').exists()).toBe(true)
    expect(wrapper.findAll('[role="option"]')).toHaveLength(5)
  })

  it('selecting a theme updates the singleton, persists it, and closes the dropdown', async () => {
    const wrapper = mount(ThemeSelector)
    await wrapper.find('button').trigger('click')

    // Options follow the theme registry order: light, dark, midnight, forest, sunset
    await wrapper.findAll('[role="option"]')[1].trigger('click')

    expect(useTheme().currentThemeName.value).toBe('dark')
    expect(localStorage.getItem('json-visualizer-theme')).toBe('dark')
    expect(wrapper.find('[role="listbox"]').exists()).toBe(false)
  })

  it('marks the active theme option as selected', async () => {
    useTheme().setTheme('forest')
    const wrapper = mount(ThemeSelector)
    await wrapper.find('button').trigger('click')

    const selected = wrapper.findAll('[role="option"]').filter(
      option => option.attributes('aria-selected') === 'true',
    )
    expect(selected).toHaveLength(1)
  })

  it('closes on Escape', async () => {
    const wrapper = mount(ThemeSelector)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[role="listbox"]').exists()).toBe(true)

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()
    expect(wrapper.find('[role="listbox"]').exists()).toBe(false)
  })
})
