import { FC, PropsWithChildren } from 'react'
import cls from './Text.module.scss'
import classNames from 'classnames'
import { DefaultTFuncReturn } from 'i18next'

export enum TextThemes {
  PRIMARY = 'primary',
  ERROR = 'error',
}

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
    theme = TextThemes.PRIMARY,
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
