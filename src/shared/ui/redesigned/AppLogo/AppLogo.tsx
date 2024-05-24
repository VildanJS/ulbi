import { memo } from 'react'

import classNames from 'classnames'

import AppSvg from '@/shared/assets/icons/app-image.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

import cls from './AppLogo.module.scss'
import { HStack } from '../Stack'

interface AppLogoProps {
  className?: string,
  size?: number
}


export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
  return (
    <HStack
      max
      justify={'Center'}
      className={classNames(cls.appLogoWrapper, [className])}
    >
      <Icon width={size} height={size} Svg={AppSvg}></Icon>
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  )
})
