import React from 'react'

import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { Components } from 'react-virtuoso'

import cls from './ArticlesPageList.module.scss'
import { getArticlesPageView } from '../../../model/selectors/articlesPageSelectors'

export const ArticlesPageList: Components['List'] = React.forwardRef(({ style, children }, ref) => {
  const view = useSelector(getArticlesPageView)
  const ListClass = classNames(cls.wrapper, cls[view])
  return (
    <div data-testid="ArticleList" className={ListClass} style={style} ref={ref}>
      {children}
    </div>
  )
})


