// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { AdminPanelPageSchema } from '../types'
//
// const initialState: AdminPanelPageSchema = {}
//
// export const AdminPanelPageSlice = createSlice({
//   name: 'AdminPanelPage',
//   initialState,
//   reducers: {
//     setAdminPanelPage: (state, action: PayloadAction<string>) => {
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
// export const { setAdminPanelPage } = AdminPanelPage.actions
//
// export default AdminPanelPage.reducer
