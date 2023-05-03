import { IBuildOptions, IBuildPaths } from './types/config'
import webpack from 'webpack'
import { buildResolvers } from './buildResolvers'
import { buildLoaders } from './buildLoaders'
import { buildPlugin } from './buildPlugins'
import { buildDevServer } from './buildDevServer'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

export const BuildWebPackConfig = (options: IBuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: isDev && true,
      publicPath: '/'
    },
    plugins: buildPlugin(options),
    resolve: buildResolvers(options),
    module: {
      rules: buildLoaders(options)
    },
    optimization: {
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        '...',
        new CssMinimizerPlugin()
      ]
    },

    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
