import {FC} from 'react';
import cls from './AppLink.module.scss';
import {IAppLink} from "../types";
import classNames from "classnames";
import { Link } from 'react-router-dom';

export const AppLink: FC<IAppLink> = (props) => {
  const {
    to, className, children,
    theme = 'primary',
    ...other} = props;
  const appLinkClass = classNames(className, cls.appLink, cls[theme])

  return (
    <Link
      {...other}
      to={to}
      className={appLinkClass}
    >
      {children}
    </Link>
  );
};
