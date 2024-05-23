import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { USER_LOCALSTORAGE_KEY } from '../const/localStorage'
import 'isomorphic-fetch'

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: API_URL,
      prepareHeaders: (headers) => {
        const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || null
        if (token) {
          headers.set('Authorization', token)
        }
        return headers
      }
    }),
  endpoints: (buider) => ({})
}
)
