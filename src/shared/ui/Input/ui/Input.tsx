import React, { FC, memo, useEffect, useRef, useState } from 'react'
import cls from './Input.module.scss'
import { InputProps } from '../types'

export const Input: FC<InputProps> = memo((props) => {
  const {
    autofocus,
    placeholder,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props


  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const input = useRef<HTMLInputElement>()
  useEffect(() => {
    if(autofocus) input.current?.focus()
  }, [autofocus])



  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e.target.selectionStart || 0)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  return (
    <div className={cls.inputWrapper}>
      {
        placeholder &&
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      }
      <div className={cls.caretWrapper}>
        <input
          {...otherProps}
          ref={input}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
        />
        {
          isFocused &&
          <span
            style={{left: `${caretPosition * 9}px`}}
            className={cls.caret}>
          </span>
        }
      </div>
    </div>
  )
})
