import { getUserAuthData, getUserRoles } from '@/entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { AppRoutePaths } from '@/app/config/routeConfig/routeConfig'
import { UserRole } from '@/entities/User/model/types'
import { useMemo } from 'react'

interface RequireAuthProps {
  children: JSX.Element,
  roles?: UserRole[]
}

export function RequireAuth(props: RequireAuthProps) {
  const { children, roles } = props
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequireRole = useMemo(() => {
    if(!roles) {
      return true
    }
    return roles.some((role) => {
      return userRoles?.includes(role)
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={AppRoutePaths.main} state={{ from: location }} replace />
  }

  if (!hasRequireRole) {
    return <Navigate to={AppRoutePaths.forbidden} state={{ from: location }} replace />
  }

  return children
}
