import { FC } from 'react'
import cls from './LoginModal.module.scss'
import { ILoginModal } from '../types'
import classNames from 'classnames'
import { LoginForm } from '../../LoginForm'
import { Modal } from 'shared/ui/Modal'

export const LoginModal: FC<ILoginModal> = (props) => {
  const {
    className,
    isOpen,
    onClose
  } = props
  const loginModalClass = classNames(className, cls.loginModal)

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={loginModalClass}>
      <LoginForm/>
    </Modal>
  )
}
