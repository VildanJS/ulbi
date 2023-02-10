import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {IBuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugin = ({paths, isDev}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({template: paths.html}),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev)
    }),

  ]
}
