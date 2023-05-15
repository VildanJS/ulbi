import React from 'react'

import classNames from 'classnames'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import type { AriaPopoverProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'

import cls from './AppPopover.module.scss'


interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode
  state: OverlayTriggerState
  className?: string
}

export function AppPopover(props: PopoverProps) {
  const { children, state, offset = 0, ...otherProps } = props

  const popoverRef = React.useRef(null)

  const { popoverProps, underlayProps } = usePopover({
    ...otherProps,
    offset,
    popoverRef
  }, state)

  const { className } = props
  const AppPopoverClass = classNames(className, cls.popover)

  return (
    <Overlay>
      <div {...underlayProps} />
      <div
        {...popoverProps}
        ref={popoverRef}
        className={AppPopoverClass}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
