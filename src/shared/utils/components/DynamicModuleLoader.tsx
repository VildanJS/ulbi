import { FC, PropsWithChildren, useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoader extends PropsWithChildren {
  reducers: ReducersList,
  removeAfterUnmount?: true
}

export const DynamicModuleLoader: FC<DynamicModuleLoader> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })

      return () => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        }
      }
    })
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}
