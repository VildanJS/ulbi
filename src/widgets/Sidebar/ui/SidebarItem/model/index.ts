import {FC, SVGAttributes} from 'react'
import {AppRoutePaths} from 'app/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: FC<SVGAttributes<SVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: AppRoutePaths.main,
    Icon: HomeIcon,
    text: 'Main'
  },
  {
    path: AppRoutePaths.about,
    Icon: AboutIcon,
    text: 'About'
  },
  {
    path: AppRoutePaths.profile,
    Icon: ProfileIcon,
    text: 'Profile'
  },
]
