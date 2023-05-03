import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'cards'
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.pageNumber || 1
export const getArticlesPageIsInited = (state: StateSchema) => state.articlesPage?._inited
