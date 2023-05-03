import { FC } from 'react'
import cls from './AppItem.module.scss'
import classNames from 'classnames'
import { Item, ItemProps } from 'react-aria-components'
import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { useField } from 'formik'


export const AppItem = (props: ItemProps) => {

  const { className } = props
  const appItemClass = classNames(className, cls.appItem)
  const { theme } = useTheme()
  const themeClass = theme === Theme.DARK ? cls.dark : cls.light

  return (
    <Item
      {...props}
      className={({ isFocused, isSelected }) =>
        classNames(appItemClass, themeClass, { [cls.focused]: isFocused, [cls.selected]: isSelected })
      }
    />
  )
}
