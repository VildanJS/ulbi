import { LinkProps } from 'react-router-dom'

export enum AppLinkThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAppLink extends LinkProps {
  className?: string,
  theme?: AppLinkThemes,
}

export {
  IAppLink
}
