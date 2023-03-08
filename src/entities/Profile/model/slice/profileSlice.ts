import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IProfile, ProfileSchema } from '../types/IProfile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: null,
  data: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state: ProfileSchema, action: PayloadAction<IProfile>) => {
          state.isLoading = false
          state.data = action.payload
        })
  },
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice




