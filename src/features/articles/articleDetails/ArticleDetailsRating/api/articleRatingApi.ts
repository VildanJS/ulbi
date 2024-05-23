import { IRating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRatingArg {
  userId: string
  articleId: string
}

interface RateArticleRatingArg {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

interface updateArticleRatingArg {
  userId: string
  articleId: string
  rate: number
  feedback?: string
  id: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticleRating: build.mutation<void, RateArticleRatingArg>({
      query: (arg) => {
        console.log('-> arg', arg)
        return {
          url: '/article-ratings',
          method: 'POST',
          body: arg,
        }
      },
    }),
    updateArticleRating: build.mutation<void, updateArticleRatingArg>({
      query: (arg) => {
        return {
          url: `/article-ratings/${arg.id}`,
          method: 'PATCH',
          body: arg,
        }
      },
    }),
  }),
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticleRatingMutation =
  articleRatingApi.useRateArticleRatingMutation
export const useUpdateArticleRatingMutation =
  articleRatingApi.useUpdateArticleRatingMutation
