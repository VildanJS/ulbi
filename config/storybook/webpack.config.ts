import webpack, { RuleSetRule, DefinePlugin } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoaders'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const src = path.resolve(__dirname, '..', '..', 'src')

  config.resolve?.modules?.push(src)
  config!.resolve?.extensions?.push('.tsx', '.ts', '.js')
  config!.resolve!.alias = {
    ...config.resolve!.alias,
    '@': src
  }


  const rules = config.module?.rules as RuleSetRule[]
  config.module!.rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ))

  config.module?.rules?.push(buildSvgLoader())
  config!.module!.rules!.push(buildCssLoader(true))

  config.plugins?.push(new DefinePlugin({
    IS_DEV: JSON.stringify(true),
    API_URL: JSON.stringify('https://testapi.ru'),
    PROJECT_NAME: JSON.stringify('storybook')
  }))

  return config
}
