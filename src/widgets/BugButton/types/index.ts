import { PropsWithChildren } from 'react'

export enum BugButtonThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IBugButton extends PropsWithChildren {
  className?: string,
  theme?: BugButtonThemes,
}

export {
  IBugButton
}
