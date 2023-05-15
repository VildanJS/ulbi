import { FC, useLayoutEffect, useState } from 'react'

import classNames from 'classnames'

import cls from './AppImage.module.scss'
import { IAppImage } from '../types'

export const AppImage: FC<IAppImage> = (props) => {
  const {
    fallback,
    errorFallback,
    src,
    alt,
    ...otherProps
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const image = new Image()
    image.src = src ?? ''
    image.onload = () => {
      setIsLoading(false)
    }
    image.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [src])

  if(isLoading && fallback) return fallback
  if(hasError && errorFallback) return errorFallback

  const {
    className,
  } = props
  const appImageClass = classNames(className, cls.appImage)



  return (
    <img
      alt={alt}
      src={src}
      className={appImageClass}
      {...otherProps}
    />
  )
}
