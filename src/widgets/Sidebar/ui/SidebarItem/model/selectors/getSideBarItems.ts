import {createSelector} from '@reduxjs/toolkit'
import {getUserAuthData} from '@/entities/User'
import {AppRoutePaths} from '@/app/config/routeConfig/routeConfig'
import HomeIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import {SidebarItemType} from '../../types'

export const getSideBarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItems: SidebarItemType[] = [
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

    ]

    if (userData) {
      sidebarItems.push(
        {
          path: AppRoutePaths.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true,
        },
        {
          path: AppRoutePaths.articles,
          Icon: ArticleIcon,
          text: 'Article',
          authOnly: true,
        })
    }
    return sidebarItems
  })
