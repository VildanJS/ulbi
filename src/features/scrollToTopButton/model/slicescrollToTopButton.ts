// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//
// import { scrollToTopButtonSchema } from '../types'
//
// const initialState: scrollToTopButtonSchema = {}
//
// export const scrollToTopButtonSlice = createSlice({
//   name: 'scrollToTopButton',
//   initialState,
//   reducers: {
//     setScrollToTopButton: (state, action: PayloadAction<string>) => {
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
// export const { setscrollToTopButton } = scrollToTopButton.actions
//
// export default scrollToTopButton.reducer
