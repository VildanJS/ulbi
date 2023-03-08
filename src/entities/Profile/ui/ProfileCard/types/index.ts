import { PropsWithChildren } from 'react'
import { IProfile } from '../../../model/types/IProfile'

export enum ProfileCardThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IProfileCard extends PropsWithChildren {
  className?: string,
  theme?: ProfileCardThemes,
  data?: IProfile
}

export {
  IProfileCard
}
