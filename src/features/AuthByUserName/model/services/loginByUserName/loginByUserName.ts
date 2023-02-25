import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserSchema } from 'entities/User'

interface loginByUserNameProps {
  username: string,
  password: string
}

// First, create the thunk
const loginByUserName = createAsyncThunk<UserSchema, loginByUserNameProps, {rejectValue: string}>(
  'login/loginByUserName',
  async ({username, password}, thunkAPI) => {
    try {
      const response = await axios.post<UserSchema>('https://localhost:8000/login', {username, password})
      if (!response.data) throw new Error()
      return response.data
    } catch (e) {
      return  thunkAPI.rejectWithValue(e)
    }

  }
)
