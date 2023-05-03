import { PropsWithChildren } from 'react'
import cls from '../ui/Flex.module.scss'

type justifyType = 'Start'
  | 'End'
  | 'Center'
  | 'Left'
  | 'Right'
  | 'Space-between'
  | 'Space-around'
  | 'Space-evenly'
  | 'Stretch'
  | 'Baseline'

type alignItemsType = 'Start'
  | 'End'
  | 'Center'
  | 'Stretch'
  | 'Self-start'
  | 'Self-end'
  | 'Baseline'


type directionType = 'Row'
  | 'Column'
  | 'Row-reverse'
  | 'Column-reverse'

type gapType = '4' | '8' | '16' | '32'

interface IFlex extends PropsWithChildren {
  className?: string,
  justify?: justifyType,
  align?: alignItemsType,
  direction?: directionType,
  gap?: gapType

}

export {
  IFlex
}
