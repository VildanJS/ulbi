import { FC } from 'react'

import classNames from 'classnames'
import { getRouteProfile } from '@/shared/const/router'
import { Card } from '@/shared/ui/redesigned/Card'

import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './CommentCard.module.scss'
import { ICommentCard } from '../types'




export const CommentCard: FC<ICommentCard> = (props) => {
  const { className, comment, isLoading } = props
  const commentCardClass = classNames(className, cls.commentCard)

  if (isLoading) {
    return (
      <div className={commentCardClass}>

        <Skeleton className={cls.gridAvatar} width={30} height={30} border="50%" />
        <Skeleton className={cls.gridUsername} height={16} width={100} />

        <Skeleton className={cls.gridComment} width="100%" height={50} />
      </div>
    )
  }

  if (!comment.user) {
    return null
  }

  return (
    <Card padding={'24'} borderRadius={'round'} data-testid='CommentCard.Content' className={commentCardClass}>
      <AppLink className={cls.gridUsernameAvatar} to={getRouteProfile(comment.user.id)}>
        {comment?.user?.avatar &&
          <Avatar size={32} alt={'avatar'} src={comment?.user?.avatar} />
        }
        <Text bold size={'S'} className={cls.gridUsername} title={comment?.user?.username} />
      </AppLink>
      <Text className={cls.gridComment} text={comment.text}></Text>
    </Card>
  )
}
