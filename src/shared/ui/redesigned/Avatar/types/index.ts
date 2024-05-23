import { PropsWithChildren } from 'react'

export enum AvatarThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAvatar extends PropsWithChildren {
  className?: string
  theme?: AvatarThemes
  size?: number
  alt: string
  src?: string
  invertedFallback?: boolean
}

export { IAvatar }
