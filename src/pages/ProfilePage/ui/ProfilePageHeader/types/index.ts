import {PropsWithChildren} from 'react'

export enum ProfilePageHeaderThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IProfilePageHeader extends PropsWithChildren {
  className?: string,
  theme?: ProfilePageHeaderThemes,
}

export {
  IProfilePageHeader
}
