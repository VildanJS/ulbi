import {FC, PropsWithChildren} from 'react'
import cls from './Text.module.scss'
import classNames from 'classnames'

export enum TextThemes {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps extends PropsWithChildren {
  className?: 'string',
  theme?: TextThemes,
  title?: string,
  text?: string
}

export const Text: FC<TextProps> = (props) => {
  const {
    title, text,
    className, children,
    theme = TextThemes.PRIMARY,
  } = props
  const textClass = classNames(className, {[cls[theme]]: true})

  return (
    <div className={textClass}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
      {children && <p>{children}</p>}
    </div>

  )
}
