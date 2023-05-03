import React, { useCallback } from 'react'
import cls from './ArticlesPageHeader.module.scss'
import { ArticlesFilters } from '@/features/articles/filtersAndView/ArticlesFilters'
import { SwitchArticlesView } from '@/features/articles/filtersAndView/SwitchArticlesView'
import { useSelector } from 'react-redux'
import { getArticlesPageView } from '../../../model/selectors/articlesPageSelectors'
import { setView } from '../../../model/slices/ArticlesPageSlice'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

export const ArticlesPageHeader = () => {

  const view = useSelector(getArticlesPageView)

  const dispatch = useAppDispatch()

  const changeViewHandler = useCallback((view: string) => {
    dispatch(setView(view)
    )
  }, [dispatch])

  return (
    <div className={cls.articlesPageHeader}>
      <ArticlesFilters />
      <SwitchArticlesView view={view} changeViewHandler={changeViewHandler} />
    </div>
  )
}
