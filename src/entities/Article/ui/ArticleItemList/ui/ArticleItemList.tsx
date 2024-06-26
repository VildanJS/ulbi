import { FC } from 'react'

import classNames from 'classnames'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticleItemList.module.scss'
import { ArticleViewType, IArticle } from '../../../model/types'
import { ArticleItem } from '../../ArticleItem/ui/ArticleItem'
import { SkeletonItem } from '../../ArticleItem/ui/ArticleItemSkeleton'
import { IArticleItemList } from '../types'


const numberOfCards = 8
const numberOfFullCards = 3
const renderSkeletons = (view: ArticleViewType) => {
  return new Array(view === 'cards' ? numberOfCards : numberOfFullCards)
    .fill(null)
    .map((item, index) => (<SkeletonItem key={index} view={view} />))
}

export const ArticleItemList: FC<IArticleItemList> = (props) => {
  const {
    className,
    isLoading,
    articles,
    view = 'cards',
  } = props
  const articleItemListClass = classNames(className, cls.articleItemList, cls[view])

  const renderArticle = (article: IArticle) => {
    return <ArticleItem key={article.id} article={article} view={view} />
  }

  if (isLoading) {
    return (
      <div className={articleItemListClass}>
        {renderSkeletons(view)}
      </div>
    )
  }


  // return <Virtuoso
  //   style={{ height: '100%' }}
  //   data={articles}
  //   itemContent={renderArticle}
  // />
  //


  return (
    <HStack max justify={'Center'} gap={'32'} className={articleItemListClass}>
      {
        articles.length > 0
          ? articles.map(renderArticle)
          : null
      }
    </HStack>
  )
}
