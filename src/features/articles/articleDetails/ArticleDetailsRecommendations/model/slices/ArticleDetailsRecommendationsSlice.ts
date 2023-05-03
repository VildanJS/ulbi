import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsRecommendationsSchema } from '../types'
import { IArticle } from '@/entities/Article'
import { StateSchema } from '@/app/providers/StoreProvider'
import fetchRecommendedArticles
  from '../services/fetchRecommendedArticles'


const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

export const getArticleDetailsRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState()
)

export const ArticleDetailsRecommendationsSlice = createSlice({
  name: 'ArticleDetailsRecommendations',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedArticles.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchRecommendedArticles.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchRecommendedArticles.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        recommendationsAdapter.setAll(state, action.payload)
      })
  },
})


// export const { setArticleDetailsRecommendations } = ArticleDetailsRecommendationsSlice.actions

export default ArticleDetailsRecommendationsSlice.reducer
