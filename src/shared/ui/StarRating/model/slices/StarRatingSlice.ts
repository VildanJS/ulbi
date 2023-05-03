// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { StarRatingSchema } from '../types'
//
// const initialState: StarRatingSchema = {}
//
// export const StarRatingSlice = createSlice({
//   name: 'StarRating',
//   initialState,
//   reducers: {
//     setStarRating: (state, action: PayloadAction<string>) => {
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
// export const { setStarRating } = StarRating.actions
//
// export default StarRating.reducer
