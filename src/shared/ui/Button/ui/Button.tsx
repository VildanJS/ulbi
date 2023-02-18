import { FC } from 'react'
import cls from './Button.module.scss'
import { EButtonSize, IButton } from '../types'
import classNames from 'classnames'

export const Button: FC<IButton> = (props) => {
  const {
    children,
    square,
    size,
    theme,
    className,
    onClick,
    ...other } = props
  const buttonClass = classNames(cls.button, cls[theme], className, cls[EButtonSize[size]], { [cls.square]: square})

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
