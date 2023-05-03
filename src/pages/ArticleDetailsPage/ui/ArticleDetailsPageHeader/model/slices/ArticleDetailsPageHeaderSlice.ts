import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailsPageHeaderSchema } from '../types'

const initialState: ArticleDetailsPageHeaderSchema = {}

export const ArticleDetailsPageHeaderSlice = createSlice({
  name: 'ArticleDetailsPageHeader',
  initialState,
  reducers: {
    setArticleDetailsPageHeader: (state, action: PayloadAction<string>) => {
      // state.username = action.payload
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


export const { setArticleDetailsPageHeader } = ArticleDetailsPageHeaderSlice.actions

export default ArticleDetailsPageHeaderSlice.reducer
