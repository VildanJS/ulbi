import { FC } from 'react'
import cls from './scrollPositionSaver.module.scss'
import { UISchema } from '../types'
import classNames from 'classnames'


export const scrollPositionSaver: FC<UISchema> = (props) => {

  const scrollPositionSaverClass = classNames(cls.scrollPositionSaver)

  return (
    <div className={scrollPositionSaverClass}>
      1
    </div>
  )
}
