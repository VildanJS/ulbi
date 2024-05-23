import { PropsWithChildren } from 'react'

export enum NotificationsDrawerThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface INotificationsDrawer extends PropsWithChildren {
  className?: string
  theme?: NotificationsDrawerThemes
}

export { INotificationsDrawer }
