import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore } from './config/store'
import type { StateSchema } from './config/StateSchema'
import type { ReduxStoreWithManager } from './config/StateSchema'
import type { AppDispatch } from './config/store'
import type { ThunkConfig } from './config/StateSchema'

export {
  StoreProvider,
  AppDispatch,
  createReduxStore,
  ReduxStoreWithManager,
  StateSchema,
  ThunkConfig
}
