import classNames from 'classnames'
import { Page } from 'shared/ui/Page'

import cls from './AboutPage.module.scss'

const AboutPage = () => {
  const aboutPageClassName = classNames(cls.aboutPage)

  return (
    <Page data-testid='AboutPage' className={aboutPageClassName}>
      <h1>ABOUT</h1>
    </Page>
  )
}

export default AboutPage
