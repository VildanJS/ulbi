import {FC, PropsWithChildren, SVGAttributes} from 'react'

export enum SidebarItemThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: FC<SVGAttributes<SVGElement>>,
  authOnly?: boolean;
}

interface ISidebarItem extends PropsWithChildren {
  item: SidebarItemType,
  collapsed: boolean
  theme?: SidebarItemThemes,

}

export {
  ISidebarItem
}
