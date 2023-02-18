export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}
