import { AppRoutesProps } from '@/shared/types/router'

import { UserRole } from '@/entities/User'
import AboutPage from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import MainPage from '@/pages/MainPage'
import { NotFound } from '@/pages/NotFound'
import ProfilePage from '@/pages/ProfilePage'
import {
  AppRouteNames,
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile
} from '@/shared/const/router'

export const AppRouteConfig: Record<AppRouteNames, AppRoutesProps> = {
  [AppRouteNames.MAIN]: {
    path: getRouteMain(),
    element: (
      <MainPage />
    )
  },
  [AppRouteNames.ABOUT]: {
    path: getRouteAbout(),
    element: (
      <AboutPage />
    )
  },
  [AppRouteNames.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: (
      <AdminPanelPage />
    ),
    auth: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRouteNames.PROFILE]: {
    path: getRouteProfile(':id'),
    element: (
      <ProfilePage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: (
      <ArticleDetailsPage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLES]: {
    path: getRouteArticles(),
    element: (
      <ArticlesPage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: (
      <ArticleEditPage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: (
      <ArticleEditPage />
    ),
    auth: true
  },
  [AppRouteNames.NOT_FOUND]: {
    path: '*',
    element: <NotFound />
  },
  [AppRouteNames.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />
  },
}
