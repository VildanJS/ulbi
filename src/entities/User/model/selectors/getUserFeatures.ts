import { buildSelector } from '@/shared/utils/hooks/store'

import { FeatureFlags } from '../types/featuresFlags'

const defaultJsonSettings: FeatureFlags = {}
export const [useUserFeaturesByKey, getUserFeaturesByKey] = buildSelector(
  (state, key: keyof FeatureFlags) => state.user.authData?.features?.[key],
)
