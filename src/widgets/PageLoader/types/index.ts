import { PropsWithChildren } from 'react'

export enum PageLoaderThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IPageLoader extends PropsWithChildren {
  className?: string,
  theme?: PageLoaderThemes,
}

export {
  IPageLoader
}
