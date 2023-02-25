import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import LoginSchema from '../types/loginSchema'

const initialState = {
  isLoading: false,
  username: '',
  password: '',
} as LoginSchema

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice




