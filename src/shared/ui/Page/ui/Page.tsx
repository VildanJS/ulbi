import { FC } from 'react'

import classNames from 'classnames'


import cls from './Page.module.scss'
import { IPage } from '../types'

export const Page: FC<IPage> = (props) => {
  const { className, children } = props
  const pageClass = classNames(className, cls.page)

  return (
    <main data-testid={props['data-testid'] ?? 'Page'} className={pageClass}>
      {children}
    </main>
  )
}

// TODO  Типизация для memo
// const typedMemo: <T>(c: T) => T = memo;
// export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {...}
