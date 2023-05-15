import { FC } from 'react'

import classNames from 'classnames'
import { Link } from 'react-router-dom'

import cls from './AppLink.module.scss'
import { IAppLink, AppLinkThemes } from '../types'

export const AppLink: FC<IAppLink> = (props) => {
  const {
    to, className, children,
    theme = AppLinkThemes.PRIMARY,
    ...other
  } = props
  const appLinkClass = classNames(className, cls.appLink, cls[theme])

  return (
    <Link
      {...other}
      to={to}
      className={appLinkClass}
    >
      {children}
    </Link>
  )
}
