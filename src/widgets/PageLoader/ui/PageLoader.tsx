import { FC } from 'react'

import classNames from 'classnames'

import { Loader } from '@/shared/ui/deprecated/Loader'

import cls from './PageLoader.module.scss'
import { IPageLoader } from '../types'

export const PageLoader: FC<IPageLoader> = (props) => {
  const {
    className
  } = props
  const pageLoaderClass = classNames(className, cls.pageLoader)

  return (
    <div className={pageLoaderClass}>
      <Loader />
    </div>
  )
}
