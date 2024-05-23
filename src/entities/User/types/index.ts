import { PropsWithChildren } from 'react'

enum UserThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface UserProps extends PropsWithChildren {
  className?: string
  theme?: UserThemes
}

export { UserProps, UserThemes }
