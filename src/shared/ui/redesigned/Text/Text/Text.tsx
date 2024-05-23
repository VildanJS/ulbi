import { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'
import { DefaultTFuncReturn } from 'i18next'

import cls from './Text.module.scss'

type TextThemes = 'primary' | 'error' | 'accent'

type textAlign = 'center' | 'left' | 'right'
type textSize = 'S' | 'M' | 'L'
interface TextProps extends PropsWithChildren {
  className?: 'string',
  theme?: TextThemes,
  title?: string,
  text?: DefaultTFuncReturn,
  align?: textAlign,
  size?: textSize,
  bold?: boolean,
  'data-testid'?: string
}

export const Text: FC<TextProps> = (props) => {
  const {
    'data-testid': dataTestID = 'Test',
    title, text,
    className, children,
    theme = 'primary',
    align = 'left',
    bold,
    size = 'M'
  } = props

  const textClass = classNames(className, cls[theme], cls[align], cls[size], { [cls.bold]: bold })

  return (
    <div className={textClass}>
      {title && <p data-testid={`${dataTestID}.Header`} className={cls.title}>{title}</p>}
      {text && <p data-testid={`${dataTestID}.Paragraph`} className={cls.text}>{text}</p>}
    </div>
  )
}
