import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { AxiosError } from 'axios'
import { IProfile } from '../../types/IProfile'

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
  'login/loginByUserName',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI
    try {
      const response = await extra.api.get<IProfile>('/profile')
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
