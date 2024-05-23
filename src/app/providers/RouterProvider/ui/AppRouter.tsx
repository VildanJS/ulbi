import { Suspense, useCallback } from 'react'

import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps } from '@/shared/types/router'

import { PageLoader } from '@/widgets/PageLoader'

import { RequireAuth } from './RequireAuth'
import { AppRouteConfig } from '../../../config/routeConfig/routeConfig'

const AppRouter = () => {
  const renderRouteWithAuth = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route?.auth ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    )
  }, [])

  return (
    <Routes>{Object.values(AppRouteConfig).map(renderRouteWithAuth)}</Routes>
  )
}

export default AppRouter
