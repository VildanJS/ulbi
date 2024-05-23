import { PropsWithChildren } from 'react'

export enum ArticleDetailsCommentsThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticleDetailsComments extends PropsWithChildren {
  className?: string
  theme?: ArticleDetailsCommentsThemes
  id?: string
}

export { IArticleDetailsComments }
