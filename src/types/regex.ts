export type RegexFlag = 'g' | 'i' | 'm' | 's' | 'u' | 'y'

export type RegexMode = 'match' | 'replace'

export type SnippetLanguage = 'typescript' | 'javascript' | 'php' | 'java'

export interface CaptureGroup {
  index: number
  name: string | null
  value: string | undefined
}

export interface RegexMatch {
  index: number
  start: number
  end: number
  text: string
  groups: CaptureGroup[]
}

export interface RegexError {
  message: string
}

export interface RegexResult {
  matches: RegexMatch[]
  truncated: boolean
  error: RegexError | null
}

export interface HighlightSegment {
  text: string
  isMatch: boolean
  matchIndex: number | null
}

export interface RegexExample {
  id: string
  name: string
  description: string
  pattern: string
  flags: RegexFlag[]
  sampleText: string
}

export interface FlagInfo {
  flag: RegexFlag
  label: string
  description: string
}
