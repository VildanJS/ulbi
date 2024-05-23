import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { IComment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'

import { articleDetailsCommentAdd } from '../../../ArticleDetailsCommentList'

// import {AxiosError} from 'axios'
const sendComment = createAsyncThunk<IComment, string, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI

    try {
      const user = getUserAuthData(getState())
      const article = getArticleDetailsData(getState())

      if (!user && !article && text) rejectWithValue('No params')
      const request = {
        articleId: user?.id,
        userId: user?.id,
        text: text,
      }
      const response = await extra.api.post<IComment>('/comments', request)

      const comment: IComment = {
        id: response?.data?.id,
        text,
        user,
      }
      if (!response.data) {
        throw new Error()
      } else {
        dispatch(articleDetailsCommentAdd(comment))
      }
      return response.data
    } catch (error: unknown) {
      // const err = error as AxiosError
      return rejectWithValue('error')
    }
  },
)
export default sendComment
