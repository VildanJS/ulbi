import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios/index'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { IArticle } from '@/entities/Article'

// First, create the thunk
export const fetchRecommendedArticles = createAsyncThunk<
  IArticle[],
  void,
  ThunkConfig<string>
>('articleDetails/fetchRecommendedArticles', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const params = {
      _limit: 4,
    }

    const response = await extra.api.get<IArticle[]>('/articles', {
      params,
    })

    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (error: unknown) {
    const err = error as AxiosError
    return rejectWithValue(err.message)
  }
})
