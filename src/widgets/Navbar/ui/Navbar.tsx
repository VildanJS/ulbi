import cls from './Navbar.module.scss'
import classNames from 'classnames'
import { NavbarProps } from '../types'
import { LoginModal } from '@/features/AuthByUserName'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Key, memo, useCallback, useState } from 'react'
import { Button, ButtonThemes } from '@/shared/ui/Button'
import { getUserAuthData, isUserAdmin, isUserManager, logout } from '@/entities/User' //selector // action
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink'
import { AppRoutePaths } from '@/app/config/routeConfig/routeConfig'
import { AppMenu } from '@/shared/ui/AppMenu'
import { AppItem } from '@/shared/ui/AppItem'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogTrigger } from 'react-aria-components'
import { AppPopover } from '@/shared/ui/AppPopover'
import { AppButton } from '@/shared/ui/AppButton'
import { Notifications } from '@/entities/Notifications'
import { detectDevice } from '@/shared/utils/detectDevice'
import { ModalOverlay } from 'react-aria-components'
import { useTraceUpdate } from '@/shared/utils/hooks/useTraceUpdate/useTraceUpdate'
import { AppPopoverTrigger } from '@/shared/ui/AppPopoverTrigger'
import { Modal } from '@/shared/ui/Modal'
import { AppDrawer } from '@/shared/ui/AppDrawer'
import { NotificationsDrawer } from '@/features/notifications/NotificationsDrawer'


export const Navbar = memo((props: NavbarProps) => {
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
    ['admin-panel']: () => navigate('/admin') // !!!!!!!!!
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
          theme={AppLinkThemes.INVERTED}
          to={AppRoutePaths.article_create}
          className={cls.linkToCreate}
        >{t('Создать статью')}
        </AppLink>


        <div className={alignRightClass}>
          {
            isMobile
              ? <NotificationsDrawer />
              : <AppPopoverTrigger label="News">
                <Notifications />
              </AppPopoverTrigger>
          }

          {/*<DialogTrigger>*/}
          {/*  <AppButton className={cls.btn}>*/}
          {/*    News*/}
          {/*  </AppButton>*/}
          {/*  {*/}
          {/*    detectDevice()*/}
          {/*      ?*/}
          {/*      (*/}
          {/*        <Modal isDismissable className={cls.myModal}>*/}
          {/*          <Notifications />*/}
          {/*        </Modal>*/}
          {/*      )*/}
          {/*      :*/}
          {/*      (<AppPopover>*/}
          {/*        <Notifications />*/}
          {/*      </AppPopover>)*/}
          {/*  }*/}

          {/*</DialogTrigger>*/}

          <AppMenu onAction={handler} label={'☰'}>
            <AppItem id="logout">
              {t('Log-out')}
            </AppItem>
            {
              isAdminOrManager &&
              <AppItem id="admin-panel">
                {t('Admin Panel')}
              </AppItem>
            }
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
        <Button
          theme={ButtonThemes.BACKGROUND_INVERTED}
          onClick={onShowModal}

          className={alignRightClass}>
          {t('Log-in')}
        </Button>

        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        )}
      </div>
    )
  }
})
