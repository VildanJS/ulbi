import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext'
import { Theme } from '../types'


interface ThemeProviderProps extends PropsWithChildren {
  initialTheme: Theme
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme
  } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
