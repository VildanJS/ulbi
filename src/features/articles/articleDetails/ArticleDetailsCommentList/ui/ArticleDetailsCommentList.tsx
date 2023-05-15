import { FC, PropsWithChildren, useEffect } from 'react'

import classNames from 'classnames'
import { useSelector } from 'react-redux'

import { CommentList } from '@/entities/Comment'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './ArticleDetailsCommentList.module.scss'
import {
  getArticleDetailsCommentListIsLoading
} from '../model/selectors/getArticleDetailsCommentListIsLoading'
import fetchCommentsByArticleId from '../model/services/fetchCommentsByArticleId'
import articleDetailsCommentsReducer, { getArticleDetailsComments } from '../model/slices/articleDetailsCommentsSlice'



const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}


interface ArticleDetailsCommentListProps extends PropsWithChildren {
  className?: string,
  id?: string
}
export const ArticleDetailsCommentList: FC<ArticleDetailsCommentListProps> = (props) => {
  const { id } = props
  const comments = useSelector(getArticleDetailsComments.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentListIsLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(PROJECT_NAME  !== 'storybook') {
      id && dispatch(fetchCommentsByArticleId(id))
    }
  }, [dispatch, id])

  const { className } = props
  const commentListClass = classNames(className, cls.commentList)

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <CommentList isLoading={isLoading} comments={comments} className={commentListClass} />
    </DynamicModuleLoader>
  )
}
