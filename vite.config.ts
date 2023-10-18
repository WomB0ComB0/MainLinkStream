import path from 'path'
import { defineConfig } from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*"]
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        "**/*"
      ],
    }),
  ],
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  }
})