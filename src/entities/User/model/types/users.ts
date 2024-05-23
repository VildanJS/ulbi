import { FeatureFlags } from './featuresFlags'
import { JsonSettings } from './jsonSettings'

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface IUser {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
  features?: FeatureFlags
  jsonSettings?: JsonSettings
}

export interface UserSchema {
  authData?: IUser | null
  _inited: boolean
}
