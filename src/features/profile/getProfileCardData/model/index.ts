import profileReducer from './slices/getProfileCardDataSlice'
export type { ProfileSchema } from './types'

export { getProfileData } from './selectors/getProfileData/getProfileData'
export { getProfileIsLoading } from './selectors/getProfileIsLoading/getProfileIsLoading'
export { getProfileError } from './selectors/getProfileError/getProfileError'
export { getProfileIsReadonly } from './selectors/getProfileIsReadonly/getProfileIsReadonly'

export { fetchProfileData } from './services/fetchProfileData/fetchProfileData'

export { updateProfileData } from './services/updateProfileData/updateProfileData'

export { setReadonly, setProfileData } from './slices/getProfileCardDataSlice'

export default profileReducer
