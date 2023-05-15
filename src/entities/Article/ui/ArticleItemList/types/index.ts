import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'

import { ArticleViewType, IArticle } from '../../../model/types'

export enum ArticleItemListThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticleItemList extends PropsWithChildren {
  className?: string,
  theme?: ArticleItemListThemes,
  articles: IArticle[],
  isLoading?: boolean,
  view: ArticleViewType,
  target?: HTMLAttributeAnchorTarget
}

export {
  IArticleItemList
}
