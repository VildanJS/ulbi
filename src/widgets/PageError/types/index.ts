import { PropsWithChildren } from 'react'

export enum PageErrorThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IPageError extends PropsWithChildren {
  className?: string,
  theme?: PageErrorThemes,
}

export {
  IPageError
}
