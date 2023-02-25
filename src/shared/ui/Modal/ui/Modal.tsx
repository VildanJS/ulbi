import React, { FC, useCallback, useEffect } from 'react'
import cls from './Modal.module.scss'
import { IModal } from '../types'
import classNames from 'classnames'
// import { Portal } from 'shared/ui/Portal'

export const Modal: FC<IModal> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  const modalClass = classNames(className, cls.modal, { [cls.opened]: isOpen })

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {

    if (e.key == 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onKeyDown])

  const contentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className={modalClass}>
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={contentClickHandler}>
          {children}
        </div>
      </div>
    </div>
  )
}
