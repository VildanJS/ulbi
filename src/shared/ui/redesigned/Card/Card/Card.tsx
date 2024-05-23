import { HTMLAttributes, memo, ReactNode } from 'react'

import classNames from 'classnames'

import cls from './Card.module.scss'

type CardVariant = 'normal' | 'light' | 'clear'
type CardPadding = '0' | '8' | '16' | '24' | '32';
type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  accent?: boolean;
  borderRadius?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
  '32': 'gap_32',
}



export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    max,
    padding = '8',
    accent,
    variant = 'normal',
    borderRadius = 'normal',
    ...otherProps
  } = props

  const paddingClass = mapPaddingToClass[padding]


  const CardClassnames = classNames(cls.card, className,
    [cls[variant], cls[paddingClass], cls[borderRadius]],
    {
      [cls.max]: max,
      [cls.accent]: accent
    })

  return (
    <div
      className={CardClassnames}
      {...otherProps}
    >
      {children}
    </div>
  )
})
