import { FC } from 'react'
import cls from './Notifications.module.scss'
import { useGetNotifications } from '../../api/notificationsApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { INotification } from '../../model/types'


export const Notifications: FC = () => {
  const { data, isLoading, error } = useGetNotifications(null)

  if(isLoading) return <h1>Загрузка</h1>
  const renderNotifications = (item: INotification) => (
    <NotificationItem notification={item} key={item.id} />
  )

  return (
    <div className={cls.notifications}>
      {data?.map(renderNotifications)}
    </div>
  )
}
