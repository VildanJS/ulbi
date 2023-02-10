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
            localIdentName: options.isDev ? `[path][name]__[local]` : '[name]--[hash:base64:8]',
            exportLocalsConvention: "camelCase",
          },
        },
      },
      "sass-loader",
    ],
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,    //apply if the SVG is imported from a JavaScript or a TypeScript file.
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  }

  return [
    svgLoader, fileLoader, typeScriptLoader, cssLoader,
  ]
}
