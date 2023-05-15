import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { counterReducer } from '@/entities/Counter'
import userReducer from '@/entities/User'
import { articlesFiltersReducer } from '@/features/articles'
import { UIReducer } from '@/features/scrollPositionSaver'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'

import { createReducerManager } from './reducerManager'
import { StateSchema, ThunkExtraArg } from './StateSchema'


export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: UIReducer,
    articlesFilters: articlesFiltersReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArgument: ThunkExtraArg = {
    api: $api
  }

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,


    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument
        }
      }).concat(rtkApi.middleware)
  })

  // NEED TO GET TYPED!!!
  // eslint-disable-next-line
  // @ts-ignore

  store.reducerManager = reducerManager


  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
