import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.endsWith(".module.scss"),
            localIdentName: options.isDev ? `[path][name]__[local]` : '[name]--[hash:base64:8]'
          },
        },
      },
      "sass-loader",
    ],
  }

  return [
    typeScriptLoader, cssLoader
  ]
}
