import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import cls from './Flex.module.scss'

export type FlexJustify = 'Start' | 'Center' | 'End' | 'SpaceBetween' | 'SpaceAround';
export type FlexAlign = 'Start' | 'Center' | 'End';
export type FlexDirection = 'Row' | 'Column';
export type FlexGap = '4' | '8' | '16' | '32';


type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
  } = props

  const flexClass = classNames(
    className, cls.flex,
    cls['justifyContent' + justify],
    cls['alignItems' + align],
    cls['flexDirection' + direction],
    cls['flexGap' + gap],
    {
      [cls.max]: max,
    }

  )

  return (
    <div className={flexClass}>
      {children}
    </div>
  )
}
