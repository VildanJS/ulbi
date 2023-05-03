import { FC } from 'react'
import cls from './NotificationsDrawer.module.scss'
import { INotificationsDrawer } from '../types'
import classNames from 'classnames'
import { AppDrawer } from '@/shared/ui/AppDrawer'
import { Notifications } from '@/entities/Notifications'
import { AnimationProvider } from '@/shared/utils/components/AnimationProvider'


export const NotificationsDrawer: FC<INotificationsDrawer> = (props) => {
  const { className, children } = props
  const notificationsDrawerClass = classNames(className, cls.notificationsDrawer)

  return (
    <AppDrawer label={'News'}>
      <Notifications />
    </AppDrawer>
  )
}
