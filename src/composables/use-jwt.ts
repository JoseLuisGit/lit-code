import { ref, computed, onMounted, onUnmounted } from 'vue'
import { decodeJwt, analyzeClaims } from '../utils/jwt'
import type { ClaimAnalysis, DecodedJwt, JwtExample } from '../types/jwt'

export { decodeJwt, analyzeClaims }
export type { ClaimAnalysis, DecodedJwt, JwtExample }

export function useJwt() {
  const token = ref('')
  const now = ref(Date.now())
  const hasCopied = ref(false)
  const copiedLabel = ref('')

  let timer: ReturnType<typeof setInterval> | null = null

  const result = computed(() => decodeJwt(token.value))
  const decoded = computed<DecodedJwt | null>(() => (result.value.ok ? result.value : null))
  const error = computed<string | null>(() => (result.value.ok ? null : result.value.error))

  const claims = computed<ClaimAnalysis | null>(() =>
    decoded.value ? analyzeClaims(decoded.value.payload, now.value) : null,
  )

  const headerJsonString = computed(() =>
    decoded.value ? JSON.stringify(decoded.value.header, null, 2) : '',
  )
  const payloadJsonString = computed(() =>
    decoded.value ? JSON.stringify(decoded.value.payload, null, 2) : '',
  )

  const hasToken = computed(() => token.value.trim().length > 0)
  const isValid = computed(() => result.value.ok)

  async function copyValue(value: string, label: string): Promise<void> {
    if (!value) return
    await navigator.clipboard.writeText(value)
    copiedLabel.value = label
    hasCopied.value = true
    setTimeout(() => { hasCopied.value = false }, 2000)
  }

  async function pasteFromClipboard(): Promise<void> {
    try {
      const text = await navigator.clipboard.readText()
      if (text) token.value = text.trim()
    } catch { /* clipboard not available */ }
  }

  function loadExample(example: JwtExample): void {
    token.value = example.token
  }

  function clearAll(): void {
    token.value = ''
    hasCopied.value = false
  }

  onMounted(() => {
    timer = setInterval(() => { now.value = Date.now() }, 1000)
  })
  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return {
    token,
    now,
    decoded,
    error,
    claims,
    headerJsonString,
    payloadJsonString,
    hasToken,
    isValid,
    hasCopied,
    copiedLabel,
    copyValue,
    pasteFromClipboard,
    loadExample,
    clearAll,
  }
}