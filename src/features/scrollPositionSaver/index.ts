import { getIsSidebarOpened, useIsSidebarOpened } from './services/selectors/getIsSidebarOpened'
import { getScrollPositionByPath } from './services/selectors/getScrollPosition'
import UIReducer, {
  setScrollPosition,
  setIsSidebarOpen
} from './services/slices/scrollPostionSaverSlice'
import type { UISchema } from './types'
import { scrollPositionSaver } from './ui/scrollPositionSaver'

export {
  UISchema,
  UIReducer,
  setScrollPosition,
  scrollPositionSaver,
  getScrollPositionByPath,

  getIsSidebarOpened,
  useIsSidebarOpened,
  setIsSidebarOpen
}
