import {FC, Suspense} from 'react'
import cls from './LoginModal.module.scss'
import { ILoginModal } from '../types'
import classNames from 'classnames'
import { Modal } from 'shared/ui/Modal'

import {Loader} from 'shared/ui/Loader'
import {LoginFormAsync} from 'features/AuthByUserName/ui/LoginForm'

export const LoginModal: FC<ILoginModal> = (props) => {
  const {
    className,
    isOpen,
    onClose
  } = props
  const loginModalClass = classNames(className, cls.loginModal)

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={loginModalClass}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose}/>
      </Suspense>
    </Modal>
  )
}
