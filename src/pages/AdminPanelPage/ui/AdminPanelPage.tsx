import { FC } from 'react'

import classNames from 'classnames'

import { Page } from '@/shared/ui/Page'

import cls from './AdminPanelPage.module.scss'
import { IAdminPanelPage } from '../types'


const AdminPanelPage: FC<IAdminPanelPage> = (props) => {
  const { className } = props
  const adminPanelPageClass = classNames(className, cls.adminPanelPage)

  return (
    <Page data-testid='AdminPanelPage' className={adminPanelPageClass}>
      <h1>Админка</h1>
    </Page>
  )
}
export default AdminPanelPage
