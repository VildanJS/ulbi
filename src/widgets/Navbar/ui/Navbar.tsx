import { FC, memo } from 'react'

import { ToggleFeatures } from '@/shared/utils/featereFlags/toggleFeatureFlag'

import { NavbarDeprecated } from './NavbarDeprecated'
import { NavbarRedesigned } from './NavbarRedesigned'

export const Navbar: FC = memo(() => {
  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<NavbarRedesigned />}
      off={<NavbarDeprecated />}
    />
  )
})
