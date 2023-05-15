import { FC, PropsWithChildren, useEffect } from 'react'

import { Reducer } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'

import { ReduxStoreWithManager, StateSchema } from '@/app/providers/StoreProvider'
import { StateSchemaKey } from '@/app/providers/StoreProvider'

import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoader extends PropsWithChildren {
  reducers: ReducersList,
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoader> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()
  useEffect(() => {
    const reducersInStore = store.reducerManager.getReducerMap()
    Object.entries(reducers).forEach(([name, reducer]) => {
      const reducerInStore = reducersInStore[name as StateSchemaKey]

      if (!reducerInStore) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}
