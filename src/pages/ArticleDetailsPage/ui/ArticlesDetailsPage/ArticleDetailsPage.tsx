import { FC, memo } from 'react'

import classNames from 'classnames'
import { useParams } from 'react-router-dom'

import { ArticleDetails } from '@/entities/Article'
import { ArticleDetailsRating } from '@/features/articles'
import { Page } from '@/shared/ui/Page'

import cls from './ArticleDetailsPage.module.scss'
import { IArticleDetailsPage } from '../../types'
import { ArticleDetailsComments } from '../ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader'


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
