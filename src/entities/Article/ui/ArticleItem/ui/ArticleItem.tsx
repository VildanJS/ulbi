import { FC } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'


import AppSvg from '@/shared/assets/icons/app-image.svg'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/deprecated/AppImage'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleItem.module.scss'
import { ArticleTextBlock } from '../../../model/types'
import { TextBlock } from '../../TextBlock'
import { IArticleItem } from '../types'

export const ArticleItem: FC<IArticleItem> = (props) => {
  const { className, article, view  } = props

  const { t } = useTranslation()


  const userInfo = (
    <HStack align={'Center'} gap="8">
      <Icon width={24} height={24} Svg={AppSvg}></Icon>
      <Text className={cls.translate} bold text={article.user?.username} />
    </HStack>
  )
  const views = (
    <HStack align={'Center'} gap="4">
      <Icon  width={24} height={24} Svg={EyeIcon} />
      <Text text={String(article.views)} className={cls.views} />
    </HStack>
  )

  const articleItemClass = classNames(className, cls.articleItem, cls[view])

  if (view === 'full') {
    const textBlock = article.blocks.find(
      (block) => block.type === 'TEXT'
    ) as ArticleTextBlock
    return (
      <Card
        max
        padding={'32'}
        borderRadius={'round'}
        data-testid="ArticleListItem"
        className={articleItemClass}
      >
        <HStack max gap={'16'} align={'Center'} className={cls.header}>
          <Avatar
            invertedFallback
            alt={article.user.username}
            size={32} src={article.user.avatar}
            className={cls.avatar}
          />
          <Text bold text={article.user.username} />
          <Text text={article.createdAt} />
        </HStack>
        <VStack gap={'16'}>
          <Text size={'L'} bold title={article.title}></Text>
          <Text size={'M'} title={article.subtitle}></Text>
          <AppImage
            fallback={<Skeleton width='100%' height='250px' />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
        </VStack>

        {textBlock && <TextBlock block={textBlock} className={cls.textBlock} />}
        <HStack align={'Center'} justify={'SpaceBetween'} className={cls.footer}>
          <AppLink className={cls.link} to={getRouteArticleDetails(article.id)}>
            <AppButton
              variant='outline'
            >{t('read')}
            </AppButton>
          </AppLink>
          {views}
        </HStack>
      </Card>
    )
  }
  return (
    <AppLink
      data-testid="ArticleListItem"
      className={classNames(articleItemClass, cls.resetLink)}
      to={getRouteArticleDetails(article.id)}>
      <Card padding={'0'} borderRadius={'round'} className={cls.card}>
        <AppImage
          fallback={<Skeleton width='200px' height='200px' />}
          src={article.img}
          alt={article.title}
          className={cls.image}
        />
        <VStack justify={'SpaceBetween'} className={cls.info} gap={'4'}>
          <Text bold size={'M'} title={article.title} className={cls.title} />

          <HStack justify="SpaceBetween" max>
            <Text text={article.createdAt} />
            {views}
          </HStack>
          {userInfo}
        </VStack>
      </Card>
    </AppLink>
  )

}
