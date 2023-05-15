import { PayloadAction } from '@reduxjs/toolkit'
import { buildSlice } from 'shared/utils/hooks/store/buildSlice'

import { CounterSchema } from '../types'

const initialState: CounterSchema = {
  value: 0
}

export const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    incrementedOnFive: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { actions: counterActions } = counterSlice
export const { incremented, decremented } = counterSlice.actions
export default counterSlice.reducer
export const { useBindActions: useBindCounterActions } = counterSlice




