import { FC } from 'react'

import classNames from 'classnames'
import { useParams } from 'react-router-dom'

import { Page } from '@/shared/ui/deprecated/Page'

import cls from './ArticleEditPage.module.scss'
import { IArticleEditPage } from '../types'



const ArticleEditPage: FC<IArticleEditPage> = (props) => {
  const { className, children } = props
  const articleEditPageClass = classNames(className, cls.articleEditPage)
  const { id } = useParams<{id: string}>()
  const isEdit = Boolean(id)

  return (
    <Page className={articleEditPageClass}>
      {isEdit
        ? `ARTICLE EDIT PAGE with ${id} ID`
        : 'NEW ARTICLE'
      }

    </Page>
  )
}

export default ArticleEditPage
