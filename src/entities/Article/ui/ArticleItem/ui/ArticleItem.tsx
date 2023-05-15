import { FC } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { getRouteArticleDetails } from 'shared/const/router'
import { Skeleton } from 'shared/ui/Skeleton'

import EyeIcon from '@/shared/assets/icons/eye.svg'
import { AppButton } from '@/shared/ui/AppButton'
import { AppImage } from '@/shared/ui/AppImage'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'


import cls from './ArticleItem.module.scss'
import { ArticleTextBlock } from '../../../model/types'
import { TextBlock } from '../../TextBlock'
import { IArticleItem } from '../types'

export const ArticleItem: FC<IArticleItem> = (props) => {
  const { className, article, view  } = props

  const { t } = useTranslation()

  const types = <Text text={article.type.join(' ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <EyeIcon className={cls.icon} />
    </>
  )

  const articleItemClass = classNames(className, cls.articleItem, cls[view])

  if (view === 'full') {
    const textBlock = article.blocks.find(
      (block) => block.type === 'TEXT'
    ) as ArticleTextBlock
    return (
      <div className={articleItemClass}>
        <div className={cls.card}>
          <div className={cls.header}>
            <Avatar
              invertedFallback
              alt={article.user.username}
              size={30} src={article.user.avatar}
              className={cls.avatar}
            />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.createdAt} />
          </div>
          <Text title={article.title}></Text>
          {types}
          <AppImage
            fallback={<Skeleton width='100%' height='250px' />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
          {textBlock && <TextBlock block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink className={cls.link} to={getRouteArticleDetails(article.id)}>
              <AppButton
                theme='outline'
              >{t('read')}
              </AppButton>
            </AppLink>
            {views}
          </div>
        </div>
      </div>
    )
  }
  return (
    <AppLink
      className={classNames(articleItemClass, cls.resetLink)}
      to={getRouteArticleDetails(article.id)}>
      <div className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width='250px' height='200px' />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
          <Text text={article.createdAt} className={cls.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text title={article.title} className={cls.title} />
      </div>
    </AppLink>
  )

}
