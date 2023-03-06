import {FC, memo, useState} from 'react'
import cls from './Sidebar.module.scss'
import { ISidebar } from '../../types'
import classNames from 'classnames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Select } from 'shared/ui/Select'
import { Button, ButtonThemes } from 'shared/ui/Button'
import {SidebarItemList} from '../SidebarItem/model'
import {SidebarItem} from '../SidebarItem'


export const Sidebar: FC<ISidebar> = memo((props) => {
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
        {SidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}/>
        )) }
      </div>

      <div className={cls.switchers}>
        <Select collapsed={collapsed}/>
        <ThemeSwitcher/>
      </div>
    </div>
  )
})
