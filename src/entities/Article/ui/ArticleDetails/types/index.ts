import { PropsWithChildren } from 'react'

export enum ArticleDetailsThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

export interface IArticleDetails extends PropsWithChildren {
  className?: string,
  theme?: ArticleDetailsThemes,
  id?: string
}
