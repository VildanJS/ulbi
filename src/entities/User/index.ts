import { User } from './ui/User'
import {userReducer, userActions} from './model/slice/userSlice'
import type {UserSchema, IUser} from './model/types'
import { getUserAuthData } from './model/selectors/getUserAuthData'

export {
  User,
  userReducer,
  userActions,
  getUserAuthData
}
export type {
  UserSchema,
  IUser
}
