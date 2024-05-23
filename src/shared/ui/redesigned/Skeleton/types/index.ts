import { PropsWithChildren } from 'react'

export enum SkeletonThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ISkeleton extends PropsWithChildren {
  className?: string
  theme?: SkeletonThemes
  height?: string | number
  width?: string | number
  border?: string
}

export { ISkeleton }
