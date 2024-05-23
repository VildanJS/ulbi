import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsRecommendationsIsLoading = (
  state: StateSchema,
) => {
  return state.articleDetailsRecommendations?.isLoading
}
export const getArticleDetailsRecommendationsError = (state: StateSchema) => {
  return state.articleDetailsRecommendations?.error
}
