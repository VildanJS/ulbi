import webpack, { RuleSetRule, DefinePlugin } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoaders'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({config}: {config: webpack.Configuration}) => {
  const src = path.resolve(__dirname, '..', '..', 'src')
  config.resolve.modules.push(src)
  config.resolve.extensions.push('.tsx', '.ts')
  config.module.rules.push(buildCssLoader(true))

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if(/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg/
      }
    }
    return rule
  })

  config.module.rules.push(buildSvgLoader())
  config.plugins.push( new DefinePlugin({
    IS_DEV: true
  }))

  return config
}
