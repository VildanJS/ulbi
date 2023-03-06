import {ChangeEvent, FC, memo, useRef} from 'react'
import cls from './Select.module.scss'
import {ISelect} from '../types'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'


export const Select: FC<ISelect> = memo((props) => {
  const {className, collapsed, children} = props
  const selectClass = classNames(className, cls.select)

  const { t, i18n } = useTranslation()

  const langSelect = useRef(null)
  const switchLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      {
        !collapsed
          ? (<label htmlFor="standard-select">{t('switchLanguage')}</label>)
          : <></>
      }

      <div className={selectClass}>
        <select ref={langSelect} onChange={switchLanguage}>
          <option value='ru'>{collapsed ? t('ru') : t('Russian')}</option>
          <option value='de'>{collapsed ? t('de') : t('German')}</option>
          <option value='en'>{collapsed ? t('en') : t('English')}</option>
          {children}
        </select>
        <span className="focus"></span>
      </div>
    </>
  )
})
