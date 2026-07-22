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
    description: 'Visualize, format, and explore JSON data structures with an interactive tree view.',
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
    name: 'Base64',
    description: 'Encode and decode text or files to/from Base64 with LF/CRLF line ending control.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['encoding', 'base64', 'files'],
  },
  {
    id: 'image-editor',
    name: 'Image Editor',
    description: 'Crop, flip, and rotate images with interactive canvas controls and precise numeric inputs.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['image', 'edit', 'crop'],
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions with live match highlighting and group capture display.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['regex', 'text'],
  },
  {
    id: 'color-palette',
    name: 'Color Palette',
    description: 'Convert between HEX, RGB, and HSL color formats and build accessible color palettes.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['design', 'color', 'converter'],
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode and inspect JSON Web Tokens with colored header/payload and live expiry status.',
    icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.977 21.977 0 0012 11c0-2.396.5-4.672 1.39-6.724',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['jwt', 'auth', 'token'],
  },
  {
    id: 'json-to-typescript',
    name: 'JSON to TypeScript',
    description: 'Generate TypeScript interfaces from JSON with enums, format detection, and configurable output.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconViewBox: '0 0 24 24',
    status: 'active',
    tags: ['json', 'typescript', 'codegen'],
  },
]

export function findTool(id: string): Tool | undefined {
  return toolRegistry.find(tool => tool.id === id)
}
