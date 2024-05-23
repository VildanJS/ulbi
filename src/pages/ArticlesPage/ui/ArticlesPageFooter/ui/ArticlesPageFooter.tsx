
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import { ArticleViewType } from '@/entities/Article'
import { SkeletonItem } from '@/entities/Article'

import cls from './ArticlesPageFooter.module.scss'
import { getArticlesPageHasMore } from '../../../model/selectors/articlesPageSelectors'


export const ArticlesPageFooter = (view: ArticleViewType, isLoading?: boolean) => {
  const hasMore = useSelector(getArticlesPageHasMore)

  const numberOfCards = 6
  const numberOfFullCards = 3

  const skeletonsClass = classNames(cls.wrapper, cls[view])

  const renderSkeleton = (view: ArticleViewType, isLoading?: boolean) => {
    const skeletons = new Array(view === 'cards' ? numberOfCards : numberOfFullCards)
      .fill(null)
      .map((item, index) => (<SkeletonItem key={index} view={view} />))

    return (
      <div className={skeletonsClass}>
        {skeletons}
      </div>
    )
  }

  return () => (hasMore && view !== 'cards' ) ? renderSkeleton(view, isLoading) : null
}

