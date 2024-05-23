import React, { ForwardedRef, useRef } from 'react'

import classnames from 'classnames'
import { AriaButtonProps, useButton } from 'react-aria'
import { ButtonContext, useContextProps } from 'react-aria-components'

import cls from './AppButton.module.scss'

type ButtonSize = 's' | 'm' | 'l' | 'xl'
export type ButtonVariant = 'clear' | 'outline' | 'filled'



interface AppButtonProps extends AriaButtonProps {
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  fullWidth?: boolean
}

/** Основной компонент для взаимодействия с пользователем */
export const AppButton = React.forwardRef((initialProps: AppButtonProps, buttonRef: ForwardedRef<HTMLButtonElement>) => {
  const defaultRef = useRef(null)
  const {
    className,
    children,
    variant = 'filled',
    size = 's',
    disabled = false,
    fullWidth = false,
    ...otherProps
  } = initialProps

  buttonRef = buttonRef ?? defaultRef

  const [props, ref] = useContextProps(otherProps, buttonRef, ButtonContext)

  const { buttonProps } = useButton(props, ref)

  const mods = {
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  }

  const buttonClassName = classnames(className, cls.appButton, cls[variant], cls[size], mods)

  return (
    <button disabled={disabled} {...buttonProps} ref={ref} className={buttonClassName}>
      {children}
    </button>
  )
})
