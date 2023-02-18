import { FC, useEffect, useState } from 'react'
import cls from './BugButton.module.scss'
import { IBugButton } from '../types'
import classNames from 'classnames'
import { Button } from 'shared/ui/Button'

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
    <Button
      onClick={throwError}
      className={bugButtonClass}>
      Выбросить ошибку
    </Button>
  )
}
