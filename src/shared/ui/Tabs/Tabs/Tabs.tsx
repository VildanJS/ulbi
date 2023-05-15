import { memo, ReactNode, useCallback } from 'react'

import classNames from 'classnames'

import cls from './Tabs.module.scss'
import { Card } from '../../Card'



export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className, tabs, onTabClick, value,
  } = props

  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab)
  }, [onTabClick])

  return (
    <div className={classNames(cls.Tabs, className) }>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? 'normal' : 'outlined'}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
