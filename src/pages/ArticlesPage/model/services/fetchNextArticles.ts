import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import fetchArticles from './fetchArticles'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from '../selectors/articlesPageSelectors'
import { setPage } from '../slices/ArticlesPageSlice'

export const fetchNextArticles = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const pageNumber = getArticlesPageNumber(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading ) {
      dispatch(setPage(pageNumber + 1))
      dispatch(fetchArticles({}))
    }
  },
)
