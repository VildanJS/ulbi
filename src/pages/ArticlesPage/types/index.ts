import { PropsWithChildren } from 'react'

export enum ArticlesPageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticlesPage extends PropsWithChildren {
  className?: string,
  theme?: ArticlesPageThemes,

  // pagination
  page?: number,
  limit?: number,
  hasMore?: boolean,


}

export {
  IArticlesPage
}
