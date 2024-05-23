import { Key, memo, useCallback, useState } from 'react'

import classNames from 'classnames'
import { NotificationsDrawer } from '@/features/notifications'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getRouteArticleCreate } from '@/shared/const/router'

import { Notifications } from '@/entities/Notifications'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  logout,
} from '@/entities/User' //selector // action
import { LoginModal } from '@/features/AuthByUserName'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { AppMenu } from '@/shared/ui/redesigned/Dropdowns/AppMenu'
import { AppPopoverTrigger } from '@/shared/ui/redesigned/Dropdowns/AppPopoverTrigger'
import { AppItem } from '@/shared/ui/redesigned/Dropdowns/AppSelect'
import { detectDevice } from '@/shared/utils/detectDevice'

import cls from './Navbar.module.scss'
import { NavbarProps } from '../types'

export const NavbarDeprecated = memo((props: NavbarProps) => {
  const { className } = props
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminOrManager = isAdmin || isManager

  const [isAuthModal, setAuthModal] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const onCloseModal = () => {
    setAuthModal(false)
  }

  const onShowModal = () => {
    setAuthModal(true)
  }

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const navigate = useNavigate()
  const handlers: Record<string, () => void> = {
    ['logout']: onLogout,
    ['admin-panel']: () => navigate('/admin'),
  }

  const handler = (id: Key) => {
    handlers[id]()
  }

  const navbarClass = classNames(className, cls.navbar)
  const alignRightClass = classNames('mr-2', cls.alignRight)

  const isMobile = detectDevice()

  if (authData) {
    return (
      <div className={navbarClass}>
        <AppLink
          variant={'primary'}
          to={getRouteArticleCreate()}
          className={cls.linkToCreate}
        >
          {t('Создать статью')}
        </AppLink>

        <div className={alignRightClass}>
          {isMobile ? (
            <NotificationsDrawer />
          ) : (
            <AppPopoverTrigger label='News'>
              <Notifications />
            </AppPopoverTrigger>
          )}

          <AppMenu onAction={handler} label={'☰'}>
            <AppItem id='logout'>{t('Log-out')}</AppItem>
            {isAdminOrManager && (
              <AppItem id='admin-panel'>{t('Admin Panel')}</AppItem>
            )}
          </AppMenu>
        </div>

        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </div>
    )
  } else {
    return (
      <div className={navbarClass}>
        <AppButton
          variant='outline'
          onPress={onShowModal}
          className={alignRightClass}
        >
          {t('Log-in')}
        </AppButton>

        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </div>
    )
  }
})
