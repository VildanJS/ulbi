import { createSelector } from '@reduxjs/toolkit'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router'
import { toggleFeatures } from '@/shared/utils/featereFlags/toggleFeatureFlag'

import { getUserAuthData } from '@/entities/User'
import AboutIconDeprecated from '@/shared/assets/icons/about.svg'
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import HomeIconDeprecated from '@/shared/assets/icons/home.svg'
import MainIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg'

import { SidebarItemType } from '../../types'

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => HomeIconDeprecated,
        on: () => MainIcon,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'О сайте',
    },
  ]

  if (userData) {
    sidebarItems.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: 'Статьи',
        authOnly: true,
      },
    )
  }
  return sidebarItems
})
