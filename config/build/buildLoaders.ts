import webpack from 'webpack'
import {IBuildOptions} from './types/config'
import { buildCssLoader } from './loaders/buildCssLoaders'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {

  const typeScriptLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }

  const cssLoader = buildCssLoader(options.isDev)

  const svgLoader = buildSvgLoader()

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  }

  return [
    svgLoader, cssLoader, typeScriptLoader, fileLoader
  ]
}
