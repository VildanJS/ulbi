import { PropsWithChildren } from 'react'

export enum AddNewCommentThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAddNewComment extends PropsWithChildren {
  sendComment: (text: string) => void
  className?: string
  theme?: AddNewCommentThemes
}

export { IAddNewComment }
