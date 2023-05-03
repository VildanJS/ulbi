import {CSSProperties, FC, useMemo} from 'react'
import cls from './Avatar.module.scss'
import {IAvatar} from '../types'
import classNames from 'classnames'


export const Avatar: FC<IAvatar> = (props) => {
  const { className, src, size = 100, alt } = props
  const avatarClass = classNames(className, cls.avatar)

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size
  }), [size])

  return (
    <img alt={alt} src={src} style={styles} className={avatarClass}/>
  )
}
