import { Key, useState } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { AppItem, AppSelect } from '@/shared/ui/redesigned/Dropdowns/AppSelect'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Flex } from '@/shared/ui/redesigned/Stack'


import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/index'
import { getSideBarItems } from '../SidebarItem/model/selectors/getSideBarItems'

export const SidebarRedesigned = () => {
  const sidebarItemList = useSelector(getSideBarItems)
  const { t, i18n } = useTranslation()



  const [collapsed, setCollapsed] = useState(false)

  const sidebarClassRedesigned = classNames(
    { [cls.collapsedRedesigned]: collapsed },
    cls.sidebarRedesigned)

  const switchLanguage = (key: Key) => {
    i18n.changeLanguage(key as string)
  }

  return (
    <nav className={sidebarClassRedesigned}>
      <AppButton
        variant='clear'
        size='l'
        className={cls.collapsedBtn}
        onPress={() => setCollapsed((prev) => !prev)}
      >
        <Icon Svg={ArrowIcon}></Icon>
      </AppButton>
      <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
      <Flex
        className={cls.items}
        direction={'Column'}
        align={'Start'}
        gap={'32'}
      >
        {sidebarItemList.map((item) => (
          <SidebarItem
            className={cls.sidebarItem}
            collapsed={collapsed}
            item={item}
            key={item.path}
          />
        ))}
      </Flex>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <AppSelect isSmall={collapsed} selectedKey={i18n.language} onSelectionChange={switchLanguage} >
          <AppItem id={'ru'} textValue={'Russian'}>
            {collapsed ? t('ru') : t('Russian')}
          </AppItem>
          <AppItem id={'de'} textValue={'German'}>
            {collapsed ? t('de') : t('German')}
          </AppItem>
          <AppItem id={'en'} textValue={'English'}>
            {collapsed ? t('en') : t('English')}
          </AppItem>
        </AppSelect>
      </div>
    </nav>
  )
}
