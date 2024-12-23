import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  base:'/TakeHomeUITest/',
  test: {
    globals: true, // Enable global `expect`, `test`, etc.
    environment: 'jsdom', // Set test environment for React components
  },
})
