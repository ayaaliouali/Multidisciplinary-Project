

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true
  },
  define: {
    global: 'window',
    'process.env': process.env
  },
  optimizeDeps: {
    exclude: ['@swc/core']
  }
})

