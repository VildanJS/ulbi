import { PropsWithChildren } from 'react'

import { ArticleCodeBlock } from '../../../model/types'

export enum CodeBlockThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ICodeBlock extends PropsWithChildren {
  className?: string
  theme?: CodeBlockThemes
  block: ArticleCodeBlock
}

export { ICodeBlock }
