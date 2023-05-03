import { RouteProps } from 'react-router-dom'
import MainPage from '@/pages/MainPage'
import AboutPage from '@/pages/AboutPage'
import ProfilePage from '@/pages/ProfilePage'
import { NotFound } from '@/pages/NotFound'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { UserRole } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
  auth?: boolean;
  roles?: UserRole[]
}

export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile', //id
  NOT_FOUND = 'not_found',
  FORBIDDEN = 'forbidden',
  ADMIN_PANEL = 'admin_panel',
  ARTICLES = 'articles',  //id
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_CREATE = 'article_create',
}

export const AppRoutePaths: Record<AppRouteNames, string> = {
  [AppRouteNames.MAIN]: '/',
  [AppRouteNames.PROFILE]: '/profile/',
  [AppRouteNames.ABOUT]: '/about',
  [AppRouteNames.ADMIN_PANEL]: '/admin',
  [AppRouteNames.NOT_FOUND]: '*',
  [AppRouteNames.FORBIDDEN]: '/forbidden',
  [AppRouteNames.ARTICLES]: '/articles',
  [AppRouteNames.ARTICLE_DETAILS]: '/articles/',
  [AppRouteNames.ARTICLE_CREATE]: '/articles/new',
  [AppRouteNames.ARTICLE_EDIT]: '/articles/:id/edit/'

}

export const AppRouteConfig: Record<AppRouteNames, AppRoutesProps> = {
  [AppRouteNames.MAIN]: {
    path: AppRoutePaths.main,
    element: (
      <MainPage />
    )
  },
  [AppRouteNames.ABOUT]: {
    path: AppRoutePaths.about,
    element: (
      <AboutPage />
    )
  },
  [AppRouteNames.ADMIN_PANEL]: {
    path: AppRoutePaths.admin_panel,
    element: (
      <AdminPanelPage />
    ),
    auth: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },
  [AppRouteNames.PROFILE]: {
    path: `${AppRoutePaths.profile}:id`,
    element: (
      <ProfilePage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLE_DETAILS]: {
    path: `${AppRoutePaths.article_details}:id`,
    element: (
      <ArticleDetailsPage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLES]: {
    path: AppRoutePaths.articles,
    element: (
      <ArticlesPage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLE_CREATE]: {
    path: AppRoutePaths.article_create,
    element: (
      <ArticleEditPage />
    ),
    auth: true
  },
  [AppRouteNames.ARTICLE_EDIT]: {
    path: AppRoutePaths.article_edit,
    element: (
      <ArticleEditPage />
    ),
    auth: true
  },
  [AppRouteNames.NOT_FOUND]: {
    path: AppRoutePaths.not_found,
    element: <NotFound />
  },
  [AppRouteNames.FORBIDDEN]: {
    path: AppRoutePaths.forbidden,
    element: <ForbiddenPage />
  },


}
