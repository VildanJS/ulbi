import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UISchema } from '../../types'

const initialState: UISchema = {
  scroll: {
    '/articles': 0,
    '/articlesGrid': 0,
  },
  isSidebarOpen: false
}

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[payload.path] = payload.position
    },
    setIsSidebarOpen: (
      state,
      { payload }: PayloadAction<boolean>,
    ) => {
      console.log("=>(scrollPostionSaverSlice.ts:28) '11'", '11');
      state.isSidebarOpen = payload
    },
  },
})



export const { setScrollPosition, setIsSidebarOpen } = UISlice.actions

export default UISlice.reducer
