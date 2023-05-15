import classNames from 'classnames'
import { Item, ItemProps } from 'react-aria-components'
import { Theme } from 'shared/const/theme'
import useTheme from 'shared/utils/hooks/useTheme/useTheme'

import cls from './AppItem.module.scss'


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
