import { StateSchema } from '@/app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'


export const getUI = (state: StateSchema) => state.ui
export const getScrollPositionByPath = (state: StateSchema, path: string) => state.ui.scroll[path]

