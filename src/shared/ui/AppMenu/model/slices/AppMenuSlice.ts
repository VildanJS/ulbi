// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { AppMenuSchema } from '../types'
//
// const initialState: AppMenuSchema = {}
//
// export const AppMenuSlice = createSlice({
//   name: 'AppMenu',
//   initialState,
//   reducers: {
//     setAppMenu: (state, action: PayloadAction<string>) => {
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
// export const { setAppMenu } = AppMenu.actions
//
// export default AppMenu.reducer
