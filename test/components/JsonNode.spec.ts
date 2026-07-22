import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import JsonNode from '../../src/components/JsonNode.vue'
import type { JsonValue } from '../../src/types/json'

function mountNode(data: JsonValue, extraProps: Record<string, unknown> = {}) {
  return mount(JsonNode, {
    props: { data, name: 'root', isRoot: true, ...extraProps },
  })
}

describe('JsonNode', () => {
  it('renders primitive values formatted', () => {
    const wrapper = mountNode('hello')
    expect(wrapper.text()).toContain('"hello"')
  })

  it('renders nested objects recursively with key names', () => {
    const wrapper = mountNode({ user: { name: 'Ada' } })
    expect(wrapper.text()).toContain('"user"')
    expect(wrapper.text()).toContain('"name"')
    expect(wrapper.text()).toContain('"Ada"')
  })

  it('shows the item count badge for containers', () => {
    const wrapper = mountNode([1, 2, 3])
    expect(wrapper.text()).toContain('3')
    expect(wrapper.find('[role="button"]').attributes('aria-expanded')).toBe('true')
  })

  it('collapses and re-expands on click', async () => {
    const wrapper = mountNode({ a: 1 })
    expect(wrapper.text()).toContain('"a"')

    await wrapper.find('[role="button"]').trigger('click')
    expect(wrapper.text()).not.toContain('"a"')
    expect(wrapper.find('[role="button"]').attributes('aria-expanded')).toBe('false')

    await wrapper.find('[role="button"]').trigger('click')
    expect(wrapper.text()).toContain('"a"')
  })

  it('starts collapsed beyond the initial expand depth', () => {
    const wrapper = mountNode({ a: { b: { c: 1 } } }, { initialExpandDepth: 1 })
    // depth 0 (root) expanded → "a" visible; depth 1 collapsed → "b" hidden
    expect(wrapper.text()).toContain('"a"')
    expect(wrapper.text()).not.toContain('"b"')
    expect(wrapper.text()).toContain('•••')
  })

  it('does not toggle primitives (no button role)', () => {
    const wrapper = mountNode(42)
    expect(wrapper.find('[role="button"]').exists()).toBe(false)
    expect(wrapper.text()).toContain('42')
  })
})
