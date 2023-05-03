import React, { FC } from 'react'
import cls from './AppDialog.module.scss'
import { IAppDialog } from '../types'
import classNames from 'classnames'
import { AriaDialogProps, useDialog } from 'react-aria'

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AppDialog: FC<DialogProps> = (props) => {
  const { title, children, className, ...otherProps } = props

  const ref = React.useRef(null)
  const { dialogProps, titleProps } = useDialog(otherProps, ref)

  const appDialogClass = classNames(className, cls.appDialog)

  return (
    <div
      {...dialogProps}
      ref={ref}
      className={appDialogClass}
    >
      {title &&
        (
          <h3 {...titleProps}>
            {title}
          </h3>
        )}
      {children}
    </div>
  )
}
