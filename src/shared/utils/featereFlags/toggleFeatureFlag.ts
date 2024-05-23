import { ReactElement } from 'react'


import { getFeatureFlag } from './setGetFeatureFlags'
import { FeatureFlags } from '../../../entities/User/model/types/featuresFlags'

interface ToggleFeatureFlag<T> {
  name: keyof FeatureFlags
  on: () => T
  off: () => T
}

export const toggleFeatureFlag = <T>({
  name,
  on,
  off,
}: ToggleFeatureFlag<T>): T => {
  if (getFeatureFlag(name)) return on()
  return off()
}

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const { on, off, feature } = props

  // const isTurned = useUserFeaturesByKey(feature)
  const isTurned = true

  if (isTurned) {
    return on
  }

  return off
}

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}


export function toggleFeatures<T>({
  off,
  on,
  name,
}: ToggleFeaturesOptions<T>): T {
  if (getFeatureFlag(name)) {
    return on()
  }

  return off()
}
