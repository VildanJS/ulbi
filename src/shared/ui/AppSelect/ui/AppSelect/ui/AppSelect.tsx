import React, { ComponentType, Key, useContext } from 'react'

import classNames from 'classnames'
import { FormikContext, useFormikContext } from 'formik'
import { Select, SelectProps, Popover, Button } from 'react-aria-components'
import { SelectValue } from 'react-aria-components'

import cls from './AppSelect.module.scss'
import { AppListBox } from '../../../../AppListBox'


interface AppSelectProps<T extends object> extends SelectProps<T> {
  children?: React.ReactNode | React.ReactNode[]
  label?: string,
  className?: string,
  formikField?: string,
  collapsed?: boolean
}

export function AppSelect<T extends object>(props: AppSelectProps<T>) {
  const {
    className,
    collapsed = false,
    children,
    label,
    onSelectionChange,
    ...otherProps
  } = props
  const AppSelectClass = classNames(className, cls.select)

  return (
    <Select aria-label="Select" className={AppSelectClass} onSelectionChange={onSelectionChange}  {...otherProps}>
      {
        !collapsed
          ? (<label htmlFor='standard-select'>{label}</label>)
          : <></>
      }
      <Button  className={classNames(cls.button)}>
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

export const forFormikField = (Component: ComponentType) => {
  return <T extends object>(props: AppSelectProps<T>) => {
    const formikContext = useContext(FormikContext)

    if (formikContext) {
      const formikProps = useFormikContext()
      const formikHandler = (key: Key) => {
        const { formikField } = props
        if(formikProps) formikProps.setFieldValue(formikField || '', key)
      }

      return <Component onSelectionChange={formikHandler} {...props} />
    }

    return <Component {...props} />

  }
}

