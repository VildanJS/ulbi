import { FC } from 'react'

import classNames from 'classnames'
import { LinkProps, NavLink } from 'react-router-dom'

import cls from './AppLink.module.scss'

interface IAppLink extends LinkProps {
  className?: string
  activeClassName?: string
  variant?: AppLinkThemes
}

export type AppLinkThemes = 'primary' | 'red'


export const AppLink: FC<IAppLink> = (props) => {
  const {
    to,
    className,
    activeClassName = 'active',
    children,
    variant = 'primary',
    ...other
  } = props
  const appLinkClass = ({ isActive }: { isActive: boolean }) => {
    return classNames(className, cls.appLink, cls[variant], {
      [activeClassName]: isActive,
    })
  }

  return (
    <NavLink to={to} className={appLinkClass}  {...other} >
      {children}
    </NavLink>
  )
}
