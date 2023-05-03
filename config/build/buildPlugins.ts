import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import { IBuildOptions } from './types/config'

export const buildPlugin = ({
  paths,
  isDev,
  apiUrl,
  projectName
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: `${paths.src}/shared/assets/icons/favicon.png`
    }),
    new webpack.ProgressPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      include: /src/,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API_URL: JSON.stringify(apiUrl),
      PROJECT_NAME: JSON.stringify(projectName)
    }),
  ]
  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
      new ReactRefreshPlugin()
    )
  }
  return plugins
}
