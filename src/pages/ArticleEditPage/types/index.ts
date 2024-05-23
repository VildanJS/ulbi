import { PropsWithChildren } from 'react'

export enum ArticleEditPageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticleEditPage extends PropsWithChildren {
  className?: string
  theme?: ArticleEditPageThemes
}

export { IArticleEditPage }
