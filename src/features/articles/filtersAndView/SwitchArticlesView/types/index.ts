import { MouseEventHandler, PropsWithChildren } from 'react'
import { ArticleViewType } from '@/entities/Article'
import * as events from 'events'

export enum SwitchArticlesViewThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ISwitchArticlesView extends PropsWithChildren {
  className?: string,
  theme?: SwitchArticlesViewThemes,
  changeViewHandler: (view: string) => void
  view: ArticleViewType
}

export {
  ISwitchArticlesView
}
