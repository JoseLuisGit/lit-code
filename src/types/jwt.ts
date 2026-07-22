export type TokenStatus = 'valid' | 'expired' | 'not-yet' | 'unknown'

export interface JwtHeader {
  alg?: string
  typ?: string
  kid?: string
  [key: string]: unknown
}

export interface JwtPayload {
  iss?: string
  sub?: string
  aud?: string | string[]
  exp?: number
  nbf?: number
  iat?: number
  jti?: string
  [key: string]: unknown
}

export interface ClaimTime {
  raw: number
  date: Date | null
  absolute: string
  relative: string
}

export interface ClaimAnalysis {
  status: TokenStatus
  statusLabel: string
  exp: ClaimTime | null
  iat: ClaimTime | null
  nbf: ClaimTime | null
  iss: string | null
  sub: string | null
  aud: string | string[] | null
  jti: string | null
}

export interface DecodedJwt {
  header: JwtHeader
  payload: JwtPayload
  signature: string
}

export interface JwtDecodeSuccess extends DecodedJwt {
  ok: true
}

export interface JwtDecodeFailure {
  ok: false
  error: string
}

export type JwtDecodeResult = JwtDecodeSuccess | JwtDecodeFailure

export interface JwtExample {
  id: string
  name: string
  description: string
  token: string
}