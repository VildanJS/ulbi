import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCssLoader = (isDev: boolean) => {
  return {
    test: /\.(sa|sc|c)ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
            localIdentName: isDev ? '[path][name]__[local]' : '[name]--[hash:base64:8]',
            exportLocalsConvention: 'camelCase'
          },
        },
      },
      'postcss-loader',
      {
        loader: "sass-loader",
        options: {
          sourceMap: isDev
        },
      },
    ],
  }
}
