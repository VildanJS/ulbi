import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";
import React, {Suspense} from "react";

export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
}

export const AppRoutePaths: Record<AppRouteNames, string> = {
  [AppRouteNames.MAIN]: '/',
  [AppRouteNames.ABOUT]: '/about',
}

export const AppRouteConfig: Record<AppRouteNames, RouteProps> = {
  [AppRouteNames.MAIN]: {
    path: AppRoutePaths.main,
    element: (
      <Suspense fallback={<div>Loading Main Page...</div>}>
        <MainPage/>
      </Suspense>
    )
  },
  [AppRouteNames.ABOUT]: {
    path: AppRoutePaths.about,
    element: (
      <Suspense fallback={<div>Loading About Page...</div>}>
        <AboutPage/>
      </Suspense>
    )
  },
}
