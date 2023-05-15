import { ArticlesSortFields, ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types'

export interface ArticlesFiltersSchema {
  order: SortOrder,
  sort: ArticlesSortFields,
  search?: string,
  type: ArticleType
}
