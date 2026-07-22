import { describe, it, expect } from 'vitest'
import { toolRegistry, findTool } from '../../src/tools/registry'
import { router } from '../../src/router'

describe('toolRegistry', () => {
  it('findTool returns the tool for a known id and undefined otherwise', () => {
    expect(findTool('base64')?.name).toBe('Base64')
    expect(findTool('does-not-exist')).toBeUndefined()
  })

  it('all tool ids are unique', () => {
    const ids = toolRegistry.map(tool => tool.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every tool has a non-empty name, description, and tags', () => {
    for (const tool of toolRegistry) {
      expect(tool.name.length, tool.id).toBeGreaterThan(0)
      expect(tool.description.length, tool.id).toBeGreaterThan(0)
      expect(tool.tags.length, tool.id).toBeGreaterThan(0)
    }
  })

  it('every active tool has a matching route at /<id>', () => {
    const routePaths = router.getRoutes().map(route => route.path)
    const activeTools = toolRegistry.filter(tool => tool.status === 'active')
    expect(activeTools.length).toBeGreaterThan(0)
    for (const tool of activeTools) {
      expect(routePaths, `missing route for active tool "${tool.id}"`).toContain(`/${tool.id}`)
    }
  })
})
