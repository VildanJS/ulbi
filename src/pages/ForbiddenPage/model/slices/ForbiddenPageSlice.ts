// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { ForbiddenPageSchema } from '../types'
//
// const initialState: ForbiddenPageSchema = {}
//
// export const ForbiddenPageSlice = createSlice({
//   name: 'ForbiddenPage',
//   initialState,
//   reducers: {
//     setForbiddenPage: (state, action: PayloadAction<string>) => {
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
// export const { setForbiddenPage } = ForbiddenPage.actions
//
// export default ForbiddenPage.reducer
