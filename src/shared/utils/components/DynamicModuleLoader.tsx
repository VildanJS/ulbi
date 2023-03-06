import {FC, PropsWithChildren, useEffect} from 'react'
import {useStore} from 'react-redux'
import {ReduxStoreWithManager} from 'app/providers/StoreProvider'
import {useAppDispatch} from '../hooks/useAppDispatch/useAppDispatch'
import {StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema'
import {Reducer} from '@reduxjs/toolkit'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerStateEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoader extends PropsWithChildren {
  reducers: ReducerList,
  removeAfterUnmount?: true
}


export const DynamicModuleLoader: FC<DynamicModuleLoader> = (props) => {
  const {children, reducers, removeAfterUnmount} = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerStateEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({type: `@Init ${name} reducer`})

      return () => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name)
          dispatch({type: `@Destroy ${name} reducer`})
        }
      }
    })


  }, [])


  return (
    <>
      {children}
    </>
  )
}
