import { PropsWithChildren } from 'react'

export enum AppMenuThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAppMenu extends PropsWithChildren {
  className?: string,
  theme?: AppMenuThemes,
}

export {
  IAppMenu
}
