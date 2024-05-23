import { memo, ReactNode, useCallback } from 'react'

import classNames from 'classnames'

import { Flex } from '@/shared/ui/redesigned/Stack'

import cls from './Tabs.module.scss'
import { Tab } from '../Tab/Tab'


export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  flexDirection?: 'Row' | 'Column';
  onTabClick: (tab: TabItem) => void;
}
/**
 * @deprecated
 **/
export const Tabs = memo((props: TabsProps) => {
  const {
    className, tabs, onTabClick, value, flexDirection = 'Row'
  } = props

  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab)
  }, [onTabClick])

  return (
    <Flex
      gap={'8'}
      direction={flexDirection}
      className={classNames(className, cls.Tabs)
      }>
      {tabs.map((tab) => (
        <Tab
          isSelected={tab.value === value}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Tab>
      ))}
    </Flex>
  )
})
