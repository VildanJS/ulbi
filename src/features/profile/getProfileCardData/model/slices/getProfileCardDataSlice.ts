import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Country, Currency } from '@/shared/const/common'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema } from '../types'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: null,
  data: {
    username: '',
    lastname: '',
    firstname: '',
    currency: Currency.RUB,
    country: Country.Russia,
    city: '',
    avatar: '',
    age: '',
  },
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    setProfileData: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchProfileData.fulfilled, (state: ProfileSchema, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.fulfilled, (state: ProfileSchema, action) => {
        state.isLoading = false
        state.data = action.payload
      })
  },
})

export const { setReadonly, setProfileData } = profileSlice.actions
export default profileSlice.reducer
