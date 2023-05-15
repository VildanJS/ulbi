import { PropsWithChildren } from 'react'

export enum CodeThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ICode extends PropsWithChildren {
  className?: string,
  theme?: CodeThemes,
  text: string
}

export {
  ICode
}
