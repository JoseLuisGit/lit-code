import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/lit-code/',
  test: {
    environment: 'happy-dom',
    include: ['test/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/utils/**', 'src/composables/**', 'src/tools/**', 'src/components/**'],
      exclude: ['src/utils/regex-examples.ts', 'src/utils/jwt-examples.ts'],
    },
  },
})
