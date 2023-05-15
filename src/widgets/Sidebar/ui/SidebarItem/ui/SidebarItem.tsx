import { FC, memo } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink'

import cls from './SidebarItem.module.scss'
import { ISidebarItem } from '../types'


export const SidebarItem: FC<ISidebarItem> = memo((props) => {
  const { t } = useTranslation()
  const { item, collapsed } = props
  const { path, Icon, text } = item
  const sidebarItemClass = classNames(cls.sidebarItem, { [cls.collapsed]: collapsed })

  return (
    <AppLink className={sidebarItemClass} theme={AppLinkThemes.INVERTED} to={path}>
      <Icon className={cls.icon} />
      <span className={cls.link}>{t(text)}</span>
    </AppLink>
  )
})

