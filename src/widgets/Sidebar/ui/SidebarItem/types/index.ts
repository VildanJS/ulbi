import { FC, SVGAttributes } from 'react'

export enum SidebarItemThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

export interface SidebarItemType {
  path: string
  text: string
  Icon: FC<SVGAttributes<SVGElement>>
  icon?: string
  authOnly?: boolean
}
