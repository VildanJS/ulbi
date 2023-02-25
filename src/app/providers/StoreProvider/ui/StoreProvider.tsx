import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { creteReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'
import { DeepPartial } from '@reduxjs/toolkit'


interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}


export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState
  } = props

  const store = creteReduxStore(initialState as StateSchema)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
