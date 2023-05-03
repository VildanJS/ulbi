import {PropsWithChildren} from 'react'
import {IComment} from '../../../model/types'

export enum CommentCardThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ICommentCard extends PropsWithChildren {
  className?: string,
  theme?: CommentCardThemes,
  comment: IComment,
  isLoading?: boolean
}

export {
  ICommentCard
}
