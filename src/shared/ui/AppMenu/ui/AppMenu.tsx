/* eslint-disable @typescript-eslint/ban-ts-comment*/
import classNames from 'classnames'
import {
  Menu, MenuTrigger,
  MenuProps, MenuTriggerProps, Popover, Button,
} from 'react-aria-components'

import { Theme } from '@/shared/const/theme'
import useTheme from '@/shared/utils/hooks/useTheme/useTheme'

import cls from './AppMenu.module.scss'


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
        <Menu  className={cls.menu} {...props}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
