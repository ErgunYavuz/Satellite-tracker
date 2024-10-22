import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Satellite-tracker/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})