import { makeExampleToken } from './jwt'
import type { JwtExample } from '../types/jwt'

// Reference epoch (2026-07-21 12:00:00 UTC) used as a stable "now" for examples.
const REF_NOW = 1786315200 // 2026-07-21T12:00:00Z

const examples = (): JwtExample[] => [
  {
    id: 'valid-future',
    name: 'Valid (future exp)',
    description: 'Standard token with alg=HS256, iss/sub/aud and exp 1h ahead',
    token: makeExampleToken(
      { alg: 'HS256', typ: 'JWT' },
      {
        iss: 'https://auth.example.com',
        sub: 'user-123',
        aud: 'https://api.example.com',
        iat: REF_NOW - 300,
        nbf: REF_NOW - 60,
        exp: REF_NOW + 3600,
        name: 'Jane Doe',
        admin: true,
      },
    ),
  },
  {
    id: 'expired',
    name: 'Expired',
    description: 'exp set in the past, useful to see the "expired" state',
    token: makeExampleToken(
      { alg: 'HS256', typ: 'JWT' },
      {
        iss: 'api.example.com',
        sub: 'user-old-session',
        iat: REF_NOW - 86400,
        exp: REF_NOW - 3600,
        name: 'Expired Session',
      },
    ),
  },
  {
    id: 'not-yet',
    name: 'Not yet valid',
    description: 'nbf set in the future — token is not valid yet',
    token: makeExampleToken(
      { alg: 'HS256', typ: 'JWT', kid: 'key-2026' },
      {
        iss: 'scheduler.example.com',
        sub: 'future-task',
        iat: REF_NOW - 10,
        nbf: REF_NOW + 7200,
        exp: REF_NOW + 10800,
        task: 'send-report',
      },
    ),
  },
  {
    id: 'no-expiry',
    name: 'No expiry',
    description: 'Token without exp or nbf — status is Unknown',
    token: makeExampleToken(
      { alg: 'none', typ: 'JWT' },
      {
        sub: 'anonymous',
        iss: 'internal',
        iat: REF_NOW - 1000,
        scope: 'read:public',
      },
    ),
  },
  {
    id: 'utf8',
    name: 'UTF-8 payload',
    description: 'Payload with accented characters (ñoño, café, 中国)',
    token: makeExampleToken(
      { alg: 'HS256', typ: 'JWT' },
      {
        sub: 'user-i18n',
        iss: 'https://auth.example.com',
        iat: REF_NOW - 60,
        exp: REF_NOW + 3600,
        name: 'José García — 中国',
        email: 'josé@café.fr',
        city: 'México',
      },
    ),
  },
]

export const jwtExamples: JwtExample[] = examples()