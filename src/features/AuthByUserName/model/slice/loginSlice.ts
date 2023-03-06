import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import LoginSchema from '../types/loginSchema'
import {loginByUserName} from '../services/loginByUserName/loginByUserName'

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false
      })
  },
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice




