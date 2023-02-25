import React, { PropsWithChildren } from 'react'

export enum ModalThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IModal extends PropsWithChildren {
  className?: string,
  children: React.ReactNode
  theme?: ModalThemes,
  isOpen: boolean,
  onClose: () => void
}

export {
  IModal
}
