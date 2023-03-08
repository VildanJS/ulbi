import {createAsyncThunk} from '@reduxjs/toolkit'
import {IUser} from 'entities/User'
import {setAuthData} from 'entities/User' // action
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { AxiosError } from 'axios'

interface loginByUserNameProps {
  username: string,
  password: string
}

interface error {
  message: string
}

// First, create the thunk
const loginByUserName = createAsyncThunk<IUser, loginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const {username, password} = authData
    const {extra, dispatch, rejectWithValue} = thunkAPI
    try {
      const response = await extra.api.post<IUser>('/login', {username, password})
      if (!response.data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(setAuthData(response.data))
      return response.data
    } catch (error: unknown) {
      const err = error as AxiosError
      return rejectWithValue('error')
    }
  }
)
export default loginByUserName
