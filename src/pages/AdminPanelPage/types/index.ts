import { PropsWithChildren } from 'react'

export enum AdminPanelPageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAdminPanelPage extends PropsWithChildren {
  className?: string,
  theme?: AdminPanelPageThemes,
}

export {
  IAdminPanelPage
}
