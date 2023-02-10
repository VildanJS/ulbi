import {FC, useState} from 'react';
import cls from './Sidebar.module.scss';
import {ISidebar} from "../../types";
import classNames from "classnames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


export const Sidebar: FC<ISidebar> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {className} = props;
  const sidebarClass = classNames(className, cls.sidebar, {[cls.collapsed]: collapsed})

  return (
    <div className={sidebarClass}>
      <button onClick={() => setCollapsed(prev => !prev)}>Switch</button>
      <div className={cls.switchersWrap}>
        <ThemeSwitcher/>
      </div>

    </div>
  );
};
