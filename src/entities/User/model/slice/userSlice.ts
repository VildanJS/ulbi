import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { UserSchema, IUser } from '../types'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'

const initialState: UserSchema = {

}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
    },
    recoveryAuthData: (state, action: PayloadAction<IUser>) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
      state.authData = action.payload
    },
    logout: (state) => {
      state.authData = null
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice




