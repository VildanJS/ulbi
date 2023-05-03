import { IProfile } from '@/entities/Profile'

export interface ProfileSchema {
  data: IProfile,
  isLoading: boolean,
  error?: string | null,
  readonly?: boolean
}
