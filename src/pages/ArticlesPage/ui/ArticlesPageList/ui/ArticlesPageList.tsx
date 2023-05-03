import React from 'react'
import cls from './ArticlesPageList.module.scss'
import classNames from 'classnames'
import { Components } from 'react-virtuoso'
import { useSelector } from 'react-redux'
import { getArticlesPageView } from '../../../model/selectors/articlesPageSelectors'

export const ArticlesPageList: Components['List'] = React.forwardRef(({ style, children }, ref) => {
  const view = useSelector(getArticlesPageView)
  const ListClass = classNames(cls.wrapper, cls[view])
  return (
    <div className={ListClass} style={style} ref={ref}>
      {children}
    </div>
  )
})


