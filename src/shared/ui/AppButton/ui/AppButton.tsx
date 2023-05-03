import { Button, ButtonProps } from 'react-aria-components'
import React, { CSSProperties, MutableRefObject, PropsWithChildren, useRef } from 'react'
import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import cls from './AppButton.module.scss'
import classNames from 'classnames'
import { AriaButtonProps, useButton } from 'react-aria'


interface AppButtonProps extends AriaButtonProps {
  className?: string,
  buttonRef?: MutableRefObject<HTMLButtonElement | null>;
}

export function AppButton(props: AppButtonProps) {
  const ref = useRef(null)
  const { className, children, buttonRef = ref, ...otherProps } = props
  const { theme } = useTheme()
  const themeClass = theme === Theme.DARK ? 'dark' : 'light'

  const { buttonProps } = useButton(otherProps, ref)

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={classNames(cls.appButton, cls[themeClass], className)}
    >
      {children}
    </button>
  )
}
