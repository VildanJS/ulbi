import { CSSProperties, FC, useMemo } from 'react'

import classNames from 'classnames'

import UserIcon from '@/shared/assets/icons/user-filled.svg'


import cls from './Avatar.module.scss'
import { AppImage } from '../../../deprecated/AppImage'
import { Icon } from '../../Icon'
import { Skeleton } from '../../Skeleton'
import { IAvatar } from '../types'


export const Avatar: FC<IAvatar> = (props) => {
  const { className, invertedFallback, src, size = 40, alt } = props
  const avatarClass = classNames(className, cls.avatar)

  const fallbackClass = invertedFallback ? cls.invertedFallback : cls.fallback

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  )

  return (
    <AppImage
      errorFallback={<Icon Svg={UserIcon} width={size} height={size} className={fallbackClass} />}
      fallback={<Skeleton width={size} height={size} />}
      alt={alt}
      src={src}
      style={styles}
      className={avatarClass}
    />
  )
}
