import { FC } from 'react'


import classNames from 'classnames'

import { Notifications } from '@/entities/Notifications'
import { AppDrawer } from '@/shared/ui/AppDrawer'

import cls from './NotificationsDrawer.module.scss'
import { INotificationsDrawer } from '../types'


export const NotificationsDrawer: FC<INotificationsDrawer> = (props) => {
  const { className } = props
  const notificationsDrawerClass = classNames(className, cls.notificationsDrawer)

  return (
    <AppDrawer className={notificationsDrawerClass} label={'News'}>
      <Notifications />
    </AppDrawer>
  )
}
