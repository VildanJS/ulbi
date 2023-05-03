import React, { FC, useCallback } from 'react'
import cls from './Code.module.scss'
import { ICode } from '../types'
import classNames from 'classnames'
import { Button, ButtonThemes } from '@/shared/ui/Button'
import CopyIcon from '@/shared/assets/icons/copy.svg'

export const Code: FC<ICode> = (props) => {

  const { className, text } = props
  const codeClass = classNames(className, cls.code)

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={codeClass}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonThemes.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code >
        {text}
      </code>
    </pre>
  )
}
