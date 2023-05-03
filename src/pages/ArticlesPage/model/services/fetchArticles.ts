import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { AxiosError } from 'axios'
import { ArticlesSortFields, IArticle } from '@/entities/Article'

import { addQueryParams } from '@/shared/utils/url/addQueryParams'

import {
  getArticlesPageLimit,
  getArticlesPageNumber,
} from '../selectors/articlesPageSelectors'

import {
  getArticlesFiltersSort,
  getArticlesFiltersOrder,
  getArticlesFiltersSearch, getArticlesFiltersType
} from '@/features/articles/filtersAndView/ArticlesFilters/model/selectors/getArticlesFilters'
import { AppRoutePaths } from '@/app/config/routeConfig/routeConfig'

interface FetchArticlesListProps {
  replace?: boolean;
}

// First, create the thunk
const fetchArticles = createAsyncThunk<IArticle[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticles',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const limit = getArticlesPageLimit(getState())
    const sort = getArticlesFiltersSort(getState())
    const order = getArticlesFiltersOrder(getState())
    const search = getArticlesFiltersSearch(getState())
    const page = getArticlesPageNumber(getState())
    const type = getArticlesFiltersType(getState())

    try {
      addQueryParams(
        { search, sort, order, type }
      )

      const params = {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === 'ALL' ? undefined : type
      }

      const response = await extra.api.get<IArticle[]>(AppRoutePaths.articles, {
        params
      })

      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (error: unknown) {
      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)

export default fetchArticles
