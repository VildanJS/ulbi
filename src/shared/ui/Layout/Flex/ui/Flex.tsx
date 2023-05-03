import { FC } from 'react'
import cls from './Flex.module.scss'
import { IFlex } from '../types'
import classNames from 'classnames'


export const Flex: FC<IFlex> = (props) => {
  const {
    className,
    children,
    direction = 'Row',
    justify = 'Stretch',
    align = 'Start',
    gap
  } = props


  const flexClass = classNames(
    className, cls.flex,
    cls['justifyContent' + justify],
    cls['alignItems' + align],
    cls['flexDirection' + direction],
    cls['flexGap' + gap],
  )

  return (
    <div className={flexClass}>
      {children}
    </div>
  )
}
