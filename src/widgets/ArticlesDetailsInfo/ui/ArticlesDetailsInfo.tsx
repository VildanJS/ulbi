import { FC, PropsWithChildren, useCallback } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getArticleDetailsData } from '@/entities/Article'
import { getIsEditable } from '@/pages/ArticleDetailsPage'
import { getRouteArticleEdit } from '@/shared/const/router'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'


import cls from './ArticlesDetailsInfo.module.scss'
interface ArticlesDetailsInfoProps extends PropsWithChildren {
  className?: string
}


export const ArticlesDetailsInfo: FC<ArticlesDetailsInfoProps> = (props) => {
  const { t } = useTranslation('comments')
  const navigate = useNavigate()

  const {
    className,
  } = props
  const cardClass = classNames(className, cls.card)
  const isEditable = useSelector(getIsEditable)

  const article = useSelector(getArticleDetailsData)
  const onClickEdit = useCallback(() => {
    article && navigate(getRouteArticleEdit(article?.id))
  }, [article, navigate])



  return (
    <Card padding={'24'} borderRadius={'round'} className={cardClass}>
      <VStack gap={'16'}>
        <HStack align={'Center'} gap={'8'}>
          <Avatar src={article?.user.avatar} alt={'avatar'}></Avatar>
          <Text text={article?.user.username}></Text>
          <Text text={article?.createdAt}></Text>
        </HStack>
        <Text text={t('просмотров', { count: article?.views })}></Text>
        {isEditable && (
          <AppButton onPress={onClickEdit} variant='outline'>
            {t('Edit')}
          </AppButton>
        )}
      </VStack>
    </Card>
  )
}
