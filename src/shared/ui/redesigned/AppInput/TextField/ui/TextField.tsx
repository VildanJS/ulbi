import { FC, useState } from 'react'

import classnames from 'classnames'
import { TextField, Label, InputProps } from 'react-aria-components'

import cls from './TextField.module.scss'
import { AppInput } from '../../Input'


type InputHeight = 's' | 'm' | 'l';
interface AppInputProps extends InputProps {
  className?: string
  label?: string
  formikfield?: string
  height?: InputHeight;
}

export const AppTextField: FC<AppInputProps> = (props) => {
  const { className, formikfield, height = 's', label, ...inputProps } = props

  const [_isFocused, setIsFocused] = useState(false)

  const TextFieldClassname = classnames(cls.textField, className)
  const InputClassname = classnames(cls.input, cls[height], { [cls.focused]: _isFocused })

  return (
    <TextField
      className={TextFieldClassname}
      onFocusChange={(isFocused: boolean) => setIsFocused(isFocused)}
    >
      {label && <Label>{label}</Label>}
      <AppInput className={InputClassname} {...inputProps} />
    </TextField>
  )
}
