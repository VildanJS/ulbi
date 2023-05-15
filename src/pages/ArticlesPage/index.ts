export { setPage } from './model/slices/ArticlesPageSlice'
export type { ArticlesPageSchema } from '@/pages/ArticlesPage/model/types'
import fetchArticles from './model/services/fetchArticles'
import ArticlesPage from './ui/ArticlesPage/ArticlesPage.async'

export {
  ArticlesPage,
  fetchArticles
}
