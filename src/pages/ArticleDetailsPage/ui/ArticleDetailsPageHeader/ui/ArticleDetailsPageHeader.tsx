import { FC, useCallback } from 'react'
import cls from './ArticleDetailsPageHeader.module.scss'
import { IArticleDetailsPageHeader } from '../types'
import classNames from 'classnames'
import { AppRoutePaths } from '@/app/config/routeConfig/routeConfig'
import { Button, ButtonThemes } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsEditable } from '../model/selectors/getIsEditable'
import { getUserAuthData } from '@/entities/User'
import { getArticleDetailsData } from '@/entities/Article'


export const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeader> = (props) => {

  const { t: translateComments } = useTranslation('comments')
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { className } = props
  const isEditable = useSelector(getIsEditable)
  const article = useSelector(getArticleDetailsData)

  const articleDetailsPageHeaderClass = classNames(className, cls.articleDetailsPageHeader)

  const onClickPreviousPage = useCallback(() => {
    navigate(AppRoutePaths.articles)
  }, [navigate])

  const onClickEdit = useCallback(() => {
    navigate(`${AppRoutePaths.articles}/${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
    <div className={articleDetailsPageHeaderClass}>
      <Button
        onClick={onClickPreviousPage}
        theme={ButtonThemes.OUTLINE}
      >
        {translateComments('Previous Page')}
      </Button>
      {isEditable && <Button
        onClick={onClickEdit}
        theme={ButtonThemes.OUTLINE}
      >
        {t('Edit')}
      </Button>}
    </div>
  )
}
