import ProfileReducer from './model'

export { getProfileData } from './model'
export { getProfileIsLoading } from './model'
export { getProfileError } from './model'
export { getProfileIsReadonly } from './model'

export type {
  ProfileSchema
} from './model'

export {
  fetchProfileData,
  updateProfileData
} from './model'

export {
  setReadonly, setProfileData
} from './model'

export default ProfileReducer
