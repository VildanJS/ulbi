import { PropsWithChildren } from 'react'

import { IComment } from '../../../model/types'

export enum CommentListThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ICommentList extends PropsWithChildren {
  className?: string,
  theme?: CommentListThemes,
  comments?: IComment[],
  isLoading?: boolean,
  error?: string
}

export {
  ICommentList
}
