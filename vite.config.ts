import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        replaceAttrValues: { fill: 'currentColor' }
      }
    }),
    react()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  define: {
    IS_DEV: JSON.stringify(true),
    API_URL: JSON.stringify('http://localhost:8000'),
    PROJECT_NAME: JSON.stringify('frontend')
  }
})
