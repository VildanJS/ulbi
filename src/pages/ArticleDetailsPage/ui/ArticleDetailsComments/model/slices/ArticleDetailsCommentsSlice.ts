// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { ArticleDetailsCommentsSchema } from '../types'
//
// const initialState: ArticleDetailsCommentsSchema = {}
//
// export const ArticleDetailsCommentsSlice = createSlice({
//   name: 'ArticleDetailsComments',
//   initialState,
//   reducers: {
//     setArticleDetailsComments: (state, action: PayloadAction<string>) => {
//       state.username = action.payload
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(NAME_OF_THUNK.pending, (state) => {
//         state.error = null
//         state.isLoading = true
//       })
//       .addCase(NAME_OF_THUNK.rejected, (state, { payload }) => {
//         state.isLoading = false
//         state.error = payload as string
//       })
//       .addCase(NAME_OF_THUNK.fulfilled, (state) => {
//         state.isLoading = false
//       })
//   },
// })
//
//
// export const { setArticleDetailsComments } = ArticleDetailsComments.actions
//
// export default ArticleDetailsComments.reducer
