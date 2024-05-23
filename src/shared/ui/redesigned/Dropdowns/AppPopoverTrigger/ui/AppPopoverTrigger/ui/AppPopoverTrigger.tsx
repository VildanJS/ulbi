import React, { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any*/

import classNames from 'classnames'
import { useOverlayTrigger } from 'react-aria'
import { useOverlayTriggerState } from 'react-stately'

import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

import cls from './AppPopoverTrigger.module.scss'
import { AppButton } from '../../../../../AppButton'
import { AppPopover } from '../../AppPopover'


interface AppPopoverTrigger {
  label?: ReactNode,
  className?: string,
  children: ReactElement<any, string | JSXElementConstructor<any>>
}

export const AppPopoverTrigger: FC<AppPopoverTrigger> = (props) => {
  const { className, children, label, ...otherProps  } = props
  const AppPopoverClass = classNames(className, cls.appPopoverWrapper)

  const ref = React.useRef(null)
  const state = useOverlayTriggerState(otherProps)
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  )

  return (
    <div>
      <AppButton variant='clear' {...triggerProps} ref={ref}>
        <Icon Svg={NotificationIcon}></Icon>
      </AppButton>
      {state.isOpen &&
        (
          <AppPopover className={AppPopoverClass} triggerRef={ref} state={state}  {...otherProps} >
            { children ? React.cloneElement(children, overlayProps) : null }
          </AppPopover>
        )}
    </div>
  )
}
