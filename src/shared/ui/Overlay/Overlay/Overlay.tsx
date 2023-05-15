import { memo, ReactNode } from 'react'

import classNames from 'classnames'

import cls from './Overlay.module.scss'

interface OverlayProps {
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
}

export const Overlay = memo((props: OverlayProps) => {
  const { children, className, onClick } = props

  return (
    <div onClick={onClick} className={classNames(cls.Overlay, className)} >
      {children}
    </div>
  )
})
