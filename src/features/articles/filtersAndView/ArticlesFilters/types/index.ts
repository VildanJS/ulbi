import { PropsWithChildren } from 'react'

export enum articlesFilterThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticlesFilter extends PropsWithChildren {
  className?: string,
  theme?: articlesFilterThemes,
}

export {
  IArticlesFilter
}
