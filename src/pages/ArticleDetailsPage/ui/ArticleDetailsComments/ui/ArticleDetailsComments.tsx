import { FC } from 'react'
import cls from './ArticleDetailsComments.module.scss'
import { IArticleDetailsComments } from '../types'
import classNames from 'classnames'
import { Text } from '@/shared/ui/Text/Text'
import { ArticleDetailsAddComment } from '@/features/articles/articleDetails/ArticleDetailsAddComment'
import { ArticleDetailsCommentList } from '@/features/articles/articleDetails/ArticleDetailsCommentList'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


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
