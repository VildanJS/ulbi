import { rtkApi } from '@/shared/api/rtkApi'

import { INotification } from '../model/types'

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<INotification[], null>({
      query: () => ({
        url: '/notifications',
      })
    })
  })
})
export const useGetNotifications = notificationsApi.useGetNotificationsQuery
