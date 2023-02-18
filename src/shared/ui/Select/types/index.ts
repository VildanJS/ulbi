import {PropsWithChildren} from 'react'

export enum SelectThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ISelect extends PropsWithChildren {
  className?: string,
  theme?: SelectThemes,
  collapsed: boolean
}

export {
  ISelect
}
