import { FC, memo, useCallback } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { ILoginForm } from '../types'
import { Button, ButtonThemes } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { loginActions } from '../../../model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState'



export const LoginForm: FC<ILoginForm> = memo((props) => {
  const {
    className,
  } = props

  const loginForm = useSelector(getLoginState)
  const {username, password} = loginForm

  const {t} = useTranslation()
  const dispatch = useDispatch()

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])



  const loginFormClass = classNames(className, cls.loginForm)

  return (
    <div className={loginFormClass}>
      <Input value={username} autofocus={true} onChange={onChangeUserName} placeholder={'Введите логин'} type='text' className={cls.input}/>
      <Input value={password} autofocus={false} onChange={onChangePassword} placeholder={'Введите пароль'} type='text' className={cls.input}/>
      <Button
        onClick={onLoginClick}
        theme={ButtonThemes.OUTLINE}
        className={cls.loginButton}
      >
        {t('log-in')}
      </Button>
    </div>
  )
})
