export type {
  IProfile,
  ProfileSchema
} from './model/types/IProfile'


export {
  profileActions, profileReducer
} from './model/slice/profileSlice'

export {
  fetchProfileData
} from './model/services/fetchProfileData/fetchProfileData'

export { ProfileCard } from './ui/ProfileCard'

export {getProfileData} from './model/selectors/getProfileData/getProfileData'
export {getProfileIsLoading} from './model/selectors/getProfileIsLoading/getProfileIsLoading'
export {getProfileError} from './model/selectors/getProfileError/getProfileError'
