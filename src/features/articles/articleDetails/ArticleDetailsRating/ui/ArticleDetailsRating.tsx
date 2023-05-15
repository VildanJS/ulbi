import { FC, useCallback } from 'react'

import classNames from 'classnames'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'

import cls from './ArticleDetailsRating.module.scss'
import { RatingCard } from '../../../../../entities/Rating'
import {
  useGetArticleRating,
  useRateArticleRatingMutation,
  useUpdateArticleRatingMutation
} from '../api/articleRatingApi'

interface ArticleDetailsRatingProps {
  className?: string,
  articleId: string
}

export const ArticleDetailsRating: FC<ArticleDetailsRatingProps> = (props) => {
  const { className, articleId } = props
  const articleDetailsRatingClass = classNames(className, cls.articleDetailsRating)

  const user = useSelector(getUserAuthData)

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: user?.id ?? ''
  })

  const [rateArticleRatingMutation] = useRateArticleRatingMutation()
  const [updateArticleRatingMutation] = useUpdateArticleRatingMutation()


  const ratingData = data?.[0]
  console.log('-> ratingData', ratingData)
  const rateArticle = useCallback((rate: number, feedback?: string) => {
    const nextRatingData = {
      userId: user?.id ?? '',
      articleId,
      rate,
      feedback
    }
    try {
      if (ratingData?.id) updateArticleRatingMutation({ id: ratingData?.id ?? '', ...nextRatingData })
      else rateArticleRatingMutation(nextRatingData)
    } catch (e) {
      console.log(e)
    }
  }, [articleId, rateArticleRatingMutation, ratingData?.id, updateArticleRatingMutation, user?.id])
  const onFeedback = useCallback((rate: number, feedback?: string) => {
    rateArticle(rate, feedback)
  }, [rateArticle])
  const onCancel = useCallback((rate: number) => {
    rateArticle(rate)
  }, [rateArticle])

  if(!articleId) return <Text title={'НЕТ ID'}></Text>
  if(isLoading) return <Skeleton width={'100%'} height={100} />

  return (
    <RatingCard
      onCancel={onCancel}
      onFeedback={onFeedback}
      initialFeedback={ratingData?.feedback}
      initialStarsCount={ratingData?.rate}
      className={articleDetailsRatingClass}
      feedbackTitle={'Ваш комментарий'}
      title={'Оставьте пожалуйста отзыв'}
    />
  )
}
