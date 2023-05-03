// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RatingSchema } from '../types'
//
// const initialState: RatingSchema = {}
//
// export const RatingSlice = createSlice({
//   name: 'RatingCard',
//   initialState,
//   reducers: {
//     setRating: (state, action: PayloadAction<string>) => {
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
// export const { setRating } = RatingCard.actions
//
// export default RatingCard.reducer
