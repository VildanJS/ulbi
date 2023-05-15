import { createSelector } from '@reduxjs/toolkit'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile
} from 'shared/const/router'

import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'

import { SidebarItemType } from '../../types'

export const getSideBarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItems: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'Main'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'About'
      },

    ]

    if (userData) {
      sidebarItems.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'Article',
          authOnly: true,
        })
    }
    return sidebarItems
  })
