import {FC, memo, useCallback} from 'react'
import classNames from 'classnames'
import cls from './LoginForm.module.scss'
import {ILoginForm} from '../types'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {Button, ButtonThemes} from '@/shared/ui/Button'
import {Input} from '@/shared/ui/Input'
import {setUsername, setPassword, loginReducer} from '../../../model/slice/loginSlice'
import loginByUserName from '../../../model/services/loginByUserName/loginByUserName'
import {useAppDispatch} from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import {TextThemes, Text} from '@/shared/ui/Text/Text'
import {getLoginUsername} from '../../../model/selectors/getLoginUsername/getLoginUsername'
import {getLoginPassword} from '../../../model/selectors/getLoginPassword/getLoginPassword'
import {getLoginIsLoading} from '../../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import {getLoginError} from '../../../model/selectors/getLoginError/getLoginError'
import {DynamicModuleLoader, ReducersList} from '@/shared/utils/components/DynamicModuleLoader'
import {useNavigate} from 'react-router-dom'


const initialReducers: ReducersList = {
  loginForm: loginReducer,
}
const LoginForm: FC<ILoginForm> = memo((props) => {
  const {
    className,
    onSuccess
  } = props

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const navigate = useNavigate()

  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  const onChangeUserName = useCallback((value: string) => {
    dispatch(setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUserName({username, password}))
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess()
      navigate('/')
    }
  }, [dispatch, username, password, onSuccess, navigate])


  const loginFormClass = classNames(className, cls.loginForm)

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <div className={loginFormClass}>
        <h1>{t('Login Form')}</h1>
        {error && <Text text={error} theme={TextThemes.ERROR}></Text>}
        <Input value={username} autofocus={true} onChange={onChangeUserName} placeholder={'Введите логин'} type="text"
          className={cls.input}/>
        <Input value={password} autofocus={false} onChange={onChangePassword} placeholder={'Введите пароль'} type="text"
          className={cls.input}/>
        <Button
          onClick={onLoginClick}
          theme={ButtonThemes.OUTLINE}
          className={cls.loginButton}
          disabled={isLoading}
        >
          {t('log-in')}
        </Button>
      </div>
    </DynamicModuleLoader>


  )
})

export default LoginForm
