import { IArticle } from './index'

export interface ArticleDetailsSchema {
  data?: IArticle
  error?: string | null
  isLoading: boolean
}
