import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import { IArticle } from '../types/index'

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string | undefined,
  ThunkConfig<string>
>(
  'login/loginByUserName',
  async (id, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI
    try {
      if(!id) rejectWithValue('Нет ID в URL')

      const response = await extra.api.get<IArticle>(`/articles/${id}`, {
        params: {
          _expand: 'user',
        },
      })
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
