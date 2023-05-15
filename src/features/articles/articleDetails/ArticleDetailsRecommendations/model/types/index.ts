import { EntityState } from '@reduxjs/toolkit'

import { IArticle } from '@/entities/Article'

export interface ArticleDetailsRecommendationsSchema extends EntityState<IArticle> {
  isLoading: boolean,
  error?: string | null
}

