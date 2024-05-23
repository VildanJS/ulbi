import { EntityState } from '@reduxjs/toolkit'

import { ArticleViewType, IArticle } from '@/entities/Article'

export interface ArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string | null
  view: ArticleViewType
  pageNumber: number
  hasMore: boolean
  limit: number
  _inited: boolean
}
