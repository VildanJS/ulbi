import React, { FC, JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode } from 'react'
import cls from './AppPopoverTrigger.module.scss'
import { IAppPopoverTrigger } from '../types'
import classNames from 'classnames'
import { useOverlayTriggerState } from 'react-stately'
import { PopoverAria, useOverlayTrigger } from 'react-aria'
import { AppButton } from '@/shared/ui/AppButton'
import { AppPopover } from '@/shared/ui/AppPopover/ui/AppPopover'


interface AppPopoverTrigger {
  label: string,
  className?: string,
  children: ReactElement<any, string | JSXElementConstructor<any>>
}

export const AppPopoverTrigger: FC<AppPopoverTrigger> = (props) => {
  const { className, children, label, ...otherProps  } = props
  const AppPopoverTriggerClass = classNames(className, cls.appPopoverTrigger)

  const ref = React.useRef(null)
  const state = useOverlayTriggerState(otherProps)
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  )

  return (
    <div className={AppPopoverTriggerClass}>
      <AppButton {...triggerProps} buttonRef={ref}>{label}</AppButton>
      {state.isOpen &&
        (
          <AppPopover {...otherProps} triggerRef={ref} state={state} >
            { children ? React.cloneElement(children, overlayProps) : null }
          </AppPopover>
        )}
    </div>
  )
}
