import React, { memo, Ref, useRef } from 'react'
import cls from './AboutPage.module.scss'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { StarRating } from '@/shared/ui/StarRating'
import { RatingCard } from '@/entities/Rating'
import { ArticleDetailsRating } from '../../features/articles/articleDetails/ArticleDetailsRating'
import { useGetArticleRating } from '@/features/articles/articleDetails/ArticleDetailsRating/api/articleRatingApi'

const AboutPage = () => {
  const { t } = useTranslation('about')
  const aboutPageClassName = classNames(cls.aboutPage)



  return (
    <div className={aboutPageClassName}>
      <h1>ABOUT</h1>
    </div>
  )
}

export default AboutPage
