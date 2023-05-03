import { FC } from 'react'
import cls from './ForbiddenPage.module.scss'
import { IForbiddenPage } from '../types'
import classNames from 'classnames'
import { Page } from '@/shared/ui/Page'
import { useTranslation } from 'react-i18next'


export const ForbiddenPage: FC<IForbiddenPage> = (props) => {
  const { className, children } = props
  const { t } = useTranslation()
  const forbiddenPageClass = classNames(className, cls.forbiddenPage)

  return (
    <Page className={forbiddenPageClass}>
      <h1>{t('НЕТ ДОСТУПА')}</h1>
    </Page>
  )
}
