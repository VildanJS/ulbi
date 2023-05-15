import { FC, useEffect, useState } from 'react'

import classNames from 'classnames'
import { AppButton } from 'shared/ui/AppButton'

import cls from './BugButton.module.scss'
import { IBugButton } from '../types'

export const BugButton: FC<IBugButton> = (props) => {
  const [error, setError] = useState(false)

  const throwError = () => setError(true)
  useEffect(() => {
    if (error) throw new Error()
  }, [error])

  const {
    className,
  } = props
  const bugButtonClass = classNames(className, cls.bugButton)

  return (
    <AppButton
      theme='outline'
      onPress={throwError}
      className={bugButtonClass}
    >
      Выбросить ошибку
    </AppButton>
  )
}
