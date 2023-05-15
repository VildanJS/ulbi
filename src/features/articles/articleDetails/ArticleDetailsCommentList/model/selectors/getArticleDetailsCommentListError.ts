import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsCommentListError = (state: StateSchema) => state.articleDetailsComments?.error
