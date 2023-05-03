import { Select, SelectProps, ListBoxProps, ItemProps, PopoverProps, ListBox, Popover, Button } from 'react-aria-components'
import { Label, SelectValue } from 'react-aria-components'
import { AppButton } from '@/shared/ui/AppButton'

import React from 'react'
import { AppPopover } from '@/shared/ui/AppPopover'
import cls from './AppSelect.module.scss'
import classNames from 'classnames'
import { useField } from 'formik'
import { AppListBox } from '@/shared/ui/AppListBox'

interface AppSelectProps<T extends object> extends SelectProps<T> {
  children: React.ReactNode | React.ReactNode[]
  label?: string,
  className?: string
}


export function AppSelect<T extends object>(
  { className, children, label, ...props }: AppSelectProps<T>
) {
  const AppSelectClass = classNames(className, cls.select, cls.grid)

  const [ , , { setValue: setCountry }] = useField(props.id || '')

  return (
    <Select className={AppSelectClass} onSelectionChange={(key) => setCountry(key)}  {...props}>
      {label && <Label className={cls.grid_2} >{label}</Label>}
      <Button  className={classNames(cls.button, cls.grid_3)}>
        <SelectValue className={cls.selectValue} />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <AppListBox>
          {children}
        </AppListBox>
      </Popover>
    </Select>
  )
}
