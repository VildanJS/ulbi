import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IComment } from '@/entities/Comment'
import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

import fetchCommentsByArticleId from '../services/fetchCommentsByArticleId'

const articleDetailsCommentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
})

export const getArticleDetailsComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || articleDetailsCommentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: null,
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {
    articleDetailsCommentAdd: articleDetailsCommentsAdapter.addOne,
    articleDetailsCommentsAdapterReceived(state, action) {
      articleDetailsCommentsAdapter.setAll(state, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending,
        (state) => {
          state.error = null
          state.isLoading = true
        })
      .addCase(fetchCommentsByArticleId.rejected,
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
          state.isLoading = false
          articleDetailsCommentsAdapter.setAll(state, action.payload)
        })

  }
})

export const { articleDetailsCommentAdd, articleDetailsCommentsAdapterReceived } = articleDetailsCommentsSlice.actions
export default articleDetailsCommentsSlice.reducer
