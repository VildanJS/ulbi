import { PropsWithChildren } from 'react'

export enum LoaderThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ILoader extends PropsWithChildren {
  className?: string,
  theme?: LoaderThemes,

}

export {
  ILoader
}
