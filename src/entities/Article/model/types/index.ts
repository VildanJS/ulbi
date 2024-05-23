import { IUser } from '@/entities/User'

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS' | 'ALL'
export type ArticlesType = [ArticleType]

type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE'
interface ArticleBaseBlock {
  id: string
  type: ArticleBlockType
}

export enum ArticlesSortFields {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export interface ArticleTextBlock extends ArticleBaseBlock {
  type: 'TEXT'
  paragraphs: string[]
  title?: string
}
export interface ArticleCodeBlock extends ArticleBaseBlock {
  type: 'CODE'
  code: string
}
export interface ArticleImageBlock extends ArticleBaseBlock {
  type: 'IMAGE'
  title: string
  src: string
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock

export type ArticleViewType = 'cards' | 'full'

export interface IArticle {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticlesType
  blocks: ArticleBlock[]
  user: IUser
}

export interface ArticleSchema {
  value: number
}
