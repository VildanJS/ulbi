import { PropsWithChildren } from 'react'
import { IRating } from '@/entities/Rating'

export enum StarRatingThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

export interface StarRatingProps extends PropsWithChildren {
  currentStar?: number,
  onSelectStar: (star: number) => void
  className?: string,
  theme?: StarRatingThemes,

}

