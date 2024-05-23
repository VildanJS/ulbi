import { StateSchema } from '@/app/providers/StoreProvider'

export const getScrollPositionByPath = (state: StateSchema, path: string) =>
  state.ui.scroll[path]
