import { buildSelector } from '@/shared/utils/hooks/store'


export const [useIsSidebarOpened, getIsSidebarOpened] = buildSelector(
  (state) => state.ui.isSidebarOpen
)
