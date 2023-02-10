import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "../lib/ThemeContext";
import {Theme} from "../types";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<React.PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
