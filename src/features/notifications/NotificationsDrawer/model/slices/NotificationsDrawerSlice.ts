// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { NotificationsDrawerSchema } from '../types'
//
// const initialState: NotificationsDrawerSchema = {}
//
// export const NotificationsDrawerSlice = createSlice({
//   name: 'NotificationsDrawer',
//   initialState,
//   reducers: {
//     setNotificationsDrawer: (state, action: PayloadAction<string>) => {
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
// export const { setNotificationsDrawer } = NotificationsDrawer.actions
//
// export default NotificationsDrawer.reducer
