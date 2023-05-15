import { FC, Key, memo, useState } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { AppButton } from '@/shared/ui/AppButton'
import { AppItem, AppSelect } from '@/shared/ui/AppSelect'
import { Flex } from '@/shared/ui/Stack'

import cls from './Sidebar.module.scss'
import { ISidebar } from '../../types'
import { SidebarItem } from '../SidebarItem'
import { getSideBarItems } from '../SidebarItem/model/selectors/getSideBarItems'


export const Sidebar: FC<ISidebar> = memo((props) => {
  const { t, i18n } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const { className } = props
  const sidebarClass = classNames(className, cls.sidebar, { [cls.collapsed]: collapsed })
  const sidebarItemList = useSelector(getSideBarItems)


  const switchLanguage = (key: Key) => {
    i18n.changeLanguage(key as string)
  }

  return (
    <div
      data-testid='sidebar'
      className={sidebarClass}
    >
      <AppButton
        theme='background-inverted'
        square
        angular
        size='l'
        className={cls.collapsedBtn}
        onPress={() => setCollapsed(prev => !prev)}
      >
        {collapsed ? '>' : '<'}
      </AppButton>

      <Flex className={cls.links} direction={'Column'} align={'Start'} gap={'32'}>
        {sidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path} />
        )) }
      </Flex>

      <div className={cls.switchers}>
        <AppSelect onSelectionChange={switchLanguage} collapsed={collapsed} >
          <AppItem id={'ru'} textValue={'Russian'}>{collapsed ? t('ru') : t('Russian')}</AppItem>
          <AppItem id={'de'} textValue={'German'}>{collapsed ? t('de') : t('German')}</AppItem>
          <AppItem id={'en'} textValue={'English'}>{collapsed ? t('en') : t('English')}</AppItem>
        </AppSelect>
        <ThemeSwitcher />
      </div>
    </div>
  )
})
