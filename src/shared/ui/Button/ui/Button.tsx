import {FC, memo} from 'react'
import cls from './Button.module.scss'
import { EButtonSize, IButton } from '../types'
import classNames from 'classnames'

export const Button: FC<IButton> = memo((props) => {
  const {
    children,
    disabled,
    square,
    size,
    theme,
    className,
    onClick,
    ...other } = props
  const buttonClass = classNames(
    cls.button, className,
    cls[theme], cls[EButtonSize[size]],

    { [cls.square]: square, [cls.disabled]: disabled }
  )

  return (
    <button
      {...other}
      type="button"
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  )
})
