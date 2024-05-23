import { FC, memo } from 'react'

import { ToggleFeatures } from '@/shared/utils/featereFlags/toggleFeatureFlag'

import { SidebarDeprecated } from './SidebarDeprecated'
import { SidebarRedesigned } from './SidebarRedesigned'

export const Sidebar: FC = memo(() => {
  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<SidebarRedesigned />}
      off={<SidebarDeprecated />}
    />
  )
})
