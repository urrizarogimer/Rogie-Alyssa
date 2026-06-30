import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // IMPORTANT: Change this to your GitHub repository name
  base: '/GieroAC/',

  plugins: [
    figmaAssetResolver(),
    // Required for Make
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports
  assetsInclude: [
    '**/*.svg',
    '**/*.csv',
    '**/*.mp3',
    '**/*.wav',
    '**/*.ogg',
  ],

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})