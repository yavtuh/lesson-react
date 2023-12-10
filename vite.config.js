import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math"; @import "styles/Mixins";`
      }
    }
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
})
