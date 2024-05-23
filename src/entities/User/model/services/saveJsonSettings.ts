import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import { setJsonSettingMutation } from '../../api/userApi'
import { getJsonSettings } from '../selectors/getJsonSettings'
import { getUserAuthData } from '../selectors/getUserAuthData'
import { JsonSettings } from '../types/index'

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('users/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkAPI
  const userData = getUserAuthData(getState())
  const currentJsonSetting = getJsonSettings(getState())

  if (!userData) return rejectWithValue('No user data')
  try {
    const response = await dispatch(
      setJsonSettingMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentJsonSetting,
          ...newJsonSettings,
        },
      }),
    ).unwrap()

    if (!response.jsonSettings) {
      return rejectWithValue('Нет jsonSettings в response')
    }

    return response.jsonSettings
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})
