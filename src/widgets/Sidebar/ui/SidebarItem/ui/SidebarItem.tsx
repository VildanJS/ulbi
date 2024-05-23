import { FC, memo, PropsWithChildren } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'


import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { ToggleFeatures } from '@/shared/utils/featereFlags/toggleFeatureFlag'

import cls from './SidebarItem.module.scss'
import { SidebarItemThemes, SidebarItemType } from '../types'

interface SidebarItemProp extends PropsWithChildren {
  item: SidebarItemType
  collapsed: boolean
  theme?: SidebarItemThemes
  className?: string
}


export const SidebarItem: FC<SidebarItemProp> = memo((props) => {
  const { t } = useTranslation()
  const { item, collapsed, className } = props
  const { path, Icon: SvgIcon, text } = item

  const sidebarItemClass = classNames(className, cls.sidebarItem, {
    [cls.collapsed]: collapsed,
  })

  const sidebarItemRedesignedClass = classNames(className, cls.sidebarItemRedesigned, {
    [cls.collapsedRedesigned]: collapsed,
  })

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <AppLink className={sidebarItemRedesignedClass} activeClassName={cls.active} to={path} variant={'primary'}>
          <Icon className={cls.icon} Svg={SvgIcon} />
          <span className={cls.text}>{t(text)}</span>
        </AppLink>
      }
      off={
        <AppLink className={sidebarItemClass} variant={'primary'} to={path}>
          <Icon Svg={SvgIcon} />
          <span className={cls.text}>{t(text)}</span>
        </AppLink>
      }
    />
  )
})
