import { FC, Key, useState } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { Flex } from '@/shared/ui/redesigned/Stack'


import cls from './Sidebar.module.scss'
import { SidebarDeprecatedProps } from '../../types'
import { SidebarItem } from '../SidebarItem'
import { getSideBarItems } from '../SidebarItem/model/selectors/getSideBarItems'

export const SidebarDeprecated: FC<SidebarDeprecatedProps> = (props) => {
  const { t, i18n } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const { className } = props
  const sidebarClass = classNames(className, cls.sidebar, {
    [cls.collapsed]: collapsed,
  })
  const sidebarItemList = useSelector(getSideBarItems)

  const switchLanguage = (key: Key) => {
    i18n.changeLanguage(key as string)
  }

  return (
    <aside data-testid='sidebar' className={sidebarClass}>
      <AppButton
        size='l'
        className={cls.collapsedBtn}
        onPress={() => setCollapsed((prev) => !prev)}
      >
        {collapsed ? '>' : '<'}
      </AppButton>

      <Flex
        className={cls.links}
        direction={'Column'}
        align={'Start'}
        gap={'32'}
      >
        {sidebarItemList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </Flex>

      <div className={cls.switchers}>

        {/*<AppSelect onSelectionChange={switchLanguage} >*/}
        {/*<AppItem id={'ru'} textValue={'Russian'}>*/}
        {/*  {collapsed ? t('ru') : t('Russian')}*/}
        {/*</AppItem>*/}
        {/*<AppItem id={'de'} textValue={'German'}>*/}
        {/*  {collapsed ? t('de') : t('German')}*/}
        {/*</AppItem>*/}
        {/*<AppItem id={'en'} textValue={'English'}>*/}
        {/*  {collapsed ? t('en') : t('English')}*/}
        {/*</AppItem>*/}
        {/*</AppSelect>*/}
        <ThemeSwitcher />
      </div>
    </aside>
  )
}
