import {PropsWithChildren} from 'react'

export enum ThemeSwitcherThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IThemeSwitcher extends PropsWithChildren {
  className?: string,
  theme?: ThemeSwitcherThemes,
}

export {
  IThemeSwitcher
}
