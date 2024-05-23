import { PropsWithChildren } from 'react'

export enum ForbiddenPageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IForbiddenPage extends PropsWithChildren {
  className?: string
  theme?: ForbiddenPageThemes
}

export { IForbiddenPage }
