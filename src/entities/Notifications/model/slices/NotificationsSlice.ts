// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { NotificationsSchema } from '../types'
//
// const initialState: NotificationsSchema = {}
//
// export const NotificationsSlice = createSlice({
//   name: 'NotificationItem',
//   initialState,
//   reducers: {
//     setNotifications: (state, action: PayloadAction<string>) => {
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
// export const { setNotifications } = NotificationItem.actions
//
// export default NotificationItem.reducer
