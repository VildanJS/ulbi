import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import { getUserDataByIdQuery } from '../../api/userApi'
import { IUser } from '../types'

export const initAuthData = createAsyncThunk<IUser, void, ThunkConfig<string>>(
  'users/initAuthData',
  async (_, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!userId) return rejectWithValue('')
    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()
      return response
    } catch (error) {
      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  },
)
