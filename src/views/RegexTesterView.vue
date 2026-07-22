<script setup lang="ts">
import { ref, computed } from 'vue'
import ToolHeader from '../components/ToolHeader.vue'
import { useTheme } from '../composables/use-theme'
import { useRegexTester, FLAG_INFO } from '../composables/use-regex-tester'
import { SNIPPET_LANGUAGES } from '../utils/regex-snippets'
import { regexExamples } from '../utils/regex-examples'

const { currentTheme } = useTheme()
const isDarkTheme = computed(() =>
  currentTheme.value.name === 'dark' || currentTheme.value.name === 'midnight'
)

const {
  pattern,
  flagsString,
  testText,
  replacement,
  mode,
  snippetLang,
  matches,
  error,
  truncated,
  matchCount,
  hasPattern,
  hasText,
  hasMatches,
  isValid,
  hasCopied,
  highlightSegments,
  replaceResult,
  snippet,
  snippetNotes,
  selectedMatchIndex,
  toggleFlag,
  hasFlag,
  loadExample,
  selectMatch,
  copySnippet,
  clearAll,
} = useRegexTester()

type RightTab = 'matches' | 'replace' | 'snippets'
const rightTab = ref<RightTab>('matches')
const showHelp = ref(false)

// --- Highlight overlay (textarea over highlighted <pre>) --------------------
const highlightPre = ref<HTMLElement>()
const textArea = ref<HTMLTextAreaElement>()

function syncScroll(): void {
  if (highlightPre.value && textArea.value) {
    highlightPre.value.scrollTop = textArea.value.scrollTop
    highlightPre.value.scrollLeft = textArea.value.scrollLeft
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const overlayHtml = computed(() => {
  if (!hasText.value) return ''
  return highlightSegments.value
    .map(segment => {
      const safe = escapeHtml(segment.text)
      return segment.isMatch
        ? `<mark class="regex-mark" data-match="${segment.matchIndex}">${safe}</mark>`
        : safe
    })
    .join('') + '\n' // trailing newline keeps <pre> height in sync with textarea
})

// --- Shared theme classes ----------------------------------------------------
const cardClass = computed(() => [
  currentTheme.value.colors.bgCard,
  currentTheme.value.colors.shadow,
  isDarkTheme.value ? 'ring-1 ring-white/10' : 'border border-white/50',
])

const tabActiveClass = computed(() =>
  isDarkTheme.value
    ? 'bg-white/15 text-white'
    : 'bg-white text-gray-900 shadow-sm'
)

const tabInactiveClass = computed(() =>
  isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200'
    : 'text-gray-500 hover:text-gray-800'
)

const ghostBtn = computed(() =>
  isDarkTheme.value
    ? 'text-gray-400 hover:text-gray-200 hover:bg-white/10'
    : 'text-gray-500 hover:text-gray-700 hover:bg-black/5'
)

const flagBtnBase = computed(() =>
  isDarkTheme.value
    ? 'text-gray-500 hover:text-gray-300 hover:bg-white/10'
    : 'text-gray-400 hover:text-gray-700 hover:bg-black/5'
)

const monoBoxClass = 'font-mono text-sm'
</script>

<template>
  <div class="max-w-[1800px] mx-auto flex flex-col gap-4 pb-8">
    <ToolHeader
      tool-name="Regex Tester"
      tool-description="Test and debug regular expressions with live highlighting"
    />

    <!-- Pattern bar -->
    <div
      class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300 flex-shrink-0"
      :class="cardClass"
    >
      <div class="flex flex-col md:flex-row md:items-center gap-3">
        <!-- Pattern input with / delimiters -->
        <div
          class="flex-1 flex items-center gap-1 rounded-xl px-3 py-2 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary-500/50"
          :class="[
            currentTheme.colors.bgCard,
            isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
          ]"
        >
          <span class="font-mono text-sm select-none" :class="currentTheme.colors.textMuted">/</span>
          <input
            v-model="pattern"
            type="text"
            spellcheck="false"
            placeholder="Enter a regular expression..."
            class="flex-1 min-w-0 bg-transparent font-mono text-sm outline-none"
            :class="[
              currentTheme.colors.textPrimary,
              isDarkTheme ? 'placeholder:text-gray-600' : 'placeholder:text-gray-300',
            ]"
          />
          <span class="font-mono text-sm select-none" :class="currentTheme.colors.textMuted">/</span>
          <span class="font-mono text-sm text-primary-500 select-none min-w-[1ch]">{{ flagsString }}</span>
        </div>

        <!-- Flag toggles -->
        <div class="flex items-center gap-1 flex-shrink-0">
          <button
            v-for="info in FLAG_INFO"
            :key="info.flag"
            :title="`${info.label} — ${info.description}`"
            class="w-8 h-8 rounded-lg font-mono text-sm font-semibold transition-all duration-200"
            :class="hasFlag(info.flag)
              ? 'bg-primary-600 text-white shadow-sm'
              : flagBtnBase"
            @click="toggleFlag(info.flag)"
          >{{ info.flag }}</button>
        </div>
      </div>

      <!-- Error -->
      <p
        v-if="error"
        class="text-xs px-3 py-2 rounded-lg transition-colors duration-300"
        :class="isDarkTheme ? 'bg-red-900/40 text-red-300' : 'bg-red-50 text-red-700 border border-red-200'"
      >{{ error.message }}</p>
    </div>

    <!-- Mode tabs -->
    <div class="flex justify-center flex-shrink-0">
      <div
        class="inline-flex rounded-xl p-1 gap-1 transition-colors duration-300"
        :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'"
      >
        <button
          class="px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
          :class="mode === 'match' ? tabActiveClass : tabInactiveClass"
          @click="mode = 'match'; rightTab = 'matches'"
        >Match</button>
        <button
          class="px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
          :class="mode === 'replace' ? tabActiveClass : tabInactiveClass"
          @click="mode = 'replace'; rightTab = 'replace'"
        >Replace</button>
      </div>
    </div>

    <!-- Two-panel layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

      <!-- LEFT: Test string -->
      <div
        class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300"
        :class="cardClass"
      >
        <div class="flex items-center justify-between flex-shrink-0">
          <span
            class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >Test String</span>
          <div class="flex items-center gap-2">
            <span
              v-if="isValid && hasText"
              class="text-[11px] font-medium px-2 py-0.5 rounded-full transition-colors duration-300"
              :class="hasMatches
                ? (isDarkTheme ? 'bg-emerald-900/40 text-emerald-300' : 'bg-emerald-50 text-emerald-700')
                : (isDarkTheme ? 'bg-white/10 text-gray-400' : 'bg-black/5 text-gray-500')"
            >
              {{ matchCount }} match{{ matchCount === 1 ? '' : 'es' }}{{ truncated ? '+' : '' }}
            </span>
            <button
              v-if="hasPattern || hasText"
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
              :class="ghostBtn"
              @click="clearAll"
            >Clear</button>
          </div>
        </div>

        <!-- Highlight overlay -->
        <div
          class="relative flex-1 min-h-[220px] lg:min-h-[320px] rounded-xl overflow-hidden transition-all duration-200"
          :class="isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50'"
        >
          <pre
            ref="highlightPre"
            aria-hidden="true"
            class="absolute inset-0 m-0 p-3 whitespace-pre-wrap break-words overflow-auto pointer-events-none"
            :class="[monoBoxClass, currentTheme.colors.textPrimary]"
          ><code v-html="overlayHtml" /></pre>
          <textarea
            ref="textArea"
            v-model="testText"
            spellcheck="false"
            placeholder="Type or paste text to test against..."
            class="absolute inset-0 w-full h-full resize-none bg-transparent p-3 outline-none caret-primary-500 whitespace-pre-wrap break-words overflow-auto"
            :class="[
              monoBoxClass,
              hasText
                ? 'text-transparent'
                : currentTheme.colors.textPrimary,
              isDarkTheme ? 'placeholder:text-gray-600' : 'placeholder:text-gray-300',
            ]"
            @scroll="syncScroll"
          />
        </div>
        <!-- Replacement input (replace mode) -->
        <div v-if="mode === 'replace'" class="flex flex-col gap-1 flex-shrink-0">
          <span
            class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >Replacement</span>
          <input
            v-model="replacement"
            type="text"
            spellcheck="false"
            placeholder="e.g. [$1] or $<name> — use $1, $&, $` , $'"
            class="rounded-xl px-3 py-2 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50"
            :class="[
              currentTheme.colors.bgCard,
              currentTheme.colors.textPrimary,
              isDarkTheme
                ? 'ring-1 ring-white/10 placeholder:text-gray-600'
                : 'border border-white/50 placeholder:text-gray-300',
            ]"
          />
        </div>
      </div>

      <!-- RIGHT: Results -->
      <div
        class="rounded-2xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-300"
        :class="cardClass"
      >
        <!-- Sub-tabs -->
        <div class="flex items-center justify-between flex-shrink-0">
          <div
            class="inline-flex rounded-lg p-0.5 gap-0.5 transition-colors duration-300"
            :class="isDarkTheme ? 'bg-white/10' : 'bg-black/5'"
          >
            <button
              class="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
              :class="rightTab === 'matches' ? tabActiveClass : tabInactiveClass"
              @click="rightTab = 'matches'"
            >Matches</button>
            <button
              class="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
              :class="rightTab === 'replace' ? tabActiveClass : tabInactiveClass"
              @click="rightTab = 'replace'"
            >Replace</button>
            <button
              class="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
              :class="rightTab === 'snippets' ? tabActiveClass : tabInactiveClass"
              @click="rightTab = 'snippets'"
            >Code</button>
          </div>
          <button
            v-if="rightTab === 'snippets' && hasPattern"
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
            :class="ghostBtn"
            @click="copySnippet"
          >
            <svg v-if="!hasCopied" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <svg v-else class="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ hasCopied ? 'Copied!' : 'Copy' }}
          </button>
        </div>

        <!-- MATCHES TAB -->
        <template v-if="rightTab === 'matches'">
          <!-- Empty state -->
          <div
            v-if="!hasMatches"
            class="flex-1 min-h-[220px] lg:min-h-[320px] flex flex-col items-center justify-center gap-2 transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >
            <svg class="w-10 h-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p class="text-xs">
              {{ !hasPattern ? 'Enter a pattern to start matching' : !hasText ? 'Add a test string' : 'No matches found' }}
            </p>
          </div>

          <!-- Match list -->
          <div v-else class="flex-1 min-h-[220px] lg:min-h-[320px] overflow-y-auto flex flex-col gap-1.5 pr-1">
            <button
              v-for="match in matches"
              :key="match.index"
              class="text-left rounded-lg px-3 py-2 transition-all duration-150 flex flex-col gap-1"
              :class="[
                selectedMatchIndex === match.index
                  ? (isDarkTheme ? 'bg-primary-900/50 ring-1 ring-primary-500/50' : 'bg-primary-50 ring-1 ring-primary-200')
                  : (isDarkTheme ? 'hover:bg-white/5' : 'hover:bg-black/5'),
              ]"
              @click="selectMatch(selectedMatchIndex === match.index ? null : match.index)"
            >
              <div class="flex items-center justify-between gap-2">
                <span class="font-mono text-xs truncate" :class="currentTheme.colors.textPrimary">
                  {{ match.text || '(empty match)' }}
                </span>
                <span class="text-[10px] flex-shrink-0" :class="currentTheme.colors.textMuted">
                  #{{ match.index + 1 }} · {{ match.start }}–{{ match.end }}
                </span>
              </div>
              <div v-if="match.groups.length > 0" class="flex flex-wrap gap-1">
                <span
                  v-for="group in match.groups"
                  :key="group.index"
                  class="text-[10px] font-mono px-1.5 py-0.5 rounded transition-colors duration-300"
                  :class="isDarkTheme ? 'bg-white/10 text-gray-300' : 'bg-black/5 text-gray-600'"
                  :title="group.value === undefined ? 'Unmatched group' : group.value"
                >
                  {{ group.name ? `${group.name}` : `$${group.index}` }}={{ group.value === undefined ? '∅' : `"${group.value}"` }}
                </span>
              </div>
            </button>

            <p
              v-if="truncated"
              class="text-[11px] px-1 pt-1 transition-colors duration-300"
              :class="currentTheme.colors.textMuted"
            >Showing the first {{ matchCount }} matches (limit reached).</p>
          </div>
        </template>

        <!-- REPLACE TAB -->
        <template v-else-if="rightTab === 'replace'">
          <div
            v-if="mode !== 'replace'"
            class="flex-1 min-h-[220px] lg:min-h-[320px] flex flex-col items-center justify-center gap-2 transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >
            <p class="text-xs">Switch to <button class="text-primary-500 font-semibold hover:underline" @click="mode = 'replace'">Replace mode</button> to preview substitutions</p>
          </div>
          <div
            v-else-if="!isValid || !hasText"
            class="flex-1 min-h-[220px] lg:min-h-[320px] flex flex-col items-center justify-center gap-2 transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >
            <p class="text-xs">{{ !hasPattern ? 'Enter a pattern first' : 'Add a test string' }}</p>
          </div>
          <pre
            v-else
            class="flex-1 min-h-[220px] lg:min-h-[320px] m-0 p-3 rounded-xl whitespace-pre-wrap break-words overflow-auto transition-all duration-200"
            :class="[
              monoBoxClass,
              currentTheme.colors.textPrimary,
              isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
            ]"
          >{{ replaceResult }}</pre>
        </template>

        <!-- SNIPPETS TAB -->
        <template v-else>
          <!-- Language selector -->
          <div class="flex items-center gap-1 flex-shrink-0">
            <button
              v-for="lang in SNIPPET_LANGUAGES"
              :key="lang.id"
              class="px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200"
              :class="snippetLang === lang.id
                ? 'bg-primary-600 text-white shadow-sm'
                : flagBtnBase"
              @click="snippetLang = lang.id"
            >{{ lang.label }}</button>
          </div>

          <div
            v-if="!hasPattern"
            class="flex-1 min-h-[180px] flex flex-col items-center justify-center gap-2 transition-colors duration-300"
            :class="currentTheme.colors.textMuted"
          >
            <p class="text-xs">Enter a pattern to generate code</p>
          </div>
          <template v-else>
            <pre
              class="flex-1 min-h-[180px] m-0 p-3 rounded-xl text-xs whitespace-pre-wrap break-words overflow-auto transition-all duration-200"
              :class="[
                monoBoxClass,
                currentTheme.colors.textPrimary,
                isDarkTheme ? 'ring-1 ring-white/10' : 'border border-white/50',
              ]"
            >{{ snippet }}</pre>
            <p
              v-for="note in snippetNotes"
              :key="note"
              class="text-[11px] px-3 py-2 rounded-lg flex-shrink-0 transition-colors duration-300"
              :class="isDarkTheme ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-50 text-amber-700 border border-amber-200'"
            >{{ note }}</p>
          </template>
        </template>
      </div>
    </div>

    <!-- Examples & Help (collapsible) -->
    <div
      class="rounded-2xl transition-all duration-300"
      :class="cardClass"
    >
      <button
        class="w-full flex items-center justify-between p-4 md:p-5 transition-all duration-200"
        @click="showHelp = !showHelp"
      >
        <span
          class="text-xs font-semibold uppercase tracking-wide transition-colors duration-300"
          :class="currentTheme.colors.textMuted"
        >Examples &amp; Help</span>
        <svg
          class="w-4 h-4 transition-transform duration-300"
          :class="[currentTheme.colors.textMuted, showHelp ? 'rotate-180' : '']"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div v-if="showHelp" class="px-4 md:px-5 pb-4 md:pb-5 flex flex-col gap-5">
        <!-- How to use -->
        <div class="flex flex-col gap-1.5">
          <h3 class="text-sm font-semibold" :class="currentTheme.colors.textPrimary">How to use</h3>
          <ol
            class="text-xs list-decimal list-inside flex flex-col gap-1 transition-colors duration-300"
            :class="currentTheme.colors.textSecondary"
          >
            <li>Type a pattern in the <code class="font-mono">/.../</code> bar — matching runs live as you type.</li>
            <li>Toggle flags (<code class="font-mono">g i m s u y</code>) by clicking their buttons; hover for a description.</li>
            <li>Paste a test string — matches highlight in place and list on the right with capture groups.</li>
            <li>Switch to <strong>Replace</strong> to preview substitutions (<code class="font-mono">$1</code>, <code class="font-mono">$&amp;</code>, <code class="font-mono">$&lt;name&gt;</code>).</li>
            <li>Open the <strong>Code</strong> tab to copy ready-to-use snippets in TypeScript, JavaScript, PHP or Java.</li>
          </ol>
        </div>

        <!-- Flags cheat sheet -->
        <div class="flex flex-col gap-1.5">
          <h3 class="text-sm font-semibold" :class="currentTheme.colors.textPrimary">Flags</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
            <div
              v-for="info in FLAG_INFO"
              :key="info.flag"
              class="flex items-baseline gap-2 text-xs rounded-lg px-2.5 py-1.5 transition-colors duration-300"
              :class="isDarkTheme ? 'bg-white/5' : 'bg-black/5'"
            >
              <code class="font-mono font-bold text-primary-500">{{ info.flag }}</code>
              <span :class="currentTheme.colors.textSecondary">{{ info.label }} — {{ info.description }}</span>
            </div>
          </div>
        </div>

        <!-- Examples grid -->
        <div class="flex flex-col gap-1.5">
          <h3 class="text-sm font-semibold" :class="currentTheme.colors.textPrimary">Examples — click to load</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            <button
              v-for="example in regexExamples"
              :key="example.id"
              class="text-left rounded-xl px-3 py-2.5 transition-all duration-200 flex flex-col gap-1"
              :class="isDarkTheme
                ? 'bg-white/5 hover:bg-white/10 ring-1 ring-white/10'
                : 'bg-black/5 hover:bg-black/10 border border-white/50'"
              @click="loadExample(example)"
            >
              <span class="text-xs font-semibold" :class="currentTheme.colors.textPrimary">{{ example.name }}</span>
              <span class="text-[11px] leading-snug" :class="currentTheme.colors.textMuted">{{ example.description }}</span>
              <code class="text-[10px] font-mono truncate text-primary-500">/{{ example.pattern }}/{{ example.flags.join('') }}</code>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.regex-mark {
  background-color: rgb(99 102 241 / 0.35);
  color: transparent;
  border-radius: 3px;
  outline: 1px solid rgb(99 102 241 / 0.7);
}
</style>
