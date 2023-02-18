import { RouteProps } from 'react-router-dom'
import MainPage from 'pages/MainPage'
import AboutPage from 'pages/AboutPage'
import { NotFound } from 'pages/NotFound'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'


export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const AppRoutePaths: Record<AppRouteNames, string> = {
  [AppRouteNames.MAIN]: '/',
  [AppRouteNames.ABOUT]: '/about',
  [AppRouteNames.NOT_FOUND]: '*',
}

export const AppRouteConfig: Record<AppRouteNames, RouteProps> = {
  [AppRouteNames.MAIN]: {
    path: AppRoutePaths.main,
    element: (
      <Suspense fallback={<PageLoader/>}>
        <MainPage/>
      </Suspense>
    )
  },
  [AppRouteNames.ABOUT]: {
    path: AppRoutePaths.about,
    element: (
      <Suspense fallback={<PageLoader/>}>
        <AboutPage/>
      </Suspense>
    )
  },
  [AppRouteNames.NOT_FOUND]: {
    path: AppRoutePaths.not_found,
    element: (
      <NotFound/>
    )
  },

}
