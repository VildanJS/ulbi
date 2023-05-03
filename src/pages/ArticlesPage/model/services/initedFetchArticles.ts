import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ArticlesSortFields, ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types'
import { getArticlesPageIsInited } from '../selectors/articlesPageSelectors'
import { initState } from '../slices/ArticlesPageSlice'
import { setSearch, setSort, setOrder } from '@/features/articles/filtersAndView/ArticlesFilters'
import fetchArticles from './fetchArticles'
import { setType } from '@/features/articles/filtersAndView/ArticlesFilters/model/slices/articlesFilterSlice'

export const initedFetchArticles = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageIsInited(getState())

    if (!inited) {

      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticlesSortFields
      const searchFromUrl = searchParams.get('search')
      const typeFromUrl = searchParams.get('type') as ArticleType

      if (orderFromUrl) {
        dispatch(setOrder(orderFromUrl))
      }
      if (sortFromUrl) {
        dispatch(setSort(sortFromUrl))
      }
      if (searchFromUrl) {
        dispatch(setSearch(searchFromUrl))
      }

      if (typeFromUrl) {
        dispatch(setType(typeFromUrl))
      }

      dispatch(initState())
      dispatch(fetchArticles({}))
    }
  },
)

// TYPED MEMO
// const typedMemo: <T>(c: T) => T = memo;
// export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {...}
