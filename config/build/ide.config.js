import path from 'path'
import { BuildWebPackConfig }  from './buildWebPackConfig'


const paths = {
  build: path.join(__dirname, 'build'),
  entry: path.join(__dirname, 'src', 'index.tsx'),
  html: path.join(__dirname, 'public', 'index.html'),
  src: path.join(__dirname, 'src'),
}

const mode = 'development'
const isDev = true
const PORT = 3000
const apiUrl = 'http://localhost:8000'

export default {
  ...BuildWebPackConfig({
    apiUrl,
    mode,
    paths,
    isDev,
    port: PORT,
    projectName: 'frontend'
  }),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  }
}
