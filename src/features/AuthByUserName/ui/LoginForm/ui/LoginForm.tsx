import { FC } from 'react'
import cls from './LoginForm.module.scss'
import { ILoginForm } from '../types'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

export const LoginForm: FC<ILoginForm> = (props) => {
  const {t} = useTranslation()

  const {
    className,
  } = props
  const loginFormClass = classNames(className, cls.loginForm)

  return (
    <div className={loginFormClass}>
      <Input autofocus={true} placeholder={'Введите логин'} type='text' className={cls.input}/>
      <Input autofocus={false} placeholder={'Введите пароль'} type='text' className={cls.input}/>
      <Button className={cls.loginButton}>
        {t('log-in')}
      </Button>
    </div>
  )
}
