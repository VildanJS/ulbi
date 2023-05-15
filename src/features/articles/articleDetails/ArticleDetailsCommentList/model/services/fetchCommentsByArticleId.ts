import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { IComment } from '@/entities/Comment'
// import {AxiosError} from 'axios'

// First, create the thunk
const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      if (!articleId) rejectWithValue('Нет ID в URL')
      const response = await extra.api.get<IComment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error: unknown) {
      // const err = error as AxiosError
      return rejectWithValue('error')
    }
  }
)

export default fetchCommentsByArticleId
