import { FC, useEffect } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { ArticleItemList } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtkApi'
import { Text } from '@/shared/ui/redesigned/Text'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './ArticleDetailsRecommendations.module.scss'
import { fetchRecommendedArticles }
  from '../../ArticleDetailsRecommendations/model'
import { IArticleDetailsRecommendations } from '../types'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user'
        }
      })
    })
  })
})

const useArticleRecommendations = recommendationsApi.useGetArticleRecommendationsQuery

export const ArticleDetailsRecommendations: FC<IArticleDetailsRecommendations> = (props) => {
  const { className } = props
  const articleDetailsRecommendationsClass = classNames(className, cls.articleDetailsRecommendations)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { data: recommendations, isLoading, error } = useArticleRecommendations(3)

  useEffect(() => {
    dispatch(fetchRecommendedArticles())
  }, [dispatch])

  if (error) return (
    <Text title={'Ошибка'} />
  )

  return (
    <VStack gap={'16'} className={articleDetailsRecommendationsClass}>
      <Text size={'M'} title={t('Рекомендации')}></Text>
      <ArticleItemList
        target="_blank" className={cls.noWrap}
        articles={recommendations}
        isLoading={isLoading} view={'cards'}
      />
    </VStack>
  )
}
