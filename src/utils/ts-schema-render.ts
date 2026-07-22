import type { EnumNode, JsonToTsOptions, ObjectNode, SchemaNode } from '../types/json-to-ts'

const FORMAT_COMMENT: Record<string, string> = {
  'date': 'ISO date',
  'date-time': 'ISO date-time',
  'email': 'email',
  'uuid': 'uuid',
  'url': 'url',
}

export function renderTypeScript(ir: SchemaNode, options: JsonToTsOptions): string {
  const declarations: (ObjectNode | EnumNode)[] = []
  collect(ir, declarations)

  if (declarations.length === 0 || (ir.kind !== 'object' && ir.kind !== 'enum')) {
    return `type ${options.rootName} = ${typeRef(ir)};`
  }

  return declarations.map(node => renderDeclaration(node, options)).join('\n\n')
}

function collect(node: SchemaNode, out: (ObjectNode | EnumNode)[]): void {
  switch (node.kind) {
    case 'object':
      if (!out.includes(node)) out.push(node)
      node.fields.forEach(f => collect(f.value, out))
      break
    case 'enum':
      if (!out.includes(node)) out.push(node)
      break
    case 'array':
      collect(node.element, out)
      break
    case 'union':
      node.options.forEach(o => collect(o, out))
      break
  }
}

function renderDeclaration(node: ObjectNode | EnumNode, options: JsonToTsOptions): string {
  if (node.kind === 'enum') {
    return `type ${node.name} = ${node.values.map(v => `'${v}'`).join(' | ')};`
  }
  const open = options.style === 'interface' ? `interface ${node.name} {` : `type ${node.name} = {`
  const close = options.style === 'interface' ? '}' : '};'
  const lines = node.fields.map(field => {
    const optional = field.optional ? '?' : ''
    const comment = options.emitComments ? fieldComment(field.value) : ''
    return `  ${field.key}${optional}: ${typeRef(field.value)};${comment}`
  })
  return `${open}\n${lines.join('\n')}\n${close}`
}

function fieldComment(node: SchemaNode): string {
  if (node.kind === 'primitive' && node.format) return ` // ${FORMAT_COMMENT[node.format]}`
  if (node.kind === 'array' && node.element.kind === 'union') return ' // mixed in array'
  if (node.kind === 'union') return ' // mixed in array'
  return ''
}

function typeRef(node: SchemaNode): string {
  switch (node.kind) {
    case 'primitive': return node.type
    case 'null': return 'null'
    case 'unknown': return 'unknown'
    case 'enum': return node.name
    case 'object': return node.name
    case 'array': {
      const inner = typeRef(node.element)
      return node.element.kind === 'union' ? `(${inner})[]` : `${inner}[]`
    }
    case 'union': return node.options.map(typeRef).join(' | ')
  }
}
