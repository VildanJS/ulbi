import { ListBox, ListBoxProps, ItemProps } from 'react-aria-components'
import cls from './AppListBox.module.scss'
import classNames from 'classnames'
import React from 'react'

export function AppListBox(props: ListBoxProps<object>) {
  const { className } = props
  const ListBoxClass = classNames(className, cls.listBox)
  return (
    <ListBox className={ListBoxClass}>
      {props.children}
    </ListBox>
  )
}
