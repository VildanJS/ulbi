import classNames from 'classnames'
import { HTMLAttributes, memo, ReactNode } from 'react'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

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
    theme = CardTheme.NORMAL,
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
