import { FC } from 'react'
import cls from './User.module.scss'
import { IUser } from '../types'
import classNames from 'classnames'

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
