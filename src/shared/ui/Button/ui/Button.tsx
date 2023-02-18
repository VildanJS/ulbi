import { FC } from 'react'
import cls from './Button.module.scss'
import { IButton } from '../types'
import classNames from 'classnames'

export const Button: FC<IButton> = (props) => {
  const { children, theme, className, onClick, ...other } = props
  const buttonClass = classNames(cls.button, cls[theme], className)

  return (
    <button
      {...other}
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  )
}
