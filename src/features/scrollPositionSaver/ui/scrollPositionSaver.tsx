import { FC } from 'react'

import classNames from 'classnames'

import cls from './scrollPositionSaver.module.scss'
import { UISchema } from '../types'


export const scrollPositionSaver: FC<UISchema> = () => {
  const scrollPositionSaverClass = classNames(cls.scrollPositionSaver)

  return (
    <div className={scrollPositionSaverClass}>
      1
    </div>
  )
}
