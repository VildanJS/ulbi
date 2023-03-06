import axios from 'axios'
import {loginByUserName} from './loginByUserName'
import {userActions} from 'entities/User'
import {TestAsyncThunk} from 'shared/utils/tests/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)
describe('loginByUserName.test', () => {

  // should have been called with "123" and "123" values and return "fulfilled status"
  test('login', async () => {
    const userValue = {username: '123', id: '1'}
    mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))

    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  // should have return "rejected" status
  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })

})
