import { FC } from 'react'
import cls from './NotFound.module.scss'
import { INotFound } from '../types'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export const NotFound: FC<INotFound> = (props) => {
  const { t } = useTranslation()
  const {
    className,
  } = props
  const notFoundClass = classNames(className, cls.notFound)

  return (
    <h1 className={notFoundClass}>
      {t('notFound')}
    </h1>
  )
}
