import { PropsWithChildren } from 'react'

import { TestProps } from '@/shared/types/tests'

export enum PageThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IPage extends PropsWithChildren, TestProps {
  className?: string
  theme?: PageThemes
}

export { IPage }
