import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Page } from '@/shared/ui/deprecated/Page'

import { Counter } from '@/entities/Counter'
import { BugButton } from '@/widgets/BugButton'

import cls from './MainPage.module.scss'



const MainPage = () => {
  const { t } = useTranslation('main')
  const mainPageClassName = classNames(cls.mainPage)
  return (
    <Page data-testid='MainPage' className={mainPageClassName}>
      <BugButton />
      <h1>{t('title')}</h1>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <Counter />
    </Page>
  )
}

export default MainPage
