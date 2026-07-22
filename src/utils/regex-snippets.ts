import type { RegexFlag, RegexMode, SnippetLanguage } from '../types/regex'
import { sortFlags } from './regex-engine'

export interface SnippetInput {
  pattern: string
  flags: RegexFlag[]
  mode: RegexMode
  replacement: string
}

export const SNIPPET_LANGUAGES: { id: SnippetLanguage; label: string }[] = [
  { id: 'typescript', label: 'TypeScript' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'php', label: 'PHP' },
  { id: 'java', label: 'Java' },
]

// --- Escaping helpers -------------------------------------------------------

function escapeJsLiteral(pattern: string): string {
  return pattern
    .replace(/\//g, '\\/')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
}

function escapePhpSingleQuoted(pattern: string): string {
  return pattern
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\//g, '\\/')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
}

function escapeJavaString(pattern: string): string {
  return pattern
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
}

// --- Flag mapping -----------------------------------------------------------

function phpModifiers(flags: RegexFlag[]): string {
  // 'g' is implicit via preg_match_all/preg_replace; 'y' has no PCRE equivalent
  const order: RegexFlag[] = ['i', 'm', 's', 'u']
  return order.filter(flag => flags.includes(flag)).join('')
}

function javaFlags(flags: RegexFlag[]): string {
  const map: Partial<Record<RegexFlag, string>> = {
    i: 'Pattern.CASE_INSENSITIVE',
    m: 'Pattern.MULTILINE',
    s: 'Pattern.DOTALL',
    u: 'Pattern.UNICODE_CHARACTER_CLASS',
  }
  return (['i', 'm', 's', 'u'] as RegexFlag[])
    .filter(flag => flags.includes(flag))
    .map(flag => map[flag])
    .join(' | ')
}

// --- Replacement mapping ----------------------------------------------------

// PHP preg_replace accepts $1 / ${1} just like JS, so no conversion needed.
// Java also uses $1 in Matcher.replaceAll/replacement strings — but literal
// '$' and '\' must be escaped via Matcher.quoteReplacement for literal text.
function javaReplacement(replacement: string): string {
  return replacement.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

// --- Snippet generators -----------------------------------------------------

function jsSnippet(input: SnippetInput, typed: boolean): string {
  const literal = `/${escapeJsLiteral(input.pattern)}/${sortFlags(input.flags)}`
  const textDecl = typed ? 'const text: string' : 'const text'

  if (input.mode === 'replace') {
    return [
      `${textDecl} = /* your text */ '';`,
      `const regex = ${literal};`,
      `const result${typed ? ': string' : ''} = text.replace(regex, '${input.replacement.replace(/'/g, "\\'")}');`,
      'console.log(result);',
    ].join('\n')
  }

  if (input.flags.includes('g')) {
    return [
      `${textDecl} = /* your text */ '';`,
      `const regex = ${literal};`,
      `const matches${typed ? ': RegExpExecArray[]' : ''} = [...text.matchAll(regex)];`,
      'for (const match of matches) {',
      '  console.log(match[0], match.index, match.slice(1));',
      '}',
    ].join('\n')
  }

  return [
    `${textDecl} = /* your text */ '';`,
    `const regex = ${literal};`,
    'const match = regex.exec(text);',
    'if (match) {',
    '  console.log(match[0], match.index, match.slice(1));',
    '}',
  ].join('\n')
}

function phpSnippet(input: SnippetInput): string {
  const regex = `'/${escapePhpSingleQuoted(input.pattern)}/${phpModifiers(input.flags)}'`

  if (input.mode === 'replace') {
    return [
      '$text = \'/* your text */\';',
      `$result = preg_replace(${regex}, '${input.replacement.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}', $text);`,
      'echo $result;',
    ].join('\n')
  }

  if (input.flags.includes('g')) {
    return [
      '$text = \'/* your text */\';',
      `preg_match_all(${regex}, $text, $matches, PREG_OFFSET_CAPTURE);`,
      'foreach ($matches[0] as $match) {',
      '    // $match[0] = matched text, $match[1] = offset',
      '    print_r($match);',
      '}',
    ].join('\n')
  }

  return [
    '$text = \'/* your text */\';',
    `if (preg_match(${regex}, $text, $matches)) {`,
    '    print_r($matches);',
    '}',
  ].join('\n')
}

function javaSnippet(input: SnippetInput): string {
  const flagsArg = javaFlags(input.flags)
  const compileCall = flagsArg
    ? `Pattern.compile("${escapeJavaString(input.pattern)}", ${flagsArg})`
    : `Pattern.compile("${escapeJavaString(input.pattern)}")`

  if (input.mode === 'replace') {
    return [
      'import java.util.regex.*;',
      '',
      'String text = "/* your text */";',
      `Pattern pattern = ${compileCall};`,
      'Matcher matcher = pattern.matcher(text);',
      `String result = matcher.replaceAll("${javaReplacement(input.replacement)}");`,
      'System.out.println(result);',
    ].join('\n')
  }

  return [
    'import java.util.regex.*;',
    '',
    'String text = "/* your text */";',
    `Pattern pattern = ${compileCall};`,
    'Matcher matcher = pattern.matcher(text);',
    'while (matcher.find()) {',
    '    System.out.println(matcher.group() + " at " + matcher.start());',
    '    for (int i = 1; i <= matcher.groupCount(); i++) {',
    '        System.out.println("  group " + i + ": " + matcher.group(i));',
    '    }',
    '}',
  ].join('\n')
}

export function generateSnippet(language: SnippetLanguage, input: SnippetInput): string {
  switch (language) {
    case 'typescript':
      return jsSnippet(input, true)
    case 'javascript':
      return jsSnippet(input, false)
    case 'php':
      return phpSnippet(input)
    case 'java':
      return javaSnippet(input)
  }
}

// Notes about flags that do not translate to the target language
export function unsupportedFlagNotes(language: SnippetLanguage, flags: RegexFlag[]): string[] {
  const notes: string[] = []
  if ((language === 'php' || language === 'java') && flags.includes('y')) {
    notes.push("The 'y' (sticky) flag has no equivalent in this language and was omitted.")
  }
  return notes
}
