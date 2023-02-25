import { PropsWithChildren } from 'react'

export enum LoginModalThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ILoginModal extends PropsWithChildren {
  className?: string,
  theme?: LoginModalThemes,
  isOpen: boolean,
  onClose?: () => void
}

export {
  ILoginModal
}
