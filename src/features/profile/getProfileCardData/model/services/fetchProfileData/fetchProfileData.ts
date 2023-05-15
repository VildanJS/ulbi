import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { IProfile } from '@/entities/Profile'

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
  'login/loginByUserName',
  async (profileId, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI
    try {
      const response = await extra.api.get<IProfile>('/profile/' + profileId)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error) {
      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)
