import { FC } from 'react'

import classNames from 'classnames'
import { toggleFeatures } from '@/shared/utils/featereFlags/toggleFeatureFlag'

import cls from './Page.module.scss'
import { IPage } from '../types'
/**
 * @deprecated
 **/
export const Page: FC<IPage> = (props) => {
  const { className, children } = props
  const pageClass = classNames(className,
    toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.pageRedesigned,
      off: () => cls.page,
    })
  )

  return (
    <main data-testid={props['data-testid'] ?? 'Page'} className={pageClass}>
      {children}
    </main>
  )
}

// TODO  Типизация для memo
// const typedMemo: <T>(c: T) => T = memo;
// export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {...}
