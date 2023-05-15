import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import { IBuildOptions } from './types/config'

export const buildDevServer = (options: IBuildOptions): DevServerConfiguration => {
  return {
    hot: true,
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}
