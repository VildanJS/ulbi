import { FC, PropsWithChildren, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage'
import { Theme } from 'shared/const/theme'

import { ThemeContext } from '../../../../shared/utils/context/ThemeContext'


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
