import { PropsWithChildren } from 'react'

export enum AppPopoverTriggerThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAppPopoverTrigger extends PropsWithChildren {
  className?: string
  theme?: AppPopoverTriggerThemes
}

export { IAppPopoverTrigger }
