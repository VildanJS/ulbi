// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { ArticlesPageFooterSchema } from '../types'
//
// const initialState: ArticlesPageFooterSchema = {}
//
// export const ArticlesPageFooterSlice = createSlice({
//   name: 'ArticlesPageFooter',
//   initialState,
//   reducers: {
//     setArticlesPageFooter: (state, action: PayloadAction<string>) => {
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
// export const { setArticlesPageFooter } = ArticlesPageFooter.actions
//
// export default ArticlesPageFooter.reducer
