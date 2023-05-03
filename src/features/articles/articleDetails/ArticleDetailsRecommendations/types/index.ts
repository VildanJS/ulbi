import { PropsWithChildren } from 'react'

export enum ArticleDetailsRecommendationsThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IArticleDetailsRecommendations extends PropsWithChildren {
  className?: string,
  theme?: ArticleDetailsRecommendationsThemes,
}

export {
  IArticleDetailsRecommendations
}
