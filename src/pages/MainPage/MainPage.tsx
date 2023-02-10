import classNames from 'classnames';
import cls from './MainPage.module.scss'
import React from 'react';
import { useTranslation } from 'react-i18next';
import {Select} from "shared/ui/Select";

const MainPage = () => {
  const { t } = useTranslation('main');
  const mainPageClassName = classNames(cls.mainPage)
  return (
    <div className={mainPageClassName}>
      <Select/>
      <h1>{t('title')}</h1>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
    </div>
  );
};

export default MainPage;
