import path from 'path'

import webpack from 'webpack'

import { BuildWebPackConfig } from './config/build/buildWebPackConfig'
import { IBuildEnv, IBuildPaths } from './config/build/types/config'

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    build: path.join(__dirname, 'build'),
    entry: path.join(__dirname, 'src', 'index.tsx'),
    html: path.join(__dirname, 'public', 'index.html'),
    src: path.join(__dirname, 'src'),
    locales: path.join(__dirname, 'public', 'locales'),
    buildLocales: path.join(__dirname, 'build', 'locales'),
  }
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'
  return BuildWebPackConfig({
    apiUrl,
    mode,
    paths,
    isDev,
    port: PORT,
    projectName: 'frontend',
  })
}
