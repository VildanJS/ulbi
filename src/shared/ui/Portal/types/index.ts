import { PropsWithChildren } from 'react'

export enum PortalThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IPortal extends PropsWithChildren {
  element?: HTMLElement
}

export {
  IPortal
}
