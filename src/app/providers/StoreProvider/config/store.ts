import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'


export const creteReduxStore = (initialState?: StateSchema) => {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }
  return configureStore<StateSchema>({
    reducer,
    devTools: IS_DEV,
    preloadedState: initialState,
  })
}
