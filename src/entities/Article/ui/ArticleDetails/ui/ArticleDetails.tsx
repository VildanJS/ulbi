import { FC, memo, useEffect } from 'react'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text/'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './ArticleDetails.module.scss'
import {
  getArticleDetailsData, getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../../model/selectors/getCounter/getArticleDetails'
import { fetchArticleById } from '../../../model/services/fetchArticleById'
import ArticleDetailsReducer from '../../../model/slice/articleSlice'
import { ArticleBlock } from '../../../model/types'
import { CodeBlock } from '../../CodeBlock'
import { ImageBlock } from '../../ImageBlock'
import { TextBlock } from '../../TextBlock'
import { IArticleDetails } from '../types'

const reducers: ReducersList = {
  articleDetails: ArticleDetailsReducer
}

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
  case 'CODE':
    return <CodeBlock key={block.id} block={block} />
  case 'TEXT':
    return <TextBlock key={block.id} block={block} />
  case 'IMAGE':
    return <ImageBlock key={block.id} block={block} />
  default:
    return null
  }
}

export const ArticleDetails: FC<IArticleDetails> = memo((props) => {
  const { t } = useTranslation()
  const { className, id } = props
  const articleDetailsClass = classNames(className, cls.articleDetails)
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(PROJECT_NAME  !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content
  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align={'center'}
        text={t('Please try to reload the page')}
        title={t('Something went wrong')}
      />
    )
  } else {
    content = (
      <>
        <Avatar
          src={article?.img}
          alt={'аватар пользовтеля'}
          className={cls.avatar} />
        <Text title={article?.title} text={article?.subtitle} />
        <div>
          <div className={cls.infoWrapper}>
            <EyeIcon className={cls.icon} />
            <Text text={String(article?.views)} />
          </div>
          <div className={cls.infoWrapper}>
            <CalendarIcon className={cls.icon} />
            <Text text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBlock)}
        </div>
      </>
    )
  }

  return (
    <DynamicModuleLoader
      removeAfterUnmount={true}
      reducers={reducers}
    >
      <div className={articleDetailsClass}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
