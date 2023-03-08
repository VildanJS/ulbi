import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { IBuildOptions } from './types/config'

export const buildPlugin = ({
  paths,
  isDev,
  apiUrl
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    isDev ? new ReactRefreshPlugin() : new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API_URL: JSON.stringify(apiUrl)
    }),
  ]
  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }))
  }
  return plugins
}
