import { PropsWithChildren } from 'react'


export enum PageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IPage extends PropsWithChildren {
  className?: string,
  theme?: PageThemes,
}

export {
  IPage
}
