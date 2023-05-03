import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'
import {  ReducersMapObject } from '@reduxjs/toolkit'
import { useTraceUpdate } from '@/shared/utils/hooks/useTraceUpdate/useTraceUpdate'


interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}


export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers
  } = props

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )

  useTraceUpdate(props)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
