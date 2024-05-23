import { FC } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Page } from '@/shared/ui/deprecated/Page'

import cls from './NotFound.module.scss'
import { INotFound } from '../types'

export const NotFound: FC<INotFound> = (props) => {
  const { t } = useTranslation('notFound')
  const {
    className,
  } = props
  const notFoundClass = classNames(className, cls.notFound)

  return (
    <Page data-testid={'NotFoundPage'}>
      <h1 className={notFoundClass}>
        {t('No')}
      </h1>
    </Page>
  )
}
