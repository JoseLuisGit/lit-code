import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import { useJsonValidator } from '../../src/composables/use-json-validator'

describe('useJsonValidator', () => {
  it('validates the initial value immediately', () => {
    const { parsedData, isValid, errorMessage } = useJsonValidator('{"a": 1}')
    expect(parsedData.value).toEqual({ a: 1 })
    expect(isValid.value).toBe(true)
    expect(errorMessage.value).toBeNull()
  })

  it('parses valid JSON set after creation', async () => {
    const { jsonText, parsedData, isValid, hasError } = useJsonValidator()
    jsonText.value = '[1, 2, 3]'
    await nextTick()
    expect(parsedData.value).toEqual([1, 2, 3])
    expect(isValid.value).toBe(true)
    expect(hasError.value).toBe(false)
  })

  it('reports errors for invalid JSON', async () => {
    const { jsonText, parsedData, hasError, isValid, errorMessage } = useJsonValidator()
    jsonText.value = '{invalid}'
    await nextTick()
    expect(errorMessage.value).toBeTruthy()
    expect(hasError.value).toBe(true)
    expect(isValid.value).toBe(false)
    expect(parsedData.value).toBeNull()
  })

  it('treats empty and whitespace-only text as no content, no error', async () => {
    const { jsonText, hasContent, isValid, errorMessage } = useJsonValidator('{"a":1}')
    jsonText.value = '   '
    await nextTick()
    expect(hasContent.value).toBe(false)
    expect(isValid.value).toBe(false)
    expect(errorMessage.value).toBeNull()
  })

  it('formatJson pretty-prints with 2-space indent', () => {
    const { jsonText, formatJson } = useJsonValidator('{"a":1,"b":[2]}')
    formatJson()
    expect(jsonText.value).toBe('{\n  "a": 1,\n  "b": [\n    2\n  ]\n}')
  })

  it('formatJson keeps the text and sets the error when invalid', () => {
    const { jsonText, formatJson, errorMessage } = useJsonValidator('{oops')
    formatJson()
    expect(jsonText.value).toBe('{oops')
    expect(errorMessage.value).toBeTruthy()
  })

  it('compactJson minifies valid JSON and ignores invalid', async () => {
    const { jsonText, compactJson } = useJsonValidator('{\n  "a": 1\n}')
    compactJson()
    expect(jsonText.value).toBe('{"a":1}')

    jsonText.value = '{bad'
    await nextTick()
    compactJson()
    expect(jsonText.value).toBe('{bad')
  })

  it('clearJson resets text, error, and parsed data', async () => {
    const { jsonText, clearJson, parsedData, errorMessage, hasContent } = useJsonValidator('{bad')
    clearJson()
    await nextTick()
    expect(jsonText.value).toBe('')
    expect(parsedData.value).toBeNull()
    expect(errorMessage.value).toBeNull()
    expect(hasContent.value).toBe(false)
  })

  it('setJsonText updates the text', async () => {
    const { setJsonText, jsonText, parsedData } = useJsonValidator()
    setJsonText('true')
    await nextTick()
    expect(jsonText.value).toBe('true')
    expect(parsedData.value).toBe(true)
  })
})
