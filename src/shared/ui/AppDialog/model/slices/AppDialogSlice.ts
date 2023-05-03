// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { AppDialogSchema } from '../types'
//
// const initialState: AppDialogSchema = {}
//
// export const AppDialogSlice = createSlice({
//   name: 'AppDialog',
//   initialState,
//   reducers: {
//     setAppDialog: (state, action: PayloadAction<string>) => {
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
// export const { setAppDialog } = AppDialog.actions
//
// export default AppDialog.reducer
