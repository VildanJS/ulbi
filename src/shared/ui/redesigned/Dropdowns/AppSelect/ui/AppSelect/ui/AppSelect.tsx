import React, { ComponentType, Key, useContext } from 'react'

import classNames from 'classnames'
import { FormikContext, useFormikContext } from 'formik'
import { Label } from 'react-aria-components'
import {
  Select,
  SelectValue,
  SelectProps,
  Popover,
} from 'react-aria-components'

import ArrowButton from '@/shared/assets/icons/arrow-bottom.svg'

import cls from './AppSelect.module.scss'
import { AppButton } from '../../../../../AppButton'
import './AppSelect.module.scss'
import { Icon } from '../../../../../Icon'
import { AppListBox } from '../../../../AppListBox'

interface AppSelectProps<T extends object> extends SelectProps<T> {
  children?: React.ReactNode | React.ReactNode[]
  label?: string
  className?: string
  formikField?: string
  isSmall?: boolean
}

export function AppSelect<T extends object>(props: AppSelectProps<T>) {
  const {
    className,
    children,
    label,
    onSelectionChange,
    isSmall = false,
    ...otherProps
  } = props
  const AppSelectClass = classNames(className, cls.select)


  const [open, setOpen] = React.useState(false)
  const ArrowButtonClassname = classNames({
    [cls.collapsedBtn]: open
  })


  return (
    <Select
      aria-label='Select'
      className={AppSelectClass}
      isOpen={open}
      onOpenChange={setOpen}
      onSelectionChange={onSelectionChange}
      {...otherProps}
    >
      <Label>{label}</Label>
      <AppButton variant={'filled'} className={cls.buttonWrapper}>
        <SelectValue />
        {!isSmall && <Icon className={ArrowButtonClassname} Svg={ArrowButton}></Icon>}
      </AppButton>
      <Popover>
        <AppListBox className={cls.listBox}>{children}</AppListBox>
      </Popover>
    </Select>
  )
}

export const forFormikField = (Component: ComponentType) => {
  return <T extends object>(props: AppSelectProps<T>) => {
    const formikContext = useContext(FormikContext)

    if (formikContext) {
      const formikProps = useFormikContext()
      const formikHandler = (key: Key) => {
        const { formikField } = props
        if (formikProps) formikProps.setFieldValue(formikField || '', key)
      }
      return <Component onSelectionChange={formikHandler} {...props} />
    }

    return <Component {...props} />
  }
}
