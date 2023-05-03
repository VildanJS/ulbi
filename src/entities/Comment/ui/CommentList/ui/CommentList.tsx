import { FC } from 'react'
import cls from './CommentList.module.scss'
import { ICommentList } from '../types'
import classNames from 'classnames'
import { CommentCard } from '../../CommentCard'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'


export const CommentList: FC<ICommentList> = (props) => {
  const { t } = useTranslation('comments')
  const { className, comments, isLoading } = props
  const commentListClass = classNames(className, cls.commentList)

  return (
    <div className={commentListClass}>
      {comments?.length
        ? comments?.map((comment) => (
          <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />
        ))
        : <Text text={t('No comments')} />
      }
    </div>
  )
}
