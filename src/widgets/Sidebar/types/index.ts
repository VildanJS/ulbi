import {PropsWithChildren} from 'react'

export enum SidebarThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ISidebar extends PropsWithChildren {
  className?: string,
  theme?: SidebarThemes,
}

export {
  ISidebar
}
