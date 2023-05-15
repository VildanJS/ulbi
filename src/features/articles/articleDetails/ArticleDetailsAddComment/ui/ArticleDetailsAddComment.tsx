import { FC, useCallback } from 'react'

import classNames from 'classnames'

import { AddNewComment } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './ArticleDetailsAddComment.module.scss'
import sendComment from '../model/services/sendComment'
import { ArticleDetailsAddCommentSchema } from '../types'


const ArticleDetailsAddComment: FC<ArticleDetailsAddCommentSchema> = (props) => {
  const { className } = props
  const addCommentFormClass = classNames(className, cls.addCommentForm)

  const dispatch = useAppDispatch()
  const onSendComment = useCallback((text: string) => {
    dispatch(sendComment(text))
  }, [dispatch])

  return (
    <AddNewComment className={addCommentFormClass} sendComment={onSendComment} />
  )
}
export default ArticleDetailsAddComment
