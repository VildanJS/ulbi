import { FC, memo } from 'react'

import classNames from 'classnames'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ImageBlock.module.scss'
import { IImageBlock } from '../types'


export const ImageBlock: FC<IImageBlock> = memo((props) => {
  const { className, block } = props
  const imageBlockClass = classNames(className, cls.imageBlock)

  return (
    <VStack align={'Center'} gap={'8'} className={imageBlockClass}>
      <img className={cls.img} src={block.src} alt='' />
      {block.title && <Text size={'S'} title={block.title} align='center' />}
    </VStack>
  )
})
