import cls from './Navbar.module.scss'
import classNames from 'classnames'
import {INavbar} from '../types'
import {LoginModal} from 'features/AuthByUserName'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {memo, useCallback, useState} from 'react'
import {Button, ButtonThemes} from 'shared/ui/Button'
import {logout} from 'entities/User' // action
import {getUserAuthData} from 'entities/User' //selector


export const Navbar = memo(({className}: INavbar) => {
  const [isAuthModal, setAuthModal] = useState(false)
  const {t} = useTranslation()
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

  const navbarClass = classNames(className, cls.navbar)
  const btnClass = classNames('mr-2', cls.btn)

  if (authData) {
    return (
      <div className={navbarClass}>
        <Button
          theme={ButtonThemes.BACKGROUND_INVERTED}
          onClick={onLogout}

          className={btnClass}>
          {t('Log-out')}
        </Button>

        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        )}
      </div>
    )
  } else {
    return (
      <div className={navbarClass}>
        <Button
          theme={ButtonThemes.BACKGROUND_INVERTED}
          onClick={onShowModal}

          className={btnClass}>
          {t('Log-in')}
        </Button>

        {isAuthModal && (
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        )}
      </div>
    )
  }
})
