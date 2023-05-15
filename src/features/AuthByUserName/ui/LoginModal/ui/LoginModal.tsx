import { FC, Suspense } from 'react'

import classNames from 'classnames'

import { Loader } from '@/shared/ui/Loader'
import { Modal } from '@/shared/ui/Modal'

import cls from './LoginModal.module.scss'
import { LoginFormAsync } from '../../LoginForm/'
import { ILoginModal } from '../types'

export const LoginModal: FC<ILoginModal> = (props) => {
  const {
    className,
    isOpen,
    onClose
  } = props
  const loginModalClass = classNames(className, cls.loginModal)

  return (
    <Modal className={loginModalClass} isOpen={isOpen} onClose={onClose} >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
