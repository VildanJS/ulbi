import { PropsWithChildren } from 'react'

export enum ArticleDetailsPageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticleDetailsPage extends PropsWithChildren {
  className?: string
  theme?: ArticleDetailsPageThemes
}

export { IArticleDetailsPage }
