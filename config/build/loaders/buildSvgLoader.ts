export const buildSvgLoader = () => ({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,    //apply if the SVG is imported from a JavaScript or a TypeScript file.
  use: [{
    loader: '@svgr/webpack',
    options: {
      icon: true,
      svgoConfig: {
        plugins: [
          {
            name: 'convertColors',
            params: {
              currentColor: true,
            }
          }
        ]
      }
    }
  }],
})
