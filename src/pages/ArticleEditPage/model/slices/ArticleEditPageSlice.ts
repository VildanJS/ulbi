import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleEditPageSchema } from '../types'

const initialState: ArticleEditPageSchema = {}

export const ArticleEditPageSlice = createSlice({
  name: 'ArticleEditPage',
  initialState,
  reducers: {
    setArticleEditPage: (state, action: PayloadAction<string>) => {

    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(NAME_OF_THUNK.pending, (state) => {
  //       state.error = null
  //       state.isLoading = true
  //     })
  //     .addCase(NAME_OF_THUNK.rejected, (state, { payload }) => {
  //       state.isLoading = false
  //       state.error = payload as string
  //     })
  //     .addCase(NAME_OF_THUNK.fulfilled, (state) => {
  //       state.isLoading = false
  //     })
  // },
})


export const { setArticleEditPage } = ArticleEditPageSlice.actions

export default ArticleEditPageSlice.reducer
