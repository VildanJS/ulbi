export { getUserAuthData } from './selectors/getUserAuthData'
export { getUserInited } from './selectors/getUserInited'
export { isUserManager, isUserAdmin, getUserRoles } from './selectors/getUserRoles'

export { setAuthData, recoveryAuthData, logout } from './slice/userSlice'

export type { IUser, UserSchema,  } from './types'
export { UserRole } from './types'
