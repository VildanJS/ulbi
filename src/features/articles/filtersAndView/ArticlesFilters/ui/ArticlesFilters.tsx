// TODO refactor for setPage and fetchArticles
/* eslint-disable vildan/layer-imports */
import React, { FC, Key, useCallback, useState } from 'react'

import classnames from 'classnames'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { t } from 'i18next'
import { Input, TextField } from 'react-aria-components'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

import { ArticlesSortFields } from '@/entities/Article'
import { setPage } from '@/pages/ArticlesPage'
import { fetchArticles } from '@/pages/ArticlesPage'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { TabItem, Tabs } from '@/shared/ui/deprecated/Tabs'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppItem, AppSelect } from '@/shared/ui/redesigned/Dropdowns/AppSelect'
import { forFormikField } from '@/shared/ui/redesigned/Dropdowns/AppSelect/ui/AppSelect/ui/AppSelect'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/utils/hooks/useDebounce/useDebounce'

import cls from './ArticlesFilters.module.scss'
import {
  getArticlesFiltersOrder,
  getArticlesFiltersSearch,
  getArticlesFiltersSort,
  getArticlesFiltersType,
} from '../model/selectors/getArticlesFilters'
import {
  setOrder,
  setSearch,
  setSort,
  setType,
} from '../model/slices/articlesFilterSlice'
import { ArticlesFiltersSchema } from '../model/types'
import { IArticlesFilter } from '../types'


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
const AppSelectWithFormik = forFormikField(AppSelect)

export const ArticlesFilters: FC<IArticlesFilter> = () => {
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

  const onSortSelect = (key: Key) => {
    dispatch(setSort(key))
    fetchArticlesHandler()
  }

  const onOrderSelect = (key: Key) => {
    dispatch(setOrder(key))
    dispatch(setPage(1))
    fetchArticlesHandler()
  }

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.currentTarget.value))
    dispatch(setPage(1))
    debouncedFetchArticlesHandler()
  }

  const onChangeType = useCallback(
    (tab: TabItem) => {
      dispatch(setType(tab.value))
      dispatch(setPage(1))
      fetchArticlesHandler()
    },
    [dispatch, fetchArticlesHandler],
  )

  const initialValues: ArticlesFiltersSchema = {
    sort: currentSort,
    order: currentOrder,
    search: currentSearch,
    type: currentType,
  }

  const [_isFocused, setIsFocused] = useState(false)

  const SearchClassname = classnames(cls.searchWrapper, { [cls.focused]: _isFocused })

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
      {({ isSubmitting }) => (
        <Card padding={'24'} borderRadius={'round'}>
          <Form className={cls.articlesFilter}>
            <>
              <Field  aria-label={'search'} name='search'>
                {({ meta }: any) => (
                  <TextField
                    aria-label={'search'}
                    className={SearchClassname}
                    onFocusChange={(isFocused: boolean) =>
                      setIsFocused(isFocused)
                    }
                  >
                    <Icon width={40} height={40} Svg={SearchIcon} />
                    <Input
                      aria-label={'search'}
                      className={cls.search}
                      type='text'
                      placeholder={t('Поиск')}
                      value={currentSearch}
                      onChange={onChangeSearch}
                    />
                  </TextField>
                )}
              </Field>
              <ErrorMessage
                className={cls.search}
                name='search'
                component='div'
              />
            </>
            <div className={cls.filtersWrapper}>
              <AppSelectWithFormik
                aria-label={'sort'}
                className={cls.sort}
                id='sort'
                name='sort'
                placeholder={t('Упорядочить по')}
                onSelectionChange={onSortSelect}
              >
                <AppItem id={ArticlesSortFields.VIEWS}>{t('Просмотры')}</AppItem>
                <AppItem id={ArticlesSortFields.CREATED}>{t('Создание')}</AppItem>
                <AppItem id={ArticlesSortFields.TITLE}>{t('Заголовок')}</AppItem>
              </AppSelectWithFormik>

              <AppSelectWithFormik
                aria-label={'order'}
                className={cls.sort}
                id='order'
                name='order'
                placeholder={t('Сортировать')}
                onSelectionChange={onOrderSelect}
              >
                <AppItem id={'asc'}>{t('По возрастанию')}</AppItem>
                <AppItem id={'desc'}>{t('По убыванию')}</AppItem>
              </AppSelectWithFormik>
            </div>
            <Tabs
              className={cls.tabs}
              flexDirection={'Column'}
              value={currentType}
              tabs={tabs}
              onTabClick={onChangeType}
            />
          </Form>
        </Card>

      )}
    </Formik>
  )
}
