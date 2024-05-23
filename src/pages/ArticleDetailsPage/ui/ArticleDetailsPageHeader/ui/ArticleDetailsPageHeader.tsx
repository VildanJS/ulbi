import { FC, useCallback } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getRouteArticles } from '@/shared/const/router'

import { getArticleDetailsData } from '@/entities/Article'
import { AppButton } from '@/shared/ui/redesigned/AppButton'

import cls from './ArticleDetailsPageHeader.module.scss'
import { IArticleDetailsPageHeader } from '../types'


export const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeader> = (props) => {

  const { t: translateComments } = useTranslation('comments')
  const navigate = useNavigate()
  const { className } = props
  const article = useSelector(getArticleDetailsData)

  const articleDetailsPageHeaderClass = classNames(className, cls.articleDetailsPageHeader)

  const onClickPreviousPage = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  return (
    <div className={articleDetailsPageHeaderClass}>
      <AppButton
        onPress={onClickPreviousPage}
        variant='outline'
      >
        {translateComments('Previous Page')}
      </AppButton>
    </div>
  )
}
