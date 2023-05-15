import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsCommentListIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
