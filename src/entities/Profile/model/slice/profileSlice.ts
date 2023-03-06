import {createSlice} from '@reduxjs/toolkit'
import {ProfileSchema} from '../types/IProfile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: null,
  data: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice




