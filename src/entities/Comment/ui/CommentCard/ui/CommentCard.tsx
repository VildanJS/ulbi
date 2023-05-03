import React, {FC} from 'react'
import cls from './CommentCard.module.scss'
import {ICommentCard} from '../types'
import classNames from 'classnames'
import {Avatar} from '@/shared/ui/Avatar'
import {Text} from '@/shared/ui/Text/Text'
import {Skeleton} from '@/shared/ui/Skeleton'
import {AppLink} from '@/shared/ui/AppLink'
import {AppRoutePaths} from '@/app/config/routeConfig/routeConfig'


export const CommentCard: FC<ICommentCard> = (props) => {
  const {className, comment, isLoading} = props
  const commentCardClass = classNames(className, cls.commentCard)

  if (isLoading) {
    return (
      <div className={commentCardClass}>

        <Skeleton className={cls.gridAvatar} width={30} height={30} border="50%"/>
        <Skeleton className={cls.gridUsername} height={16} width={100}/>

        <Skeleton className={cls.gridComment} width="100%" height={50}/>
      </div>
    )
  }

  return (
    <div className={commentCardClass}>
      <AppLink className={cls.gridUsernameAvatar} to={`${AppRoutePaths.profile}${comment?.user?.id}`}>
        {comment?.user?.avatar &&
          <Avatar size={50} alt={'avatar'} src={comment?.user?.avatar}/>
        }
        <Text className={cls.gridUsername} title={comment?.user?.username}/>
      </AppLink>
      <Text className={cls.gridComment} text={comment.text}></Text>
    </div>
  )
}
