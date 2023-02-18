import cls from './AboutPage.module.scss'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about')
  const aboutPageClassName = classNames(cls.aboutPage)
  return (
    <div className={aboutPageClassName}>
      <h1>{t('title')}</h1>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
    </div>
  )
}

export default AboutPage
