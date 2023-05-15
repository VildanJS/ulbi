import { StateSchema } from '@/app/providers/StoreProvider'


export const getUI = (state: StateSchema) => state.ui
export const getScrollPositionByPath = (state: StateSchema, path: string) => state.ui.scroll[path]

