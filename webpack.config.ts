import webpack from 'webpack'
import {BuildWebPackConfig} from './config/build/buildWebPackConfig'
import {IBuildEnv, IBuildPaths} from './config/build/types/config'
import path from 'path'

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    build: path.join(__dirname, 'build'),
    entry: path.join(__dirname, 'src', 'index.tsx'),
    html: path.join(__dirname, 'public', 'index.html'),
    src: path.join(__dirname, 'src'),
  }
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000
  return BuildWebPackConfig(
    {
      mode,
      paths,
      isDev,
      port: PORT,
    }
  )
}

