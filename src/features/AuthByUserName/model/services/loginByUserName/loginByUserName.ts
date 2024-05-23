import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { IUser } from '@/entities/User'
import { setAuthData } from '@/entities/User' // action

interface loginByUserNameProps {
  username: string
  password: string
}

// First, create the thunk
const loginByUserName = createAsyncThunk<
  IUser,
  loginByUserNameProps,
  ThunkConfig<string>
>('login/loginByUserName', async (authData, thunkAPI) => {
  const { username, password } = authData
  const { extra, dispatch, rejectWithValue } = thunkAPI
  try {
    const response = await extra.api.post<IUser>('/login', {
      username,
      password,
    })
    if (!response.data) {
      throw new Error()
    }

    dispatch(setAuthData(response.data))
    return response.data
  } catch (error: unknown) {
    // const err = error as AxiosError
    return rejectWithValue('error')
  }
})
export default loginByUserName
