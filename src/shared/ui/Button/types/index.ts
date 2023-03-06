import { ButtonHTMLAttributes } from 'react'

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

type ButtonSize = 'M' | 'L' | 'XL';

export enum EButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemes,
  square?: boolean,
  size?: ButtonSize,
  disabled?: boolean
}

export type {
  IButton
}
