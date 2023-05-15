import { memo, MutableRefObject, useRef } from 'react'


import classNames from 'classnames'
import { AriaButtonProps, useButton } from 'react-aria'

import cls from './AppButton.module.scss'


type ButtonSize = 'm' | 'l' | 'xl'
type ButtonThemes = 'clear' | 'outline' | 'background' | 'background-inverted'

interface AppButtonProps extends AriaButtonProps {
  className?: string,
  theme?: ButtonThemes,
  square?: boolean,
  size?: ButtonSize,
  disabled?: boolean,
  angular?: boolean,
  buttonRef?: MutableRefObject<HTMLButtonElement | null> // react-aria prop
}

function AppButton(props: AppButtonProps) {
  const ref = useRef(null)
  const {
    className,
    children,
    disabled,
    angular,
    square,
    theme = 'background',
    size = 'M',
    buttonRef = ref,
    ...otherProps } = props

  // const { theme } = useTheme()
  // const themeClass = theme === Theme.DARK ? 'dark' : 'light'

  const { buttonProps } = useButton(otherProps, ref)

  const buttonClass = classNames(
    cls.appButton, className,
    cls[theme], cls[size],
    { [cls.square]: square, [cls.disabled]: disabled, [cls.angular]: angular }
  )

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={buttonClass}
    >
      {children}
    </button>
  )
}

export default memo(AppButton)
