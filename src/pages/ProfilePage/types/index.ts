import {PropsWithChildren} from 'react'

export enum ProfilePageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IProfilePage extends PropsWithChildren {
  className?: string,
  theme?: ProfilePageThemes,
}

export {
  IProfilePage
}
