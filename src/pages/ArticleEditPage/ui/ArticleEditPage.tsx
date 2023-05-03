import { FC } from 'react'
import cls from './ArticleEditPage.module.scss'
import { IArticleEditPage } from '../types'
import classNames from 'classnames'
import { Page } from '@/shared/ui/Page'
import { useParams } from 'react-router-dom'


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
