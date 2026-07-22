import type {
  ClaimAnalysis,
  ClaimTime,
  DecodedJwt,
  JwtDecodeResult,
  JwtHeader,
  JwtPayload,
  TokenStatus,
} from '../types/jwt'

// --- Base64URL helpers ----------------------------------------------------

function base64UrlToBase64(input: string): string {
  let s = input.replace(/-/g, '+').replace(/_/g, '/')
  const pad = s.length % 4
  if (pad) s += '='.repeat(4 - pad)
  return s
}

export function base64UrlDecode(input: string): string {
  const b64 = base64UrlToBase64(input)
  const binary = atob(b64)
  // Decode UTF-8: percent-encode each byte then decodeURIComponent
  const percentEncoded = binary
    .split('')
    .map(c => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
    .join('')
  return decodeURIComponent(percentEncoded)
}

function utf8ToBase64Url(input: string): string {
  const percentEncoded = encodeURIComponent(input)
    .replace(/%([0-9A-F]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
  const b64 = btoa(percentEncoded)
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

// --- Token construction (for examples) ------------------------------------

export function makeExampleToken(header: JwtHeader, payload: JwtPayload): string {
  const headerPart = utf8ToBase64Url(JSON.stringify(header))
  const payloadPart = utf8ToBase64Url(JSON.stringify(payload))
  const signaturePart = utf8ToBase64Url('signature-not-verified-mock-signature')
  return `${headerPart}.${payloadPart}.${signaturePart}`
}

// --- Decode ----------------------------------------------------------------

export function decodeJwt(token: string): JwtDecodeResult {
  const trimmed = token.trim()
  if (!trimmed) {
    return { ok: false, error: 'Token is empty.' }
  }

  const parts = trimmed.split('.')
  if (parts.length < 3) {
    return {
      ok: false,
      error: 'Token must have 3 parts separated by dots (header.payload.signature).',
    }
  }

  const [headerPart, payloadPart, ...rest] = parts
  const signature = rest.join('.')
  if (!signature) {
    return { ok: false, error: 'Signature part is empty.' }
  }

  let headerJson: string
  try {
    headerJson = base64UrlDecode(headerPart!)
  } catch {
    return { ok: false, error: 'Invalid header encoding — not valid Base64URL.' }
  }

  let payloadJson: string
  try {
    payloadJson = base64UrlDecode(payloadPart!)
  } catch {
    return { ok: false, error: 'Invalid payload encoding — not valid Base64URL.' }
  }

  let header: JwtHeader
  try {
    header = JSON.parse(headerJson)
  } catch (e) {
    return { ok: false, error: `Header is not valid JSON: ${e instanceof Error ? e.message : 'parse error'}` }
  }

  let payload: JwtPayload
  try {
    payload = JSON.parse(payloadJson)
  } catch (e) {
    return { ok: false, error: `Payload is not valid JSON: ${e instanceof Error ? e.message : 'parse error'}` }
  }

  const decoded: DecodedJwt = { header, payload, signature }
  return { ok: true, ...decoded }
}

// --- Claim analysis --------------------------------------------------------

function relativeTime(diffSeconds: number): string {
  const abs = Math.abs(diffSeconds)
  const future = diffSeconds >= 0

  let value: string
  if (abs < 60) {
    value = `${Math.round(abs)}s`
  } else if (abs < 3600) {
    value = `${Math.round(abs / 60)}m`
  } else if (abs < 86400) {
    value = `${Math.round(abs / 3600)}h`
  } else if (abs < 31536000) {
    value = `${Math.round(abs / 86400)}d`
  } else {
    value = `${Math.round(abs / 31536000)}y`
  }

  return future ? `in ${value}` : `${value} ago`
}

function buildClaimTime(rawEpoch: number, nowSeconds: number): ClaimTime {
  const date = new Date(rawEpoch * 1000)
  const abs = date.toLocaleString()
  const rel = relativeTime(rawEpoch - nowSeconds)
  return { raw: rawEpoch, date, absolute: abs, relative: rel }
}

export function analyzeClaims(payload: JwtPayload, nowMs: number): ClaimAnalysis {
  const nowSeconds = Math.floor(nowMs / 1000)

  let status: TokenStatus = 'unknown'
  let statusLabel = 'Unknown — no exp/nbf claims'

  if (typeof payload.exp === 'number') {
    if (nowMs >= payload.exp * 1000) {
      status = 'expired'
      statusLabel = 'Expired'
    } else if (typeof payload.nbf === 'number' && nowMs < payload.nbf * 1000) {
      status = 'not-yet'
      statusLabel = 'Not yet valid'
    } else {
      status = 'valid'
      statusLabel = 'Valid'
    }
  } else if (typeof payload.nbf === 'number') {
    if (nowMs < payload.nbf * 1000) {
      status = 'not-yet'
      statusLabel = 'Not yet valid'
    } else {
      status = 'valid'
      statusLabel = 'Valid (no exp)'
    }
  }

  return {
    status,
    statusLabel,
    exp: typeof payload.exp === 'number' ? buildClaimTime(payload.exp, nowSeconds) : null,
    iat: typeof payload.iat === 'number' ? buildClaimTime(payload.iat, nowSeconds) : null,
    nbf: typeof payload.nbf === 'number' ? buildClaimTime(payload.nbf, nowSeconds) : null,
    iss: payload.iss ?? null,
    sub: payload.sub ?? null,
    aud: payload.aud ?? null,
    jti: payload.jti ?? null,
  }
}