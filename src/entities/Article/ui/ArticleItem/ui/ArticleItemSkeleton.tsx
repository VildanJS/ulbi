import { ArticleViewType } from '@/entities/Article/model/types'
import { FC } from 'react'
import classNames from 'classnames'
import cls from './ArticleItem.module.scss'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface SkeletonProps {
  view: ArticleViewType,
}

export const SkeletonItem: FC<SkeletonProps> = (props) => {
  const { view } = props
  const articleItemClass = classNames(cls.articleItem, cls[view])

  if (view === 'full') {
    return (
      <div className={articleItemClass}>
        <div className={cls.card}>
          <div className={cls.header}>
            <Skeleton border={'50%'} width={30} height={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.createdAt} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.image} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={articleItemClass}>
      <div className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton height={200} className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} className={cls.types} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </div>
    </div>
  )
}
