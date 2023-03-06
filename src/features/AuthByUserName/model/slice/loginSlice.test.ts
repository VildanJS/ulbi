import { loginReducer, loginActions } from './loginSlice'
import loginSchema from '../types/loginSchema'
import { DeepPartial } from '@reduxjs/toolkit'
import LoginSchema from '../types/loginSchema'

describe('loginSlice.test', () => {
  test('test set username', () => {
    const login: DeepPartial<LoginSchema> = { username: 'admin' }
    expect(loginReducer(login as loginSchema, loginActions.setUsername('admin'))).toEqual({username: 'admin'})
  })
  test('test set password', () => {
    const login: DeepPartial<LoginSchema> = { password: '123' }
    expect(loginReducer(login as loginSchema, loginActions.setPassword('123'))).toEqual({ password: '123'})
  })
})
