import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";
import {Theme, UseThemeResult} from "../types";



export default ():UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  };

  return {theme, toggleTheme}
}
