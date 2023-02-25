import cls from './Navbar.module.scss'
import { INavbar } from '../types'
import classNames from 'classnames'
import { LoginModal } from 'features/AuthByUserName'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Button, ButtonThemes } from 'shared/ui/Button'


export const Navbar = ({ className }: INavbar) => {
  const [isAuthModal, setAuthModal] = useState(false)
  const { t } = useTranslation()

  const onCloseModal = () => {
    setAuthModal(false)
  }

  const onShowModal = () => {
    setAuthModal(true)
  }

  const navbarClass = classNames(className, cls.navbar)
  const btnClass = classNames('mr-2', cls.btn)

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
