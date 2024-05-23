export { getUserAuthData } from './selectors/getUserAuthData'
export { getUserInited } from './selectors/getUserInited'
export {
  isUserManager,
  isUserAdmin,
  getUserRoles,
} from './selectors/getUserRoles'

export { setAuthData, logout } from './slice/userSlice'

export type { IUser, UserSchema } from './types'
export { UserRole } from './types'

export {
  useJsonSettingByKey,
  useJsonSettings,
} from './selectors/getJsonSettings'

export {
  getUserFeaturesByKey,
  useUserFeaturesByKey,
} from './selectors/getUserFeatures'

export { saveJsonSettings } from './services/saveJsonSettings'
export { initAuthData } from './services/initAuthData'
