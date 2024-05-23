import { PropsWithChildren } from 'react'

export enum SidebarThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface SidebarDeprecatedProps extends PropsWithChildren {
  className?: string
  theme?: SidebarThemes
}

export { SidebarDeprecatedProps }
