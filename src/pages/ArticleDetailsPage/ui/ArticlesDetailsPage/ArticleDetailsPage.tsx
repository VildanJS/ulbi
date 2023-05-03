import React, { FC, memo, useCallback } from 'react'
import cls from './ArticleDetailsPage.module.scss'
import { IArticleDetailsPage } from '../../types'
import classNames from 'classnames'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { ArticleDetailsRecommendations } from '@/features/articles/articleDetails/ArticleDetailsRecommendations'
import { Page } from '@/shared/ui/Page'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'
import { ArticleDetailsComments } from '../ArticleDetailsComments'
import { ArticleDetailsRating } from '@/features/articles/articleDetails/ArticleDetailsRating'

const ArticleDetailsPage: FC<IArticleDetailsPage> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const articleDetailsPageClass = classNames(className, cls.articleDetailsPage)

  if (!id) {
    return null
  }

  return (
    <Page className={articleDetailsPageClass}>
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id} />
      {/*<ArticleDetailsRecommendations className={cls.recommendations} />*/}
      <ArticleDetailsRating articleId={id} />
      <ArticleDetailsComments id={id} />
    </Page>
  )
}
export default memo(ArticleDetailsPage)
