import { PropsWithChildren } from 'react'

export enum NotFoundThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface INotFound extends PropsWithChildren {
  className?: string,
  theme?: NotFoundThemes,
}

export {
  INotFound
}
