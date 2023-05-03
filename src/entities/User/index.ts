import userReducer from './model/slice/userSlice'

// reducer
export default userReducer
// types
export type {
  IUser,
  UserSchema
} from './model'

export { UserRole } from './model'

// selectors
export {
  getUserInited,
  getUserAuthData,
  getUserRoles,
  isUserManager,
  isUserAdmin
} from './model'

// actions
export {
  setAuthData,
  recoveryAuthData,
  logout
} from './model'




