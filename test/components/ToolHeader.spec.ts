import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import ToolHeader from '../../src/components/ToolHeader.vue'

function mountHeader(props: { toolName: string; toolDescription?: string }) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component: { template: '<div />' } }],
  })
  const wrapper = mount(ToolHeader, {
    props,
    global: {
      plugins: [router],
      stubs: { ThemeSelector: true },
    },
  })
  return { wrapper, router }
}

describe('ToolHeader', () => {
  it('renders the tool name as heading', () => {
    const { wrapper } = mountHeader({ toolName: 'Regex Tester' })
    expect(wrapper.find('h1').text()).toBe('Regex Tester')
  })

  it('renders the description when provided', () => {
    const { wrapper } = mountHeader({
      toolName: 'Base64',
      toolDescription: 'Encode and decode',
    })
    expect(wrapper.text()).toContain('Encode and decode')
  })

  it('omits the description paragraph when not provided', () => {
    const { wrapper } = mountHeader({ toolName: 'Base64' })
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('navigates home when the back button is clicked', async () => {
    const { wrapper, router } = mountHeader({ toolName: 'Base64' })
    const push = vi.spyOn(router, 'push')
    await wrapper.find('button[aria-label="Go back to home"]').trigger('click')
    expect(push).toHaveBeenCalledWith('/')
  })
})
