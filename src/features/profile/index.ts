export { getProfileData } from './getProfileCardData/model'
export { getProfileIsLoading } from './getProfileCardData/model'
export { getProfileError } from './getProfileCardData/model'
export { getProfileIsReadonly } from './getProfileCardData/model'
import ProfileReducer from './getProfileCardData/model'

export type {
  ProfileSchema
} from './getProfileCardData/model'

export {
  fetchProfileData,
  updateProfileData
} from './getProfileCardData/model'

export {
  setReadonly, setProfileData
} from './getProfileCardData/model'

export default ProfileReducer
