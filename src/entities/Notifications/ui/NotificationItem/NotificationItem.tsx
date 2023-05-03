import { FC } from 'react'
import cls from './NotificationItem.module.scss'
import classNames from 'classnames'
import { useGetNotifications } from '../../api/notificationsApi'
import { Dialog, Heading, DialogProps  } from 'react-aria-components'
import { INotification } from '../../model/types'
import { Text } from '@/shared/ui/Text/Text'

interface NotificationItemProps extends DialogProps {
  notification: INotification,
  className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
  const { notification, className } = props
  const { title, description } = notification
  const notificationsClass = classNames(className, cls.notifications)

  return (
    <Dialog {...props} className={notificationsClass} >
      <Heading>{title}</Heading>
      <Text text={description}></Text>
    </Dialog>
  )
}
