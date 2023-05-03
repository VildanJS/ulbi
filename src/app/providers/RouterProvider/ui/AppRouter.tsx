import { Route, Routes, RouteProps } from 'react-router-dom'
import { AppRouteConfig, AppRoutesProps } from '@/app/config/routeConfig/routeConfig'
import { Suspense, useCallback } from 'react'
import { RequireAuth } from './RequireAuth'
import { PageLoader } from '@/widgets/PageLoader'

const AppRouter = () => {
  const renderRouteWithAuth = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route?.auth
            ? (<RequireAuth roles={route.roles}>{element}</RequireAuth>)
            : element
        }
      />
    )
  }, [])

  return (
    <Routes>
      {Object.values(AppRouteConfig).map(renderRouteWithAuth)}
    </Routes>
  )
}

export default AppRouter
