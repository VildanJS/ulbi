import { FC, useCallback } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getRouteArticleEdit, getRouteArticles } from 'shared/const/router'

import { getArticleDetailsData } from '@/entities/Article'
import { AppButton } from '@/shared/ui/AppButton'

import cls from './ArticleDetailsPageHeader.module.scss'
import { getIsEditable } from '../model/selectors/getIsEditable'
import { IArticleDetailsPageHeader } from '../types'


export const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeader> = (props) => {

  const { t: translateComments } = useTranslation('comments')
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { className } = props
  const isEditable = useSelector(getIsEditable)
  const article = useSelector(getArticleDetailsData)

  const articleDetailsPageHeaderClass = classNames(className, cls.articleDetailsPageHeader)

  const onClickPreviousPage = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onClickEdit = useCallback(() => {
    article && navigate(getRouteArticleEdit(article?.id))
  }, [article, navigate])

  return (
    <div className={articleDetailsPageHeaderClass}>
      <AppButton
        onPress={onClickPreviousPage}
        theme='outline'
      >
        {translateComments('Previous Page')}
      </AppButton>
      {isEditable &&
        <AppButton
          onPress={onClickEdit}
          theme='outline'
        >{t('Edit')}
        </AppButton>}
    </div>
  )
}
