import { FC } from 'react'

import { createPortal } from 'react-dom'

import { IPortal } from '../types'

export const Portal: FC<IPortal> = (props) => {
  const {
    children,
    element = document.body
  } = props

  return createPortal(children, element)
}
