import { FC } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { ArticleDetailsAddComment } from '@/features/articles'
import { ArticleDetailsCommentList } from '@/features/articles'
import { Text } from '@/shared/ui/Text'

import cls from './ArticleDetailsComments.module.scss'
import { IArticleDetailsComments } from '../types'



export const ArticleDetailsComments: FC<IArticleDetailsComments> = (props) => {
  const { className, id } = props
  const articleDetailsCommentsClass = classNames(className, cls.articleDetailsComments)
  const { t: commentsTranslation } = useTranslation('comments')
  return (

    <div className={articleDetailsCommentsClass}>
      <Text title={commentsTranslation('Comments')} />
      <ArticleDetailsAddComment />
      <ArticleDetailsCommentList id={id} />
    </div>
  )
}
