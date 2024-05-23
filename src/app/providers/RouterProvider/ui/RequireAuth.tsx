import { useMemo } from 'react'

import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getRouteForbidden, getRouteMain } from '@/shared/const/router'

import { getUserAuthData, getUserRoles } from '@/entities/User'
import { UserRole } from '@/entities/User'


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
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />
  }

  if (!hasRequireRole) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
  }

  return children
}
