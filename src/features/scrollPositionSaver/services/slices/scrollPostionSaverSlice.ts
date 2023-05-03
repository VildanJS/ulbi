import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UISchema } from '../../types'
import { StateSchema } from '@/app/providers/StoreProvider'

const initialState: UISchema = {
  scroll: {
    '/articles': 0,
    '/articlesGrid': 0
  },
}

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position
    },
  },
})


export const { setScrollPosition } = UISlice.actions

export default UISlice.reducer
