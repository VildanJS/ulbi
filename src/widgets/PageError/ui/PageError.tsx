import { FC } from 'react'
import cls from './PageError.module.scss'
import { IPageError } from '../types'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export const PageError: FC<IPageError> = (props) => {
  const { t } = useTranslation()
  const {
    className
  } = props
  const pageErrorClass = classNames(className, cls.pageError)

  return (
    <div className={pageErrorClass}>
      {t('Something went wrong.')}
    </div>
  )
}
