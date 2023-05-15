import { FC, useCallback } from 'react'

import classNames from 'classnames'

import CopyIcon from '@/shared/assets/icons/copy.svg'

import cls from './Code.module.scss'
import { AppButton } from '../../AppButton'
import { ICode } from '../types'

export const Code: FC<ICode> = (props) => {
  const { className, text } = props
  const codeClass = classNames(className, cls.code)

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={codeClass}>
      <AppButton onPress={onCopy} className={cls.copyBtn} theme='outline'>
        <CopyIcon className={cls.copyIcon} />
      </AppButton>
      <code>
        {text}
      </code>
    </pre>
  )
}
