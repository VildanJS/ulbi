import cls from './Navbar.module.scss'
import {INavbar} from '../types'
import classNames from 'classnames'
import {AppLink, AppLinkThemes} from 'shared/ui/AppLink'

export const Navbar = ({className}: INavbar) => {

  const navbarClass = classNames(className, cls.navbar)
  const linksClass = classNames('mr-2', cls.links)

  return (
    <div className={navbarClass}>
      <div className={linksClass}>
        <AppLink theme={AppLinkThemes.INVERTED} to='/'>Main</AppLink>
        <AppLink theme={AppLinkThemes.INVERTED} to='about'>About</AppLink>
      </div>
    </div>
  )
}
