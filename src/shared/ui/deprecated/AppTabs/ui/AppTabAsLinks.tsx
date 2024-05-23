import React from 'react'


import { TabListState } from '@react-stately/tabs'
import { Node } from '@react-types/shared'
import classNames from 'classnames'
import { AriaTabListOptions, AriaTabPanelProps, useTab, useTabList, useTabPanel } from 'react-aria'
import { useLocation } from 'react-router-dom'
import { Item, useListData, useTabListState } from 'react-stately'

interface AppTabProp<T> {
  state: TabListState<T>,
  item: Node<T>
}


function AppTab<T>({ item, state }: AppTabProp<T>) {
  const ref = React.useRef(null)

  const { tabProps } = useTab({ key: item.key }, state, ref)
  const ElementType = item?.props.href ? 'a' : 'div'
  return (
    <ElementType {...tabProps} ref={ref}>
      {item?.rendered}
    </ElementType>
  )
}


interface AppTabPanelProps<T> extends AriaTabPanelProps {
  state: TabListState<T>
}

function TabPanel<T>({ state, ...props }: AppTabPanelProps<T>) {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  )
}


interface AppTabsProps<T> extends AriaTabListOptions<T> {
  className?: string
  children?: JSX.Element | JSX.Element[] | ((item: any) => JSX.Element);
}
export function AppTabs<T extends object>(props: AppTabsProps<T>) {
  const state = useTabListState(props)
  const ref = React.useRef(null)
  const { tabListProps } = useTabList(props, state, ref)

  const spectrumClasses = [
    'spectrum-Tabs',
    'spectrum-Tabs--sizeS',
    'spectrum-Tabs--horizontal',
  ]

  return (
    <div className={`tabs ${props.orientation || ''}`}>
      <div className={classNames(spectrumClasses)} {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <AppTab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  )
}
export function AppTabsAsLinks() {
  const list = useListData({
    initialItems: [
      { name: 'Aardvark', href: '/' },
      { name: 'Kangaroo', href: '/about' },
      { name: 'Snake', href: '/articles' }
    ],
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.name
  })
  const { pathname } = useLocation()
  return (
    <>
      <AppTabs items={list.items} selectedKey={pathname} aria-label="Tabs">
        {(item: any) => <Item href={item.href} key={item.name} title={item.name} >{item.name}</Item>}
      </AppTabs>
    </>

  )
}
