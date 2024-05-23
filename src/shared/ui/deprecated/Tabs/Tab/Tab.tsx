import { FC, HTMLAttributes } from 'react'

import classNames from 'classnames'

import cls from './Tab.module.scss'


interface TabProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  isSelected: boolean;
}

export const Tab: FC<TabProps> = (props) => {
  const { className, children, isSelected, ...otherProps } = props
  const TabClassNames = classNames(className, cls.tab, { [cls.selected]: isSelected })
  return (
    <div {...otherProps} className={TabClassNames}>
      {children}
    </div>
  )
}
