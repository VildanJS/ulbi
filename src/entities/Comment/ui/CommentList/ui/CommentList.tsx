import { FC } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/redesigned/Text'

import cls from './CommentList.module.scss'
import { CommentCard } from '../../CommentCard'
import { ICommentList } from '../types'




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
