import { PropsWithChildren } from 'react'

import { ArticleTextBlock } from '../../../model/types'

export enum TextBlockThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ITextBlock extends PropsWithChildren {
  className?: string
  theme?: TextBlockThemes
  block: ArticleTextBlock
}

export { ITextBlock }
