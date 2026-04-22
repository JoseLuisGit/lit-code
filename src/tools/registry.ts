export type ToolStatus = 'active' | 'coming-soon'

export interface Tool {
  id: string
  name: string
  description: string
  icon: string
  iconViewBox: string
  status: ToolStatus
  tags: string[]
}

export const toolRegistry: Tool[] = [
  {
    id: 'json-viewer',
    name: 'JSON Viewer',
    description: 'Visualize, format, and explore JSON data structures with an interactive tree view and 3D graph.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['data', 'format', 'json'],
  },
  {
    id: 'text-compare',
    name: 'Text Compare',
    description: 'Compare two texts side-by-side with line and character-level diff highlighting.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['diff', 'text', 'compare'],
  },
  {
    id: 'base64',
    name: 'Base64 Encoder',
    description: 'Encode and decode Base64 strings instantly with support for files and plain text.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    iconViewBox: '0 0 24 24',
    status: 'coming-soon',
    tags: ['encoding', 'format'],
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions with live match highlighting and group capture display.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    iconViewBox: '0 0 24 24',
    status: 'coming-soon',
    tags: ['regex', 'text'],
  },
  {
    id: 'color-palette',
    name: 'Color Palette',
    description: 'Convert between HEX, RGB, and HSL color formats and build accessible color palettes.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    iconViewBox: '0 0 24 24',
    status: 'coming-soon',
    tags: ['design', 'color'],
  },
]

export function findTool(id: string): Tool | undefined {
  return toolRegistry.find(tool => tool.id === id)
}
