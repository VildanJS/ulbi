import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
  test('should return "error" value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual( 'error' )
  })

  test('should return "undefined" value', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toBeUndefined()
  })
})
