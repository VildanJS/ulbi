import classNames from 'classnames'
import { ListBox, ListBoxProps } from 'react-aria-components'

import cls from './AppListBox.module.scss'

export function AppListBox(props: ListBoxProps<object>) {
  const { className } = props
  const ListBoxClass = classNames(className, cls.listBox)
  return (
    <ListBox className={ListBoxClass}>
      {props.children}
    </ListBox>
  )
}
