import { PropsWithChildren } from 'react'

export enum AddCommentFormThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ArticleDetailsAddCommentSchema extends PropsWithChildren {
  className?: string
  theme?: AddCommentFormThemes
}

export { ArticleDetailsAddCommentSchema }
