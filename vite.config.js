import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is needed for GitHub Pages: username.github.io/uriya
  base: '/uriya/',
})
