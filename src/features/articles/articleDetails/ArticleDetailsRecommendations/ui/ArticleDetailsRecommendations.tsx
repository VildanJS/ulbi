import { FC, useEffect } from 'react'
import cls from './ArticleDetailsRecommendations.module.scss'
import { IArticleDetailsRecommendations } from '../types'
import classNames from 'classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
import { ArticleItemList } from '@/entities/Article'
import { useSelector } from 'react-redux'
import { Text } from '@/shared/ui/Text/Text'
import ArticleDetailsRecommendationsReducer,
{
  getArticleDetailsRecommendations
} from '../model/slices/ArticleDetailsRecommendationsSlice'
import {
  getArticleDetailsRecommendationsError,
  getArticleDetailsRecommendationsIsLoading
} from '../model/selectors/getArticleDetailsRecommendations'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import fetchRecommendedArticles
  from '@/features/articles/articleDetails/ArticleDetailsRecommendations/model/services/fetchRecommendedArticles'
import { useTranslation } from 'react-i18next'
import { rtkApi } from '@/shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

const useArticleRecommendations = recommendationsApi.useGetArticleRecommendationsQuery

const reducers: ReducersList = {}

export const ArticleDetailsRecommendations: FC<IArticleDetailsRecommendations> = (props) => {
  debugger
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
    <div className={articleDetailsRecommendationsClass}>
      <Text title={t('Рекомендации')}></Text>
      <ArticleItemList
        target="_blank" className={cls.noWrap}
        articles={recommendations}
        isLoading={isLoading} view={'cards'}
      />
    </div>
  )
}
