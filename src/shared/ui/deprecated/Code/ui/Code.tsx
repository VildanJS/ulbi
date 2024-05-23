import { FC, useCallback } from 'react'

import classNames from 'classnames'
import CopyIcon from '@/shared/assets/icons/copy.svg'

import { Icon } from '@/shared/ui/redesigned/Icon'

import cls from './Code.module.scss'
import { AppButton } from '../../../redesigned/AppButton'
import { ICode } from '../types'
/**
 * @deprecated
 **/
export const Code: FC<ICode> = (props) => {
  const { className, text } = props
  const codeClass = classNames(className, cls.code)

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={codeClass}>
      <AppButton variant='clear' onPress={onCopy} className={cls.copyBtn} >
        <Icon width={24} height={24} Svg={CopyIcon}></Icon>
      </AppButton>
      <code>
        {text}
      </code>
    </pre>
  )
}
