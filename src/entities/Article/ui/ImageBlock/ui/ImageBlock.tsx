import { FC, memo } from 'react'

import classNames from 'classnames'

import { Text } from '@/shared/ui/Text'

import cls from './ImageBlock.module.scss'
import { IImageBlock } from '../types'


export const ImageBlock: FC<IImageBlock> = memo((props) => {
  const { className, block } = props
  const imageBlockClass = classNames(className, cls.imageBlock)

  return (
    <div className={imageBlockClass}>
      <img className={cls.img} src={block.src} alt='' />
      {block.title && <Text title={block.title} align='center' />}
    </div>
  )
})
