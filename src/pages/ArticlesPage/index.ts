export type { ArticlesPageSchema } from '@/pages/ArticlesPage/model/types'

import { fetchArticles } from './model/services/fetchArticles'
import { setPage } from './model/slices/ArticlesPageSlice'
import ArticlesPage from './ui/ArticlesPage/ArticlesPage.async'

export { ArticlesPage, fetchArticles, setPage }
