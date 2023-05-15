import { FC, memo } from 'react'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { AppButton } from 'shared/ui/AppButton'
import useTheme from 'shared/utils/hooks/useTheme/useTheme'

import cls from './ThemeSwitcher.module.scss'
import { IThemeSwitcher } from '../types'


export const ThemeSwitcher: FC<IThemeSwitcher> = memo(() => {
  const { toggleTheme } = useTheme()
  return (
    <AppButton
      theme='clear'
      onPress={toggleTheme}
    >
      {<DarkIcon className={cls.colorFill} />}
    </AppButton>
  )
})
