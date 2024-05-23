import { FC, PropsWithChildren, Suspense } from 'react'

import classNames from 'classnames'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ScrollToTopButton } from '@/features/scrollToTopButton'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'


import { RequireAuth } from './RequireAuth'
import { AppRoutesProps } from '../../../../shared/types/router'
import { AppRouteConfig } from '../../../config/routeConfig/routeConfig'

interface AppRouterRedesignedProps extends PropsWithChildren {
  className?: string
}

export const AppRouterRedesigned: FC<AppRouterRedesignedProps> = ({
  className,
}) => {
  const routes = Object.values(AppRouteConfig).map((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    )
    return {
      path: route.path,
      element: route?.auth ? (
        <RequireAuth roles={route.roles}>{element}</RequireAuth>
      ) : (
        element
      ),
    }
  })

  const mainLayoutClassname = classNames(className)

  const router = createBrowserRouter([
    {
      element: (
        <MainLayout
          className={mainLayoutClassname}
          navbar={<Navbar />}
          toolbar={<ScrollToTopButton />}
          sidebar={<Sidebar />}
        />

      ),
      children: [...routes],
    },
  ])

  return <RouterProvider router={router} />
}
