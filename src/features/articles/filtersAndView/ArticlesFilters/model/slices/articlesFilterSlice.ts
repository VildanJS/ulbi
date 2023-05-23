import { createSlice } from '@reduxjs/toolkit'

import { ArticlesSortFields } from '@/entities/Article'

import { ArticlesFiltersSchema } from '../types'

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
})


export const { setOrder, setSort, setSearch, setType } = articlesFilterSlice.actions

export const { reducer: articlesFilterReducer } = articlesFilterSlice
