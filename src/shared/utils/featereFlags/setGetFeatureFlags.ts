import { FeatureFlags } from '../../../entities/User/model/types/featuresFlags'

let featureFlags: FeatureFlags = {}
const setFeatureFlags = (newFlags?: FeatureFlags) => {
  if (newFlags) {
    featureFlags = newFlags
  }
}

const getFeatureFlag = (key: keyof FeatureFlags) => {
  // return featureFlags[key]
  return true
}

export { setFeatureFlags, getFeatureFlag }
