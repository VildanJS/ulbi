import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { Theme } from '@/shared/const/theme'

import { ThemeContext } from '../../context/ThemeContext'

export interface UseThemeResult {
  toggleTheme: (saveAction: (theme: Theme) => void) => void
  theme: Theme
}
export default (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = (saveAction: (theme: Theme) => void) => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    saveAction(newTheme)
  }

  return {
    theme: theme ?? Theme.LIGHT,
    toggleTheme,
  }
}
