import { FC, useState } from 'react'

import classNames from 'classnames'

import Star from '@/shared/assets/icons/star.svg'

import cls from './StarRating.module.scss'
import { StarRatingProps } from '../types'

const stars = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = (props) => {
  const { className, onSelectStar, currentStar = 0 } = props


  const [hoveredRating, setHoveredRating] = useState(0)

  const onClickHandler = (star: number) => () => {
    onSelectStar?.(star)
  }

  const starRatingClass = classNames(className, cls.starRating)
  return (
    <div className={starRatingClass}>
      {stars.map((star) => (
        <Star
          data-testid={`Star.${star}`}
          data-selected={star <= currentStar}
          onMouseLeave={() => setHoveredRating(0)}
          onMouseEnter={() => setHoveredRating(star)}
          onClick={onClickHandler(star)}
          className={classNames(( (star <= hoveredRating) || (star <= currentStar ) ) ? cls.active : cls.notActive, cls.starIcon)}
          key={star} />
      ))
      }
    </div>
  )
}
