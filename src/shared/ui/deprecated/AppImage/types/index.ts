import { ImgHTMLAttributes, ReactElement } from 'react'

export enum AppImageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAppImage extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  theme?: AppImageThemes
  fallback?: ReactElement
  errorFallback?: ReactElement
}

export { IAppImage }
