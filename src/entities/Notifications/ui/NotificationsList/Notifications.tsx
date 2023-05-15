import { FC } from 'react'

import cls from './Notifications.module.scss'
import { useGetNotifications } from '../../api/notificationsApi'
import { INotification } from '../../model/types'
import { NotificationItem } from '../NotificationItem/NotificationItem'


export const Notifications: FC = () => {
  const { data, isLoading, error } = useGetNotifications(null)

  if(isLoading) return <h1>Загрузка</h1>
  if(error) return <h1>Ошибка</h1>
  const renderNotifications = (item: INotification) => (
    <NotificationItem notification={item} key={item.id} />
  )

  return (
    <div className={cls.notifications}>
      {data?.map(renderNotifications)}
    </div>
  )
}
