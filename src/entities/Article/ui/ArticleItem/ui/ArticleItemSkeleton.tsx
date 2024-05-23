import { FC } from 'react'

import classNames from 'classnames'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

import cls from './ArticleItem.module.scss'
import { ArticleViewType } from '../../../model/types'


export interface SkeletonProps {
  view: ArticleViewType,
}

export const SkeletonItem: FC<SkeletonProps> = (props) => {
  const { view } = props
  const articleItemClass = classNames(cls.articleItem, cls[view])

  if (view === 'full') {
    return (
      <Card max padding={'32'} borderRadius={'round'} className={cls.card}>
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
      </Card>
    )
  }

  return (
    <Card className={cls.card}>
      <Skeleton height={200} className={cls.image} />

      <VStack  justify={'SpaceBetween'} gap={'4'}>
        <Skeleton width={40} height={16} className={cls.types} />
        <Skeleton width={60} height={16} className={cls.types} />
        <Skeleton width={150} height={16} className={cls.title} />
      </VStack>

    </Card>

  )
}
