import {FC, memo} from 'react'
import {IThemeSwitcher} from '../types'
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {Button, ButtonThemes} from 'shared/ui/Button'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

export const ThemeSwitcher: FC<IThemeSwitcher> = memo(() => {
  const {toggleTheme} = useTheme()

  return (
    <Button
      theme={ButtonThemes.CLEAR}
      onClick={toggleTheme}
    >
      {<DarkIcon className={cls.colorFill}/>}
    </Button>
  )
})
