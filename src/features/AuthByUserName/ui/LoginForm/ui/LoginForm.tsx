import { ChangeEvent, FC, memo, useCallback } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppTextField } from '@/shared/ui/redesigned/AppInput'
import { Text } from '@/shared/ui/redesigned/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/utils/components/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './LoginForm.module.scss'
import { getLoginError } from '../../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../../model/selectors/getLoginUsername/getLoginUsername'
import loginByUserName from '../../../model/services/loginByUserName/loginByUserName'
import {
  setUsername,
  setPassword,
  loginReducer,
} from '../../../model/slice/loginSlice'
import { ILoginForm } from '../types'


const initialReducers: ReducersList = {
  loginForm: loginReducer,
}
const LoginForm: FC<ILoginForm> = memo((props) => {
  const { className, onSuccess } = props

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const navigate = useNavigate()

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onChangeUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setUsername(e.target.value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setPassword(e.target.value))
    },
    [dispatch],
  )

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUserName({ username, password }))
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess()
      // navigate('/')
    }
  }, [onSuccess, dispatch, username, password])

  const loginFormClass = classNames(className, cls.loginForm)

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <VStack gap={'8'} className={loginFormClass}>
        <Text title={t('Login Form')}></Text>
        {error && <Text text={error} theme={'error'}></Text>}
        <AppTextField
          value={username}
          onChange={onChangeUserName}
          placeholder={'Введите логин'}
          type='text'
          className={cls.input}
        />
        <AppTextField
          value={password}
          onChange={onChangePassword}
          placeholder={'Введите пароль'}
          type='text'
          className={cls.input}
        />
        <AppButton
          onPress={onLoginClick}
          variant='outline'
          className={cls.loginButton}
          disabled={isLoading}
        >
          {t('log-in')}
        </AppButton>
      </VStack>
    </DynamicModuleLoader>
  )
})

export default LoginForm
