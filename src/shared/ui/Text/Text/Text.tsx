import { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'
import { DefaultTFuncReturn } from 'i18next'

import cls from './Text.module.scss'

type TextThemes = 'primary' | 'error'

type textAlign = 'center' | 'left' | 'right'
type textSize = 'S' | 'M'
interface TextProps extends PropsWithChildren {
  className?: 'string',
  theme?: TextThemes,
  title?: string,
  text?: DefaultTFuncReturn,
  align?: textAlign,
  size?: textSize,
  'data-testid'?: string
}

export const Text: FC<TextProps> = (props) => {
  const {
    'data-testid': dataTestID = 'Test',
    title, text,
    className, children,
    align = 'left',
    theme = 'primary',
    size = 'M'
  } = props
  const textClass = classNames(className, cls[theme], cls[align], cls[size])

  return (
    <div className={textClass}>
      {title && <p data-testid={`${dataTestID}.Header`} className={cls.title}>{title}</p>}
      {text && <p data-testid={`${dataTestID}.Paragraph`} className={cls.text}>{text}</p>}
      {children && <p>{children}</p>}
    </div>
  )
}
