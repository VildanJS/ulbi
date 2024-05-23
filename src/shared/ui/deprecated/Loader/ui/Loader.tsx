import { FC } from 'react'

import classNames from 'classnames'

import cls from './Loader.module.scss'
import { ILoader } from '../types'
/**
 * @deprecated
 **/
export const Loader: FC<ILoader> = (props) => {
  const {
    className,
    theme = 'primary'
  } = props
  const loaderClass = classNames(className, cls[theme], cls.loader )

  return (
    <span className={loaderClass}></span>
  )
}
