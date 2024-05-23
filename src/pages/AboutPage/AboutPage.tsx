
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'



import cls from './AboutPage.module.scss'

const AboutPage = () => {
  const { t } = useTranslation('about')
  const aboutPageClassName = classNames(cls.aboutPage)



  return (
    <div className={aboutPageClassName}>
      <h1>ABOUT</h1>
    </div>
  )
}

export default AboutPage
