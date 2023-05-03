import { FC, memo, useState } from 'react'
import cls from './Sidebar.module.scss'
import { ISidebar } from '../../types'
import classNames from 'classnames'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { Select } from '@/shared/ui/Select'
import { Button, ButtonThemes } from '@/shared/ui/Button'
import { SidebarItem } from '../SidebarItem'
import { getSideBarItems } from '../SidebarItem/model/selectors/getSideBarItems'
import { useSelector } from 'react-redux'
import { Flex } from '@/shared/ui/Layout'


export const Sidebar: FC<ISidebar> = memo((props) => {
  const [collapsed, setCollapsed] = useState(false)
  const { className } = props
  const sidebarClass = classNames(className, cls.sidebar, { [cls.collapsed]: collapsed })
  const sidebarItemList = useSelector(getSideBarItems)


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

      <Flex className={cls.links} direction={'Column'} align={'Start'} gap={'32'}>
        {sidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path} />
        )) }
      </Flex>

      <div className={cls.switchers}>
        <Select collapsed={collapsed} />
        <ThemeSwitcher />
      </div>
    </div>
  )
})
