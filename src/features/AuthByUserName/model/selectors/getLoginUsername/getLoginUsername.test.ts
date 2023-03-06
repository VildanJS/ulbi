import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('should return "admin" value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })

  test('should return "undefined" value', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
