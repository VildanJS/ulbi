import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleViewType, IArticle } from '@/entities/Article'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

import fetchArticles from '../services/fetchArticles'
import { ArticlesPageSchema } from '../types'

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    view: 'cards',
    limit: 1,
    hasMore: true,
    pageNumber: 1,
    _inited: false
  }),
  reducers: {
    setView: (state, action) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleViewType
      state.view = view
      state.limit = view === 'cards' ? 8 : 3
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending,
        (state, action) => {
          state.isLoading = true
          state.error = null
          if (action.meta.arg.replace) {
            articlesAdapter.removeAll(state)
          }
        })
      .addCase(fetchArticles.rejected,
        (state, action) => {
          state.error = action.payload
          state.isLoading = false
        })
      .addCase(fetchArticles.fulfilled,
        (state, action) => {
          state.isLoading = false
          state.hasMore = action.payload.length >= state.limit
          if (action.meta.arg.replace) {
            articlesAdapter.setAll(state, action.payload)
          } else {
            articlesAdapter.addMany(state, action.payload)
          }

        })

  }
})

export const { setView, initState, setPage } = articlePageSlice.actions
export default articlePageSlice.reducer
