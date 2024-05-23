import { rtkApi } from '@/shared/api/rtkApi'

import { IUser } from '../model/types'
import { JsonSettings } from '../model/types'

interface setJsonSettingsArg {
  userId: string
  jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserDataById: build.query<IUser, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),
    setJsonSettings: build.mutation<IUser, setJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
  }),
})

export const setJsonSettingMutation = userApi.endpoints.setJsonSettings.initiate
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate
