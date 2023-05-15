import { HTMLAttributes, memo, ReactNode } from 'react'

import classNames from 'classnames'

import cls from './Card.module.scss'

type CardTheme = 'normal' | 'outlined'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    max,
    theme = 'normal',
    ...otherProps
  } = props

  return (
    <div
      className={classNames(cls.card, className, cls[theme], { [cls.max]: max })}
      {...otherProps}
    >
      {children}
    </div>
  )
})
