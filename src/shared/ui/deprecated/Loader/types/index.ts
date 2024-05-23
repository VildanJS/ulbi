import { PropsWithChildren } from 'react'

type LoaderThemes = 'primary' | 'inverted'

interface ILoader extends PropsWithChildren {
  className?: string
  theme?: LoaderThemes
}

export { ILoader }
