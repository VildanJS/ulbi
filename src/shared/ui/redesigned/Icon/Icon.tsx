import React, { memo } from 'react'

import classNames from 'classnames'

import cls from './Icon.module.scss'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  width?: number,
  height?: number
}
export const Icon = memo((props: IconProps) => {
  const { className, Svg, width = 32, height = 32, ...otherProps } = props

  return (
    <Svg
      width={width} height={height}
      className={classNames( cls.Icon, className)}
      {...otherProps}
    />
  )
})
