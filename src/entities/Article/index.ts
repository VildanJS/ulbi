import { getArticleDetailsData } from './model/selectors/getCounter/getArticleDetails'
import type { ArticleViewType, IArticle, ArticlesType, ArticleType } from './model/types'
import { ArticlesSortFields } from './model/types'
import type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema'
import { ArticleDetails } from './ui/ArticleDetails'
import { ArticleItem, SkeletonItem } from './ui/ArticleItem'
import { ArticleItemList } from './ui/ArticleItemList'

export {
  ArticleType,
  ArticlesType,
  ArticlesSortFields,
  IArticle,
  ArticleDetailsSchema,
  ArticleViewType
}

export {
  ArticleItem,
  SkeletonItem,
  getArticleDetailsData,
  ArticleDetails,
  ArticleItemList
}
