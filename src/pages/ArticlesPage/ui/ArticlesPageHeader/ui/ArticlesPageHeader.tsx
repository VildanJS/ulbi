import { useCallback } from 'react'

import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './ArticlesPageHeader.module.scss'
import { getArticlesPageView } from '../../../model/selectors/articlesPageSelectors'
import { setView } from '../../../model/slices/ArticlesPageSlice'


export const ArticlesPageHeader = () => {

  const view = useSelector(getArticlesPageView)

  const dispatch = useAppDispatch()

  const changeViewHandler = useCallback((view: string) => {
    dispatch(setView(view)
    )
  }, [dispatch])

  return (
    <div className={cls.articlesPageHeader}>

    </div>
  )
}
