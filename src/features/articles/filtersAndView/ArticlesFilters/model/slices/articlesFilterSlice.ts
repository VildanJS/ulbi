import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticlesFiltersSchema } from '../types'
import { ArticlesSortFields, ArticleType } from '@/entities/Article'

const initialState: ArticlesFiltersSchema = {
  order: 'ask',
  sort: ArticlesSortFields.CREATED,
  type: 'ALL'
}

export const articlesFilterSlice = createSlice({
  name: 'articlesFilterSlice',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(NAME_OF_THUNK.pending, (state) => {
  //       state.error = null
  //       state.isLoading = true
  //     })
  //     .addCase(NAME_OF_THUNK.rejected, (state, { payload }) => {
  //       state.isLoading = false
  //       state.error = payload as string
  //     })
  //     .addCase(NAME_OF_THUNK.fulfilled, (state) => {
  //       state.isLoading = false
  //     })
  // },
})


export const { setOrder, setSort, setSearch, setType } = articlesFilterSlice.actions

export default articlesFilterSlice.reducer
