export type JsonPrimitive = string | number | boolean | null

export type JsonValue = JsonPrimitive | JsonObject | JsonArray

export interface JsonObject {
  [key: string]: JsonValue
}

export interface JsonArray extends Array<JsonValue> {}

export type DataType = 'string' | 'number' | 'boolean' | 'null' | 'array' | 'object'

export interface JsonNodeEntry {
  key: string | number
  value: JsonValue
}

export interface ValidationResult {
  isValid: boolean
  hasError: boolean
  errorMessage: string | null
  parsedData: JsonValue | null
}
