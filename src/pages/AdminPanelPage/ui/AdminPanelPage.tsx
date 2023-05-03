import { FC } from 'react'
import cls from './AdminPanelPage.module.scss'
import { IAdminPanelPage } from '../types'
import classNames from 'classnames'
import { Page } from '@/shared/ui/Page'


const AdminPanelPage: FC<IAdminPanelPage> = (props) => {
  const { className, children } = props
  const adminPanelPageClass = classNames(className, cls.adminPanelPage)

  return (
    <Page className={adminPanelPageClass}>
      <h1>Админка</h1>
    </Page>
  )
}
export default AdminPanelPage
