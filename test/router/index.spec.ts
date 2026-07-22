import { describe, it, expect } from 'vitest'
import { router } from '../../src/router/index'

describe('router', () => {
  it('resolves the home route', () => {
    expect(router.resolve('/').name).toBe('home')
  })

  it('resolves every tool route to its matching name', () => {
    const toolPaths = [
      'json-viewer',
      'text-compare',
      'base64',
      'image-editor',
      'color-palette',
      'regex-tester',
      'jwt-decoder',
    ]
    for (const path of toolPaths) {
      expect(router.resolve(`/${path}`).name, path).toBe(path)
    }
  })

  it('redirects unknown paths to home via the catch-all', () => {
    const resolved = router.resolve('/does-not-exist')
    expect(resolved.matched[0]?.redirect).toBe('/')
  })
})
