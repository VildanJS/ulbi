import { FC } from 'react'
import cls from './PageLoader.module.scss'
import { IPageLoader } from '../types'
import classNames from 'classnames'
import { Loader } from 'shared/ui/Loader'

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
