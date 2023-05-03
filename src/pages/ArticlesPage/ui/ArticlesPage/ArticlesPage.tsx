import React, { FC, useCallback, useEffect, useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import cls from './ArticlesPage.module.scss'
import { IArticlesPage } from '../../types'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
import articlesPageReducer, { getArticles, initState, setView } from '../../model/slices/ArticlesPageSlice'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchNextArticles } from '../../model/services/fetchNextArticles'
import { Page } from '@/shared/ui/Page'
import { initedFetchArticles } from '../../model/services/initedFetchArticles'
import {
  Components,
  ListItem,
  ListRange,
  Virtuoso,
  VirtuosoGrid,
  VirtuosoGridHandle,
  VirtuosoHandle
} from 'react-virtuoso'
import { IArticle } from '@/entities/Article'

import { ArticleItem } from '@/entities/Article/ui/ArticleItem'
import { setScrollPosition } from '@/features/scrollPositionSaver'
import { StateSchema } from '@/app/providers/StoreProvider'
import {
  getScrollPositionByPath
} from '@/features/scrollPositionSaver/services/selectors/getScrollPosition'
import { ArticlesPageHeader } from '../ArticlesPageHeader'
import { ArticlesPageFooter } from '../ArticlesPageFooter'
import { ArticlesPageList } from '../ArticlesPageList'

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<IArticlesPage> = (props) => {
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)

  const view = useSelector(getArticlesPageView)
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initedFetchArticles(searchParams))
  }, [])

  const loadNextPart = useCallback((index: number) => {
    dispatch(fetchNextArticles())
  }, [dispatch])

  const { pathname } = useLocation()
  const currentScrollOnPage = useSelector(
    (state: StateSchema) => getScrollPositionByPath(state, pathname)
  )
  const currentScrollOnPageGrid = useSelector(
    (state: StateSchema) => getScrollPositionByPath(state, pathname + 'Grid')
  )

  const onItemsRendered = (items: ListItem<IArticle>[]) => {
    const lastItemIndex = items[items.length - 1]?.index
    if (lastItemIndex) {
      dispatch(setScrollPosition({
        position: lastItemIndex,
        path: pathname
      }))
    }
  }
  const onRangeChanged = (range: ListRange) => {
    const lastItemIndex = range?.endIndex
    console.log('-> lastItemIndex', lastItemIndex)

    if (lastItemIndex > 0) {
      dispatch(setScrollPosition({
        position: lastItemIndex,
        path: pathname + 'Grid'
      }))
    }
  }

  const virtuosoHandleRef = useRef<VirtuosoHandle>(null)
  const virtuosoGridHandleRef = useRef<VirtuosoGridHandle>(null)

  useEffect(() => {
    setTimeout(() => virtuosoGridHandleRef?.current?.scrollToIndex(
      {
        align: 'center',
        index: currentScrollOnPageGrid,
        behavior: 'auto'
      }), 50)
  }, [])

  const renderArticle = (index: number, article: IArticle) => {
    return <ArticleItem key={article.id} article={article} view={view} />
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page>
        {
          view === 'full'
            ? (
              <Virtuoso
                ref={virtuosoHandleRef}
                initialTopMostItemIndex={currentScrollOnPage}
                itemsRendered={onItemsRendered}
                components={{
                  Header: ArticlesPageHeader,
                  List: ArticlesPageList,
                  Footer: ArticlesPageFooter(view, isLoading)
                }}
                style={{ height: '100%' }}
                endReached={loadNextPart}
                data={articles}
                itemContent={renderArticle}
              />)
            : (
              <VirtuosoGrid
                ref={virtuosoGridHandleRef}
                rangeChanged={onRangeChanged}
                components={{
                  Header: ArticlesPageHeader,
                  List: ArticlesPageList,
                  Footer: ArticlesPageFooter(view, isLoading)
                }}
                style={{ height: '100%' }}
                endReached={loadNextPart}
                data={articles}
                itemContent={renderArticle}
              />
            )

        }

      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticlesPage
