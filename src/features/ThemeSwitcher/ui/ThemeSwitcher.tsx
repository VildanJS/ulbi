import { FC, memo, useCallback } from 'react'

import { saveJsonSettings } from '@/entities/User'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import useTheme from '@/shared/utils/hooks/useTheme/useTheme'


import { IThemeSwitcher } from '../types'

export const ThemeSwitcher: FC<IThemeSwitcher> = memo(() => {
  const { toggleTheme } = useTheme()
  const dispatch = useAppDispatch()
  const onPressHandler = useCallback(() => {
    toggleTheme((newTheme) => dispatch(saveJsonSettings({ theme: newTheme })))
  }, [toggleTheme])
  return (
    <AppButton variant='clear' onPress={onPressHandler}>
      {<Icon width={32} height={32} Svg={DarkIcon} />}
    </AppButton>
  )
})
