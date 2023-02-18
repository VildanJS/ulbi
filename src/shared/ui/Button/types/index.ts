import { ButtonHTMLAttributes } from 'react'

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemes
}

export type {
  IButton
}
