import {PropsWithChildren} from 'react'
import {SidebarItemType} from '../model'

export enum SidebarItemThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ISidebarItem extends PropsWithChildren {
  item: SidebarItemType,
  collapsed: boolean
  theme?: SidebarItemThemes,

}

export {
  ISidebarItem
}
