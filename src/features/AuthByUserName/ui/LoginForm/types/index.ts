import { PropsWithChildren } from 'react'

export enum LoginFormThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ILoginForm extends PropsWithChildren {
  className?: string,
  theme?: LoginFormThemes,
  onSuccess: () => void
}

export {
  ILoginForm
}
