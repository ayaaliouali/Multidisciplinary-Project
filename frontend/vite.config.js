


import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5174,
    strictPort: true,
    historyApiFallback: true
    
    
  },
 define: {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.API_URL': JSON.stringify(process.env.API_URL),
  // Add other specific environment variables you need
},
  optimizeDeps: {
    exclude: ['@swc/core']
  }
})

