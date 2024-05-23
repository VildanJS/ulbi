import { FC, PropsWithChildren, ReactElement } from 'react'

import classNames from 'classnames'
import { RouterProvider as AriaRouterProvider } from 'react-aria'
import { Outlet, useNavigate } from 'react-router-dom'

import cls from '@/shared/layouts/MainLayout/ui/MainLayout.module.scss'

interface IMainLayout extends PropsWithChildren {
  className?: string
  sidebar?: ReactElement
  navbar?: ReactElement
  toolbar?: ReactElement
}




export const MainLayout: FC<IMainLayout> = (props) => {
  const { navbar, sidebar, toolbar } = props
  const { className } = props
  const mainLayoutClass = classNames(className, cls.mainLayout)

  const navigate = useNavigate()

  return (
    <AriaRouterProvider navigate={navigate}>
      <div className={mainLayoutClass}>
        <div className={classNames(cls.sidebar)}>
          {sidebar}
        </div>
        <div className={classNames(cls.content)}>
          <Outlet />

        </div>
        <div className={classNames(cls.rightbar)}>
          <div className={classNames(cls.navbar)}>{navbar}</div>
          <div className={classNames(cls.toolbar)}>{toolbar}</div>
        </div>
      </div>
    </AriaRouterProvider>
  )
}
