<script setup lang="ts">
import { computed, ref } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'
import { useJsonHighlighter } from '../composables/use-json-highlighter'
import { useJwt } from '../composables/use-jwt'
import { jwtExamples } from '../utils/jwt-examples'
import type { ClaimTime } from '../types/jwt'

const { currentTheme } = useTheme()
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
  token,
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
} = useJwt()

const { highlightedHtml: headerHtml } = useJsonHighlighter(
  () => headerJsonString.value,
  () => currentTheme.value,
)
const { highlightedHtml: payloadHtml } = useJsonHighlighter(
  () => payloadJsonString.value,
  () => currentTheme.value,
)

const showExamples = ref(false)

// Status styling
const statusStyles = computed(() => {
  const status = claims.value?.status
  if (status === 'valid') {
    return {
      chip: isDarkTheme.value ? 'bg-emerald-900/40 text-emerald-300' : 'bg-emerald-50 text-emerald-700',
      dot: 'bg-emerald-500',
    }
  }
  if (status === 'expired') {
    return {
      chip: isDarkTheme.value ? 'bg-red-900/40 text-red-300' : 'bg-red-50 text-red-700',
      dot: 'bg-red-500',
    }
  }
  if (status === 'not-yet') {
    return {
      chip: isDarkTheme.value ? 'bg-amber-900/40 text-amber-300' : 'bg-amber-50 text-amber-700',
      dot: 'bg-amber-500',
    }
  }
  return {
    chip: isDarkTheme.value ? 'bg-white/10 text-gray-400' : 'bg-black/5 text-gray-500',
    dot: 'bg-gray-400',
  }
})

const statusSub = computed(() => {
  const c = claims.value
  if (!c) return ''
  if (c.status === 'valid' && c.exp) return `expires ${c.exp.relative}`
  if (c.status === 'expired' && c.exp) return `${c.exp.relative}`
  if (c.status === 'not-yet' && c.nbf) return `valid ${c.nbf.relative}`
  if (c.status === 'unknown') return 'no exp/nbf claims present'
  return ''
})

function formattedAud(aud: string | string[] | null): string {
  if (aud === null) return ''
  return Array.isArray(aud) ? aud.join(', ') : aud
}

const cardClass = computed(() => [
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.shadow,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-white/50',
])

const ghostBtn = computed(() =>
  isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
    : 'text-gray-500 hover:text-gray-700 hover:bg-black/5'
)

const textareaClass = computed(() => [
  'font-mono text-sm bg-transparent',
  currentTheme.value.colors.textPrimary,
  'resize-none outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50 rounded-xl p-3',
  isDarkTheme.value
    ? 'ring-1 ring-white/10 placeholder:text-gray-600'
    : 'border border-white/50 placeholder:text-gray-300',
])

function claimRows(): { label: string; value: string }[] {
  const c = claims.value
  if (!c) return []
  const rows: { label: string; value: string }[] = []
  if (c.iss) rows.push({ label: 'iss', value: c.iss })
  if (c.sub) rows.push({ label: 'sub', value: c.sub })
  if (c.aud) rows.push({ label: 'aud', value: formattedAud(c.aud) })
  if (c.jti) rows.push({ label: 'jti', value: c.jti })
  return rows
}

function timeRows(): { label: string; claim: ClaimTime }[] {
  const c = claims.value
  if (!c) return []
  const rows: { label: string; claim: ClaimTime }[] = []
  if (c.iat) rows.push({ label: 'iat', claim: c.iat })
  if (c.nbf) rows.push({ label: 'nbf', claim: c.nbf })
  if (c.exp) rows.push({ label: 'exp', claim: c.exp })
  return rows
}
</script>

<template>
  <div class="max-w-[1800px] mx-auto flex flex-col gap-4 pb-8">
    <ToolHeader
      tool-name="JWT Decoder"
      tool-description="Decode and inspect JSON Web Tokens"
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

      <!-- LEFT: Token input -->
      <div
        class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300"
        :class="cardClass"
      >
        <div class="flex items-center justify-between flex-shrink-0">
          <span
            class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >JWT Token</span>
          <div class="flex items-center gap-1">
            <button
              class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
              :class="ghostBtn"
              @click="pasteFromClipboard"
            >Paste</button>
            <button
              v-if="hasToken"
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
              :class="ghostBtn"
              @click="clearAll"
            >Clear</button>
          </div>
        </div>

        <textarea
          v-model="token"
          spellcheck="false"
          placeholder="Paste a JWT (eyJhbGciOi...)"
          class="flex-1 min-h-[280px] lg:min-h-[400px] resize-none"
          :class="textareaClass"
        />

        <p
          v-if="error"
          class="text-xs px-3 py-2 rounded-lg transition-colors duration-300"
          :class="isDarkTheme ? 'bg-red-900/40 text-red-300' : 'bg-red-50 text-red-700 border border-red-200'"
        >{{ error }}</p>

        <p
          v-if="!hasToken"
          class="text-[11px] transition-colors duration-300"
          :class="currentTheme.colors.textMuted"
        >Signature is not verified — this tool only decodes for inspection.</p>
      </div>

      <!-- RIGHT: Results -->
      <div class="flex flex-col gap-3">

        <!-- Empty state -->
        <div
          v-if="!isValid"
          class="rounded-2xl p-8 flex-1 min-h-[280px] lg:min-h-[400px] flex flex-col items-center justify-center gap-2 transition-all duration-300"
          :class="cardClass"
        >
          <svg
            class="w-10 h-10 opacity-30"
            :class="currentTheme.colors.textMuted"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.977 21.977 0 0012 11c0-2.396.5-4.672 1.39-6.724" />
          </svg>
          <p class="text-xs" :class="currentTheme.colors.textMuted">
            {{ error ? 'Fix the error to see the decoded token' : 'Paste a token to decode' }}
          </p>
        </div>

        <template v-else>
          <!-- Status card -->
          <div class="rounded-2xl p-4 flex items-center gap-3 transition-all duration-300" :class="cardClass">
            <span class="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse-soft" :class="statusStyles.dot" />
            <div class="flex flex-col">
              <span class="text-sm font-semibold" :class="currentTheme.colors.textPrimary">
                {{ claims?.statusLabel }}
              </span>
              <span v-if="statusSub" class="text-[11px]" :class="currentTheme.colors.textMuted">
                {{ statusSub }}
              </span>
            </div>
            <span
              class="ml-auto text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-300"
              :class="statusStyles.chip"
            >{{ decoded?.header?.alg ?? '—' }}</span>
          </div>

          <!-- Header card -->
          <div class="rounded-2xl p-4 flex flex-col gap-2 transition-all duration-300" :class="cardClass">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300" :class="currentTheme.colors.textMuted">Header</span>
              <button
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                :class="ghostBtn"
                @click="copyValue(headerJsonString, 'header')"
              >
                <svg v-if="!(hasCopied && copiedLabel === 'header')" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else class="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ hasCopied && copiedLabel === 'header' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre
              class="font-mono text-sm m-0 p-3 rounded-xl overflow-auto transition-colors duration-300"
              :class="[ currentTheme.colors.textPrimary, isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50' ]"
            ><code v-html="headerHtml" /></pre>
          </div>

          <!-- Payload card -->
          <div class="rounded-2xl p-4 flex flex-col gap-2 transition-all duration-300" :class="cardClass">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300" :class="currentTheme.colors.textMuted">Payload</span>
              <button
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                :class="ghostBtn"
                @click="copyValue(payloadJsonString, 'payload')"
              >
                <svg v-if="!(hasCopied && copiedLabel === 'payload')" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else class="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ hasCopied && copiedLabel === 'payload' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre
              class="font-mono text-sm m-0 p-3 rounded-xl overflow-auto transition-colors duration-300"
              :class="[ currentTheme.colors.textPrimary, isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50' ]"
            ><code v-html="payloadHtml" /></pre>
          </div>

          <!-- Registered claims -->
          <div v-if="claims" class="rounded-2xl p-4 flex flex-col gap-3 transition-all duration-300" :class="cardClass">
            <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300" :class="currentTheme.colors.textMuted">Registered Claims</span>

            <!-- Time claims -->
            <div v-if="timeRows().length > 0" class="flex flex-col gap-1.5">
              <div
                v-for="row in timeRows()"
                :key="row.label"
                class="grid grid-cols-[3rem_8rem_1fr_auto] gap-2 items-center text-xs rounded-lg px-3 py-1.5 transition-colors duration-300"
                :class="isDarkTheme ? 'bg-white/5' : 'bg-black/5'"
              >
                <code class="font-mono font-bold text-primary-500">{{ row.label }}</code>
                <span class="font-mono" :class="currentTheme.colors.textSecondary">{{ row.claim.raw }}</span>
                <span :class="currentTheme.colors.textPrimary">{{ row.claim.absolute }}</span>
                <span class="text-[11px] whitespace-nowrap" :class="currentTheme.colors.textMuted">{{ row.claim.relative }}</span>
              </div>
            </div>

            <!-- String claims -->
            <div v-if="claimRows().length > 0" class="flex flex-col gap-1.5">
              <div
                v-for="row in claimRows()"
                :key="row.label"
                class="flex items-baseline gap-2 text-xs rounded-lg px-3 py-1.5 transition-colors duration-300"
                :class="isDarkTheme ? 'bg-white/5' : 'bg-black/5'"
              >
                <code class="font-mono font-bold text-primary-500 w-8 flex-shrink-0">{{ row.label }}</code>
                <span :class="currentTheme.colors.textPrimary" class="break-all">{{ row.value }}</span>
              </div>
            </div>

            <p v-if="timeRows().length === 0 && claimRows().length === 0" class="text-xs" :class="currentTheme.colors.textMuted">
              No registered claims present in this token.
            </p>
          </div>

          <!-- Signature -->
          <div v-if="decoded" class="rounded-2xl p-4 flex flex-col gap-2 transition-all duration-300" :class="cardClass">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300" :class="currentTheme.colors.textMuted">Signature</span>
              <span class="text-[11px] px-2 py-0.5 rounded-full transition-colors duration-300" :class="isDarkTheme ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-50 text-amber-700'">not verified</span>
            </div>
            <code class="font-mono text-[11px] break-all rounded-xl px-3 py-2 transition-colors duration-300" :class="[ currentTheme.colors.textSecondary, isDarkTheme ? 'bg-white/5 ring-1 ring-white/10' : 'bg-black/5 border border-white/50' ]">
              {{ decoded.signature || '(empty)' }}
            </code>
          </div>
        </template>
      </div>
    </div>

    <!-- Examples (collapsible) -->
    <div class="rounded-2xl transition-all duration-300" :class="cardClass">
      <button
        class="w-full flex items-center justify-between p-4 md:p-5 transition-all duration-200"
        @click="showExamples = !showExamples"
      >
        <span class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300" :class="currentTheme.colors.textMuted">Examples</span>
        <svg
          class="w-4 h-4 transition-transform duration-300"
          :class="[currentTheme.colors.textMuted, showExamples ? 'rotate-180' : '']"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div v-if="showExamples" class="px-4 md:px-5 pb-4 md:pb-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
          <button
            v-for="example in jwtExamples"
            :key="example.id"
            class="text-left rounded-xl px-3 py-2.5 transition-all duration-200 flex flex-col gap-1"
            :class="isDarkTheme
              ? 'bg-white/5 hover:bg-white/10 ring-1 ring-white/10'
              : 'bg-black/5 hover:bg-black/10 border border-white/50'"
            @click="loadExample(example)"
          >
            <span class="text-xs font-semibold" :class="currentTheme.colors.textPrimary">{{ example.name }}</span>
            <span class="text-[11px] leading-snug" :class="currentTheme.colors.textMuted">{{ example.description }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>