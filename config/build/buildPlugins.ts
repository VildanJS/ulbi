import webpack from 'webpack'
import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { IBuildOptions } from './types/config'


export const buildPlugin = ({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    isDev ? new ReactRefreshPlugin() : new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev)
    }),
    isDev && new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ].filter(Boolean)
}
