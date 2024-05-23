import { useMemo } from 'react'

import {
  bindActionCreators,
  createSlice,
  CreateSliceOptions,
  SliceCaseReducers,
} from '@reduxjs/toolkit/dist'
import { useDispatch } from 'react-redux'
/* eslint-disable @typescript-eslint/ban-ts-comment*/
export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options)

  const useBindActions = (): typeof slice.actions => {
    const dispatch = useDispatch()
    // @ts-ignore
    return useMemo(
      // @ts-ignore
      () => bindActionCreators(slice.actions, dispatch),
      [dispatch],
    )
  }
  return { ...slice, useBindActions }
}
