/* eslint-disable-next-line unused-imports/no-unused-imports */
import axios from 'axios'

import { setAuthData } from '@/entities/User' // action
import { TestAsyncThunk } from '@/shared/utils/tests/TestAsyncThunk'

import loginByUserName from './loginByUserName' // thunk

jest.mock('axios')
// const mockedAxios = jest.mocked(axios)
describe('loginByUserName.test', () => {
  // should have been called with "123" and "123" values and return "fulfilled status"
  test('login', async () => {
    // mockedAxios.post.mockReturnValue(Promise.resolve({data: {username: '123', id: '1'}}))

    const userValue = {
      username: '123',
      id: '1',
    }

    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    })

    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  // should have return "rejected" status
  test('error login', async () => {
    // mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
