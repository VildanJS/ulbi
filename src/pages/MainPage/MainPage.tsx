import classNames from 'classnames'
import cls from './MainPage.module.scss'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/BugButton'
import { Counter } from 'entities/Counter'


const MainPage = () => {
  const { t } = useTranslation('main')
  const mainPageClassName = classNames(cls.mainPage)
  return (
    <div className={mainPageClassName}>
      <BugButton/>
      <h1>{t('title')}</h1>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <Counter/>
    </div>
  )
}

export default MainPage
