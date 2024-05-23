import { buildSelector } from '@/shared/utils/hooks/store'

export const [useCounterValue, getCounterValue] = buildSelector(
  (state) => state.counter.value,
)
