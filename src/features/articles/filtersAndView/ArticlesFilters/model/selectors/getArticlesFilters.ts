import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticlesSortFields } from '@/entities/Article'

export const getArticlesFiltersSort = (state: StateSchema) => state.articlesFilters?.sort ?? ArticlesSortFields.VIEWS
export const getArticlesFiltersOrder = (state: StateSchema) => state.articlesFilters?.order ?? 'ask'
export const getArticlesFiltersSearch = (state: StateSchema) => state.articlesFilters?.search
export const getArticlesFiltersType = (state: StateSchema) => state.articlesFilters?.type ?? 'ALL'
