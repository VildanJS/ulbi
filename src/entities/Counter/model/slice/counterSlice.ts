import { createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '../types'

const initialState: CounterSchema = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice




