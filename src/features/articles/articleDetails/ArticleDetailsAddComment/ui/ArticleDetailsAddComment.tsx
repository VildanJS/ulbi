import {FC, useCallback} from 'react'
import cls from './ArticleDetailsAddComment.module.scss'
import {ArticleDetailsAddCommentSchema} from '../types'
import classNames from 'classnames'
import sendComment from '../model/services/sendComment'
import {AddNewComment} from '@/entities/Comment/ui/AddNewComment'
import {useAppDispatch} from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'


const ArticleDetailsAddComment: FC<ArticleDetailsAddCommentSchema> = (props) => {
  const {className} = props
  const addCommentFormClass = classNames(className, cls.addCommentForm)

  const dispatch = useAppDispatch()
  const onSendComment = useCallback((text: string) => {
    dispatch(sendComment(text))
  }, [dispatch])

  return (
    <AddNewComment className={addCommentFormClass} sendComment={onSendComment}/>
  )
}
export default ArticleDetailsAddComment
