import { ReactNode } from 'react'

import classNames from 'classnames'
import {
  Menu, MenuTrigger,
  MenuProps, MenuTriggerProps, Popover, Button,
} from 'react-aria-components'



import cls from './AppMenu.module.scss'



interface AppMenuProps<T>
  extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: ReactNode;
}

export const AppMenu = <T extends object>(
  { label, className, children, ...props }: AppMenuProps<T>
) => {

  const MenuClass = classNames(className, cls.menu)


  return (
    <MenuTrigger {...props}>
      <Button >{label}</Button>
      <Popover  >
        <Menu className={MenuClass} {...props}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
