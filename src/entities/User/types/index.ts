import { PropsWithChildren } from 'react'

export enum UserThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IUser extends PropsWithChildren {
  className?: string,
  theme?: UserThemes,
}

export {
  IUser
}
