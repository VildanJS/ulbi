import { FC, PropsWithChildren } from 'react'

import classNames from 'classnames'

import CircleUp from '@/shared/assets/icons/CircleUp.svg'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { Icon } from '@/shared/ui/redesigned/Icon'


import cls from './scrollToTopButton.module.scss'


interface ScrollToTopButtonProps extends PropsWithChildren {
  className?: string
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = (props) => {
  const { className } = props
  const scrollToTopButtonClass = classNames(className, cls.scrollToTopButton)

  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <AppButton variant={'clear'} onPress={onClickHandler} className={scrollToTopButtonClass}>
      <Icon width={32} height={32} Svg={CircleUp}></Icon>
    </AppButton>
  )
}
