import { AxiosError } from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { IProfile } from '@/entities/Profile'

export const updateProfileData = createAsyncThunk<IProfile, IProfile, ThunkConfig<string>>(
  'login/updateByUserName',
  async (profile, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI
    try {
      const response = await extra.api.put<IProfile>(`/profile/${profile.id}`, profile)
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
