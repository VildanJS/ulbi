import { PropsWithChildren } from 'react'

export enum AppDialogThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAppDialog extends PropsWithChildren {
  className?: string,
  theme?: AppDialogThemes,
}

export {
  IAppDialog
}
