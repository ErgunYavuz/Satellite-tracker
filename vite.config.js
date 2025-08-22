// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ESM-safe dirname
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [vue()],
    base: '/Satellite-tracker/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
