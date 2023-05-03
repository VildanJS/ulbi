import { FC } from 'react'
import { IPortal } from '../types'
import { createPortal } from 'react-dom'

export const Portal: FC<IPortal> = (props) => {
  const {
    children,
    element = document.body
  } = props

  return createPortal(children, element)
}
