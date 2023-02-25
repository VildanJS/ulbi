import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'
import { ISidebar } from '../../types'
import classNames from 'classnames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Select } from 'shared/ui/Select'
import { Button, ButtonThemes } from 'shared/ui/Button'
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink'
import { AppRoutePaths } from 'app/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'

export const Sidebar: FC<ISidebar> = (props) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const { className } = props
  const sidebarClass = classNames(className, cls.sidebar, { [cls.collapsed]: collapsed })

  return (
    <div
      data-testid='sidebar'
      className={sidebarClass}
    >
      <Button
        theme={ButtonThemes.BACKGROUND_INVERTED}
        square
        size={'L'}
        className={cls.collapsedBtn}
        onClick={() => setCollapsed(prev => !prev)}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.links}>
        <AppLink className={cls.linkAndIconWrap} theme={AppLinkThemes.INVERTED} to={AppRoutePaths.main}>
          <HomeIcon className={cls.icon}/>
          <span className={cls.link}>{t('Main')}</span>
        </AppLink>

        <AppLink className={cls.linkAndIconWrap} theme={AppLinkThemes.INVERTED} to={AppRoutePaths.about}>
          <AboutIcon className={cls.icon}/>
          <span className={cls.link}>{t('About')}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <Select collapsed={collapsed}/>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}
