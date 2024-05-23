import { CSSProperties, FC } from 'react'

import classNames from 'classnames'

import cls from './Skeleton.module.scss'
import { ISkeleton } from '../types'

export const Skeleton: FC<ISkeleton> = (props) => {
  const { className, children, width, height, border } = props
  const skeletonClass = classNames(className, cls.skeleton)
  const styles: CSSProperties = {
    width, height, borderRadius: border
  }
  return (
    <div
      style={styles}
      className={skeletonClass}
    >
      {children}
    </div>
  )
}
