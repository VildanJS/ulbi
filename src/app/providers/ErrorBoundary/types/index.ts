import { ReactNode } from 'react'
export enum ErrorBoundaryThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface ErrorBoundaryProps {
  className?: string
  theme?: ErrorBoundaryThemes
  children?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export {
  ErrorBoundaryProps,
  ErrorBoundaryState
}
