import { User } from './ui/User'
import userReducer from './model/slice/userSlice'
import {setAuthData, recoveryAuthData, logout} from './model/slice/userSlice'
import {userActions} from './model/slice/userSlice'
import type {UserSchema, IUser} from './model/types'
import { getUserAuthData } from './model/selectors/getUserAuthData'

export {
  User,
  userReducer,
  userActions,
  setAuthData,
  recoveryAuthData,
  logout,
  getUserAuthData
}
export type {
  UserSchema,
  IUser
}
