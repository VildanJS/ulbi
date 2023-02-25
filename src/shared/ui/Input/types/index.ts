import { InputHTMLAttributes } from 'react'

export enum InputThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string,
  theme?: InputThemes,
  value?: string,
  onChange?: (value: string) => void
  autofocus?: boolean
}

export {
  InputProps
}
