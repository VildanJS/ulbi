// TODO Refactor UserRole

import { RouteProps } from 'react-router-dom'

// eslint-disable-next-line vildan/layer-imports
import { UserRole } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
  auth?: boolean
  roles?: UserRole[]
}
