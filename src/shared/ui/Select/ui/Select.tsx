import {ChangeEvent, FC, useRef} from 'react';
import cls from './Select.module.scss';
import {ISelect} from "../types";
import classNames from "classnames";
import { useTranslation } from 'react-i18next';


export const Select: FC<ISelect> = (props) => {
  const {className, children} = props;
  const selectClass = classNames(className, cls.select)

  const { t, i18n } = useTranslation();

  const langSelect = useRef(null);
  const switchLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <label htmlFor="standard-select">{t('switchLanguage')}</label>
      <div className={selectClass}>
        <select ref={langSelect} onChange={switchLanguage}>
          <option value='ru'>Russian</option>
          <option value='de'>German</option>
          <option value='en'>English</option>
          {children}
        </select>
        <span className="focus"></span>
      </div>
    </>
  );
};
