import { PropsWithChildren } from 'react'

import { ArticleViewType, IArticle } from '../../../model/types'

export enum ArticleItemThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticleItem extends PropsWithChildren {
  className?: string
  theme?: ArticleItemThemes
  article: IArticle
  view: ArticleViewType
}

export { IArticleItem }
