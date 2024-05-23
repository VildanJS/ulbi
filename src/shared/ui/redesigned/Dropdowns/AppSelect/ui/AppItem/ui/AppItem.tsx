
import classNames from 'classnames'
import { ListBoxItem, ListBoxItemProps } from 'react-aria-components'


import cls from './AppItem.module.scss'


export const AppItem = (props: ListBoxItemProps) => {
  const { className } = props
  const ItemClass = classNames(className, cls.item)

  const getItemClassnames = (
    { isFocused, isSelected }: {isFocused: boolean, isSelected: boolean}) =>
  {
    return classNames(
      ItemClass,
      { [cls.focused]: isFocused,
        ['is-selected']: isSelected
      })
  }


  return (
    <ListBoxItem
      {...props}
      className={getItemClassnames}
    />
  )
}
