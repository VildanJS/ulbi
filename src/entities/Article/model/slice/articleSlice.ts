import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IArticle } from '../types/index'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById'

const initialState: ArticleDetailsSchema = {
  error: '',
  isLoading: false
}



export const articleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending,
        (state) => {
          state.error = null
          state.isLoading = true
        })
      .addCase(fetchArticleById.rejected,
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<IArticle>) => {
          state.isLoading = false
          state.data = action.payload
        })
  }
})

export const { actions: articleActions } = articleSlice
export default articleSlice.reducer




