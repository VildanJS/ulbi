import React, { FC, useCallback } from 'react'
import cls from './ArticlesFilters.module.scss'
import { IArticlesFilter } from '../types'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { ArticlesFiltersSchema } from '../model/types'
import { ArticlesSortFields, ArticleType } from '@/entities/Article'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import { setOrder, setSearch, setSort, setType } from '../model/slices/articlesFilterSlice'
import { useSelector } from 'react-redux'
import {
  getArticlesFiltersOrder, getArticlesFiltersSearch,
  getArticlesFiltersSort, getArticlesFiltersType
} from '@/features/articles/filtersAndView/ArticlesFilters/model/selectors/getArticlesFilters'
import { setPage } from '@/pages/ArticlesPage/model/slices/ArticlesPageSlice'
import fetchArticles from '@/pages/ArticlesPage/model/services/fetchArticles'
import { useDebounce } from '@/shared/utils/hooks/useDebounce/useDebounce'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'


const tabs: TabItem[] = [
  {
    value: 'ALL',
    content: t('Все статьи'),
  },
  {
    value: 'IT',
    content: t('Айти'),
  },
  {
    value: 'ECONOMICS',
    content: t('Экономика'),
  },
  {
    value: 'SCIENCE',
    content: t('Наука'),
  },
]

const ArticlesFilters: FC<IArticlesFilter> = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()


  const currentOrder = useSelector(getArticlesFiltersOrder)
  const currentSort = useSelector(getArticlesFiltersSort)
  const currentSearch = useSelector(getArticlesFiltersSearch)
  const currentType = useSelector(getArticlesFiltersType)

  const fetchArticlesHandler = useCallback(() => {
    dispatch(fetchArticles({ replace: true }))
  }, [dispatch])
  const debouncedFetchArticlesHandler = useDebounce(fetchArticlesHandler, 500)


  const onSortSelect = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSort(e.currentTarget.value))
    fetchArticlesHandler()
  }

  const onOrderSelect = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setOrder(e.currentTarget.value))
    dispatch(setPage(1))
    fetchArticlesHandler()
  }

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.currentTarget.value))
    dispatch(setPage(1))
    debouncedFetchArticlesHandler()
  }

  const onChangeType = useCallback((tab: TabItem) => {
    dispatch(setType(tab.value))
    dispatch(setPage(1))
    fetchArticlesHandler()
  }, [])


  const initialValues: ArticlesFiltersSchema = {
    sort: currentSort,
    order: currentOrder,
    search: currentSearch,
    type: currentType
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        order: Yup.string(),
        sort: Yup.string(),
        search: Yup.string(),
      })}
      onSubmit={async (values) => {
        dispatch(fetchArticles({}))
        setTimeout(() => alert(JSON.stringify(values, null, 2)), 500)
      }}
    >
      {
        ({
          // values,
          // errors,
          // touched,
          // handleChange,
          // handleBlur,
          // handleSubmit,
          isSubmitting,
          // resetForm,
        }) => (
          <Form className={cls.articlesFilter}>
            <div className={cls.filtersWrapper}>
              <Field
                as="select"
                className={cls.sort}
                id="sort"
                type="text"
                name="sort"
                placeholder={t('Упорядочить по')}
                onChange={onSortSelect}
              >
                <option value={ArticlesSortFields.VIEWS}>{t('Просмотры')}</option>
                <option value={ArticlesSortFields.CREATED}>{t('Создание')}</option>
                <option value={ArticlesSortFields.TITLE}>{t('Заголовок')}</option>
              </Field>

              <Field
                as="select"
                className={cls.sort}
                id="order"
                type="text"
                name="order"
                placeholder={t('Сортировать')}
                onChange={onOrderSelect}
              >
                <option value={'asc'}>{t('По возрастанию')}</option>
                <option value={'desc'}>{t('По убыванию')}</option>
              </Field>
            </div>
            <div className={cls.searchWrapper}>
              <label htmlFor="search">{t('Search')}</label>
              <Field name="search">
                {({
                  // field, // { name, value, onChange, onBlur }
                  // form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }: any) => (
                  <>
                    <input
                      className={cls.search} type="text" placeholder={t('Search')}
                      value={currentSearch} onChange={onChangeSearch} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>

              {/*<Field onChange={onChangeSearch} as="select" className={cls.search} id="search" type="text" name="search"*/}
              {/*  placeholder="Search an article" />*/}
              <button className={cls.button} disabled={isSubmitting}>{t('Submit')}</button>
              <ErrorMessage className={cls.search} name="search" component="div" />
            </div>
            <Tabs value={currentType} tabs={tabs} onTabClick={onChangeType} />


          </Form>
        )
      }
    </Formik>
  )
}
export default ArticlesFilters
