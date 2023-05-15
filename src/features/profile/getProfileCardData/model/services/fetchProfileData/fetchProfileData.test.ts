import { Country, Currency } from '@/shared/const/common'
import { TestAsyncThunk } from '@/shared/utils/tests/TestAsyncThunk'

import { fetchProfileData } from './fetchProfileData'


const data = {
  firstname: 'Vildan',
  lastname: 'Khabibov',
  age: '31',
  city: 'Oktyabrsky',
  username: 'admin',
  currency: Currency.RUB,
  country: Country.Russia
}
describe('fetchProfileData.test', () => {
  // should have been called with "123" and "123" values and return "fulfilled status"
  test('login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }))
    const result = await thunk.callThunk('1')
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  // should have return "rejected" status
  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })

})
