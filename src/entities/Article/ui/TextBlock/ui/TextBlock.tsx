import { FC, memo } from 'react'
import cls from './TextBlock.module.scss'
import { ITextBlock } from '../types'
import classNames from 'classnames'
import { Text } from '@/shared/ui/Text/Text'


const TextBlock: FC<ITextBlock> = memo((props) => {
  const { className, block } = props
  const textBlockClass = classNames(className, cls.textBlock)
  const { title, paragraphs } = block

  return (
    <div className={textBlockClass}>
      {title && (
        <Text size={'S'} title={title} className={cls.title} />
      )}
      {paragraphs && paragraphs.map((paragraph: string, index) => (
        <Text key={index} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  )
})

export { TextBlock }
