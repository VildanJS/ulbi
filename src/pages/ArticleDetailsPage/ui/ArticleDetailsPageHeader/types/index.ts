import { PropsWithChildren } from 'react'

export enum ArticleDetailsPageHeaderThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticleDetailsPageHeader extends PropsWithChildren {
  className?: string
  theme?: ArticleDetailsPageHeaderThemes
}

export { IArticleDetailsPageHeader }
