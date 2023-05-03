import { FC } from 'react'
import cls from './AppMenu.module.scss'
import { IAppMenu } from '../types'
import classNames from 'classnames'
import {
  Menu, MenuTrigger,
  MenuProps, MenuTriggerProps, Popover, Button,
} from 'react-aria-components'
import { AppButton } from '@/shared/ui/AppButton'
import { AppPopover } from '@/shared/ui/AppPopover'
import { Theme, useTheme } from '@/app/providers/ThemeProvider'


// @ts-ignore
interface AppMenuProps<T>
  extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: string;
}

export const AppMenu = <T extends object>(
  { label, className, children, ...props }: AppMenuProps<T>
) => {
  const { theme } = useTheme()
  const themeClass = theme === Theme.DARK ? 'dark' : 'light'
  const appMenuClass = classNames(className, cls.button, cls[themeClass])

  return (
    <MenuTrigger {...props}>
      <Button className={appMenuClass}>{label}</Button>
      <Popover>
        <Menu {...props}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
