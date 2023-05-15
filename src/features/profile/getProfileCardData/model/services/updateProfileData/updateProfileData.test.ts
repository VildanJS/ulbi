import { Country, Currency } from '@/shared/const/common'
import { TestAsyncThunk } from '@/shared/utils/tests/TestAsyncThunk'

import { updateProfileData } from './updateProfileData'

const profile = {
  username: 'admin',
  age: '22',
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
  id: '1'
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData)
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))

    const result = await thunk.callThunk(profile)

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData)
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))


    const result = await thunk.callThunk(profile)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('')
  })
})
