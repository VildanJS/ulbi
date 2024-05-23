import { FC, memo } from 'react'

import classNames from 'classnames'
import { useParams } from 'react-router-dom'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { ArticlesDetailsInfo } from '@/widgets/ArticlesDetailsInfo'

import { ArticleDetails } from '@/entities/Article'
import { ArticleDetailsRating } from '@/features/articles'
import { ArticleDetailsRecommendations } from '@/features/articles'
import { Page } from '@/shared/ui/deprecated/Page'
import { Card } from '@/shared/ui/redesigned/Card'
import { ToggleFeatures } from '@/shared/utils/featereFlags/toggleFeatureFlag'

import cls from './ArticleDetailsPage.module.scss'
import { IArticleDetailsPage } from '../../types'
import { ArticleDetailsComments } from '../ArticleDetailsComments'

const ArticleDetailsPage: FC<IArticleDetailsPage> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const articleDetailsPageClass = classNames(className, cls.articleDetailsPage)

  if (!id) {
    return null
  }

  return (
    <Page className={articleDetailsPageClass}>
      <ArticleDetails id={id} />
      <ArticleDetailsRecommendations className={cls.recommendations} />

      <ToggleFeatures
        feature='isArticleRatingEnabled'
        on={<ArticleDetailsRating articleId={id} />}
        off={<Card>{'Оценка статей скоро появится!'}</Card>}
      />
      <ArticleDetailsComments id={id} />
    </Page>
  )
}

const ArticleDetailsPageWithWidget = () => (
  <StickyContentLayout
    content={<ArticleDetailsPage />}
    right={<ArticlesDetailsInfo />}
  />)
export default memo(ArticleDetailsPageWithWidget)
