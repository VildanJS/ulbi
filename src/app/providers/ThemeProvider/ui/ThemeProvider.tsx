import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react'


import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/utils/context/ThemeContext'

interface ThemeProviderProps extends PropsWithChildren {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const [isThemeInited, setThemeInited] = useState(false)
  const { children, initialTheme } = props

  const [theme, setTheme] = useState<Theme>(initialTheme || Theme.LIGHT)

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme)
      setThemeInited(true)
    }
  }, [initialTheme, isThemeInited])

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
