// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { AppPopoverTriggerSchema } from '../types'
//
// const initialState: AppPopoverTriggerSchema = {}
//
// export const AppPopoverTriggerSlice = createSlice({
//   name: 'AppPopoverTrigger',
//   initialState,
//   reducers: {
//     setAppPopoverTrigger: (state, action: PayloadAction<string>) => {
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
// export const { setAppPopoverTrigger } = AppPopoverTrigger.actions
//
// export default AppPopoverTrigger.reducer
