export enum Theme {
  dark = 'dark',
  light = 'light',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
