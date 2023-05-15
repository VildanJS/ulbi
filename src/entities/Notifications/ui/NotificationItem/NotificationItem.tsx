import { FC } from 'react'

import classNames from 'classnames'
import { Dialog, Heading, DialogProps  } from 'react-aria-components'

import { Text } from '@/shared/ui/Text'

import cls from './NotificationItem.module.scss'
import { INotification } from '../../model/types'


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
