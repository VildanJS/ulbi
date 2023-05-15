import { PropsWithChildren } from 'react'

import { IProfile } from '../../../model/types'

export enum ProfileCardThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IProfileCard extends PropsWithChildren {
  className?: string,
  theme?: ProfileCardThemes,
  data: IProfile,
  isLoading?: boolean,
  error?: string | null,
}

export {
  IProfileCard
}
