import { FC, useCallback, useEffect, useRef } from 'react'

import { useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import {
  ListItem,
  ListRange,
  Virtuoso,
  VirtuosoGrid,
  VirtuosoGridHandle,
  VirtuosoHandle
} from 'react-virtuoso'

import { StateSchema } from '@/app/providers/StoreProvider'
import { IArticle } from '@/entities/Article'
import { ArticleItem } from '@/entities/Article'
import { setScrollPosition } from '@/features/scrollPositionSaver'
import {
  getScrollPositionByPath
} from '@/features/scrollPositionSaver'
import { Page } from '@/shared/ui/Page'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchNextArticles } from '../../model/services/fetchNextArticles'
import { initedFetchArticles } from '../../model/services/initedFetchArticles'
import articlesPageReducer, { getArticles } from '../../model/slices/ArticlesPageSlice'
import { IArticlesPage } from '../../types'
import { ArticlesPageFooter } from '../ArticlesPageFooter'
import { ArticlesPageHeader } from '../ArticlesPageHeader'
import { ArticlesPageList } from '../ArticlesPageList'

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<IArticlesPage> = () => {
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)

  const view = useSelector(getArticlesPageView)
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initedFetchArticles(searchParams))
  }, [dispatch, searchParams])

  const loadNextPart = useCallback((index: number) => {
    dispatch(fetchNextArticles())
  }, [dispatch])

  const { pathname } = useLocation()
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const currentScrollOnPage = useSelector(
    (state: StateSchema) => getScrollPositionByPath(state, pathname)
  )

  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
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

  // eslint-disable-next-line
  useEffect(() => {
    setTimeout(() => virtuosoGridHandleRef?.current?.scrollToIndex(
      {
        align: 'center',
        index: currentScrollOnPageGrid,
        behavior: 'auto'
      }), 50)
    // eslint-disable-next-line
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
