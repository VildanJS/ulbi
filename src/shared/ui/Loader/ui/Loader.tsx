import { FC } from 'react'
import cls from './Loader.module.scss'
import { ILoader, LoaderThemes } from '../types'
import classNames from 'classnames'

export const Loader: FC<ILoader> = (props) => {
  const {
    className,
    theme = LoaderThemes.PRIMARY
  } = props
  const loaderClass = classNames(className, cls[theme], cls.loader )

  return (
    <span className={loaderClass}></span>
  )
}
