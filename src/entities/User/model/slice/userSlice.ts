import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { setFeatureFlags } from '@/shared/utils/featereFlags/setGetFeatureFlags'

import { initAuthData } from '../services/initAuthData'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { JsonSettings, UserSchema } from '../types'
import { IUser } from '../types'

const initialState: UserSchema = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
      setFeatureFlags(action.payload.features)
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id)
    },
    logout: (state) => {
      state.authData = null
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state: UserSchema, action: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload
        }
      },
    )
    builder.addCase(
      initAuthData.fulfilled,
      (state: UserSchema, { payload }: PayloadAction<IUser>) => {
        state.authData = payload
        setFeatureFlags(payload.features)
        state._inited = true
      },
    )
    builder.addCase(initAuthData.rejected, (state: UserSchema) => {
      state._inited = true
    })
    builder.addCase(initAuthData.pending, (state: UserSchema) => {
      state._inited = false
    })
  },
})

export const { setAuthData, logout } = userSlice.actions
export default userSlice.reducer
