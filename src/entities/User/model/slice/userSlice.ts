import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

import { UserSchema, IUser } from '../types'

const initialState: UserSchema = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
    },
    recoveryAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
      state._inited = true
    },
    logout: (state) => {
      state.authData = null
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      state._inited = false
    }
  }
})



export const { setAuthData, recoveryAuthData, logout } = userSlice.actions
export default userSlice.reducer


