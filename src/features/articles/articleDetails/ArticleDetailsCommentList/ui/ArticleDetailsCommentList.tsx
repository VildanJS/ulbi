import React, { FC, PropsWithChildren, Suspense, useEffect } from 'react'
import classNames from 'classnames'
import articleDetailsCommentsReducer, { getArticleDetailsComments } from '../model/slices/articleDetailsCommentsSlice'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
import { CommentList } from '@/entities/Comment'
import cls from './ArticleDetailsCommentList.module.scss'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsCommentListIsLoading
} from '../model/selectors/getArticleDetailsCommentListIsLoading'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import fetchCommentsByArticleId from '@/features/articles/articleDetails/ArticleDetailsCommentList/model/services/fetchCommentsByArticleId'



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
  }, [dispatch])

  const { className } = props
  const commentListClass = classNames(className, cls.commentList)

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <CommentList isLoading={isLoading} comments={comments} className={commentListClass} />
    </DynamicModuleLoader>
  )
}
