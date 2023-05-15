import { InputHTMLAttributes } from 'react'

export enum InputThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string,
  theme?: InputThemes,
  onChange?: (value: string) => void
  autofocus?: boolean,
  readonly?: boolean,
}

export {
  InputProps
}
