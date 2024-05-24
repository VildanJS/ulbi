import React from 'react'

import { TabListState } from '@react-stately/tabs'
import { Node } from '@react-types/shared'
import {
  AriaTabListOptions,
  AriaTabPanelProps,
  AriaTabProps,
  useTab,
  useTabList,
  useTabPanel,
} from 'react-aria'
import { useTabListState } from 'react-stately'
import './AppTabs.module.scss'


interface AppTabProps<T> extends AriaTabProps {
  state: TabListState<T>
  item: Node<T>
}
/**
 * @deprecated
 **/
export function AppTab<T>({ item, state }: AppTabProps<T>) {
  const { key, rendered } = item
  const ref = React.useRef(null)
  const { tabProps } = useTab({ key }, state, ref)
  const ElementType = item.props.href ? 'a' : 'div'

  return (
    <ElementType className='border-0' {...tabProps} ref={ref} >
      <span >{rendered}</span>
    </ElementType>
  )
}

interface AppTabsProps<T> extends AriaTabListOptions<T> {
  className?: string
  children?: JSX.Element | JSX.Element[] | ((item: any) => JSX.Element)
  id?: string
}

export function AppTabs<T extends object>(props: AppTabsProps<T>) {
  const state = useTabListState(props)

  const ref = React.useRef<HTMLDivElement>(null)
  const { tabListProps } = useTabList(props, state, ref)



  return (
    <div >

      <div {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <AppTab key={item.key} item={item} state={state} />
        ))}
      </div>

      {!state.selectedKey && (
        <TabPanel key={state.selectedItem?.key} state={state} />
      )}
    </div>
  )
}

interface AppTabPanelProps<T> extends AriaTabPanelProps {
  state: TabListState<T>
  children?: JSX.Element | JSX.Element[] | ((item: any) => JSX.Element)
}

export function TabPanel<T>({ state, ...props }: AppTabPanelProps<T>) {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  )
}
