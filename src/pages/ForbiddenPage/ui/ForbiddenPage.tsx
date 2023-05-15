import { FC } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { Page } from '@/shared/ui/Page'

import cls from './ForbiddenPage.module.scss'
import { IForbiddenPage } from '../types'



export const ForbiddenPage: FC<IForbiddenPage> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const forbiddenPageClass = classNames(className, cls.forbiddenPage)

  return (
    <Page data-testid='ForbiddenPage' className={forbiddenPageClass}>
      <h1>{t('НЕТ ДОСТУПА')}</h1>
    </Page>
  )
}
