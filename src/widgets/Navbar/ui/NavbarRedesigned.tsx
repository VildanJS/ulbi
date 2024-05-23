import '@spectrum-css/tabs/dist/index-vars.css'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Notifications } from '@/entities/Notifications'
import { getUserAuthData, isUserAdmin, isUserManager, logout } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUserName'
import { NotificationsDrawer } from '@/features/notifications'
import { getRouteArticleCreate } from '@/shared/const/router'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { AppMenu } from '@/shared/ui/redesigned/Dropdowns/AppMenu'
import { AppPopoverTrigger } from '@/shared/ui/redesigned/Dropdowns/AppPopoverTrigger'
import { AppItem } from '@/shared/ui/redesigned/Dropdowns/AppSelect'
import { detectDevice } from '@/shared/utils/detectDevice'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'


import '@spectrum-css/divider/dist/index-vars.css'

import cls from './Navbar.module.scss'

import { Key, useCallback, useState } from 'react'




export const NavbarRedesigned = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const alignRightClass = classNames('mr-2', cls.alignRight)
  const isMobile = detectDevice()
  const [isAuthModal, setAuthModal] = useState(false)
  const setAuthModalClose = useCallback(() => {
    setAuthModal(false)
  }, [dispatch])
  const setAuthModalOpen = useCallback(() => {
    setAuthModal(true)
  }, [dispatch])


  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminOrManager = isAdmin || isManager

  const navigate = useNavigate()
  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])



  const handlers: Record<string, () => void> = {
    ['logout']: onLogout,
    ['login']: setAuthModalOpen,
    ['admin-panel']: () => navigate('/admin'),
    ['create-article']: () => navigate(getRouteArticleCreate())

  }
  const handler = (id: Key) => {
    handlers[id]()
  }
  const authData = useSelector(getUserAuthData)

  if(authData) {
    return (
      <>
        {isMobile ? (
          <NotificationsDrawer />
        ) : (
          <AppPopoverTrigger>
            <Notifications />
          </AppPopoverTrigger>
        )}

        <AppMenu onAction={handler} label={<Avatar alt={'avatar'} />}>
          <AppItem id='create-article'>Создать статью</AppItem>
          {isAdminOrManager && (
            <AppItem id='admin-panel'>{t('Admin Panel')}</AppItem>
          )}
          <AppItem id='logout'>{t('Log-out')}</AppItem>
        </AppMenu>

        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={setAuthModalClose} />
        )}
      </>
    )
  } else {
    return (
      <>
        <AppMenu onAction={handler} label={<Avatar alt={'avatar'} />}>
          <AppItem id='login'>{t('Log-in')}</AppItem>
        </AppMenu>
        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={setAuthModalClose} />
        )}
      </>
    )
  }
}
