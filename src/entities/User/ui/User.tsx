import { FC } from 'react'

import classNames from 'classnames'

import cls from './User.module.scss'
import { IUser } from '../types'

export const User: FC<IUser> = (props) => {
  const {
    className,
    children
  } = props
  const userClass = classNames(className, cls.user)

  return (
    <div className={userClass}>
      {children}
    </div>
  )
}
