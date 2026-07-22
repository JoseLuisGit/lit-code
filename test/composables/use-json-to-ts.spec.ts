import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useJsonToTs } from '../../src/composables/use-json-to-ts'

function stubClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
  return writeText
}

describe('useJsonToTs', () => {
  it('produces TypeScript output for valid JSON', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    expect(tool.isValid.value).toBe(true)
    expect(tool.output.value).toContain('interface Root {')
    expect(tool.output.value).toContain('id: number;')
    expect(tool.hasOutput.value).toBe(true)
  })

  it('surfaces an error and empty output for invalid JSON', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{bad'
    await nextTick()
    expect(tool.isValid.value).toBe(false)
    expect(tool.errorMessage.value).toBeTruthy()
    expect(tool.output.value).toBe('')
  })

  it('reacts to option changes', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    expect(tool.output.value).toContain('interface Root')
    tool.options.style = 'type'
    await nextTick()
    expect(tool.output.value).toContain('type Root = {')
  })

  it('respects a custom root name', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    tool.options.rootName = 'User'
    await nextTick()
    expect(tool.output.value).toContain('interface User {')
  })

  it('loadExample fills valid JSON that produces output', async () => {
    const tool = useJsonToTs()
    tool.loadExample()
    await nextTick()
    expect(tool.isValid.value).toBe(true)
    expect(tool.output.value).toContain('interface Profile')
    expect(tool.output.value).toContain('interface Post')
  })

  it('clearAll resets text and output', async () => {
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    tool.clearAll()
    await nextTick()
    expect(tool.jsonText.value).toBe('')
    expect(tool.output.value).toBe('')
  })
})

describe('useJsonToTs — clipboard', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('copyOutput writes to clipboard and resets hasCopied after 2s', async () => {
    const writeText = stubClipboard()
    const tool = useJsonToTs()
    tool.jsonText.value = '{"id": 1}'
    await nextTick()
    await tool.copyOutput()
    expect(writeText).toHaveBeenCalledWith(tool.output.value)
    expect(tool.hasCopied.value).toBe(true)
    vi.advanceTimersByTime(2000)
    expect(tool.hasCopied.value).toBe(false)
  })
})
