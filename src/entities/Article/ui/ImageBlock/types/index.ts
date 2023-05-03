import {PropsWithChildren} from 'react'
import {ArticleImageBlock} from '../../../model/types'

export enum ImageBlockThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IImageBlock extends PropsWithChildren {
  className?: string,
  theme?: ImageBlockThemes,
  block: ArticleImageBlock
}

export {
  IImageBlock
}
