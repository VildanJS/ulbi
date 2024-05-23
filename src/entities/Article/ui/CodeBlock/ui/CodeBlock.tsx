import { FC, memo } from 'react'

import classNames from 'classnames'

import { Code } from '@/shared/ui/deprecated/Code'

import cls from './CodeBlock.module.scss'
import { ICodeBlock } from '../types'

export const CodeBlock: FC<ICodeBlock> = memo((props) => {
  const { className, block } = props
  const codeBlockClass = classNames(className, cls.codeBlock)

  return (
    <div className={codeBlockClass}>
      <Code text={block.code} />
    </div>
  )
}
)
