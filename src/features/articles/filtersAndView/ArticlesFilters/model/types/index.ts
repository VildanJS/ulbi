import { SortOrder } from '@/shared/types'
import { ArticlesSortFields, ArticleType } from '@/entities/Article'

export interface ArticlesFiltersSchema {
  order: SortOrder,
  sort: ArticlesSortFields,
  search?: string,
  type: ArticleType
}
