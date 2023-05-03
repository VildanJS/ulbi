import { AxiosInstance } from 'axios'
import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUserName'
import { ProfileSchema } from '@/features/profile/getProfileCardData'
import { ArticleDetailsSchema } from '@/entities/Article'
import { ArticleDetailsCommentsSchema } from '@/features/articles/articleDetails/ArticleDetailsCommentList'
import { ArticlesPageSchema } from '@/pages/ArticlesPage'
import { UISchema } from '@/features/scrollPositionSaver'
import { ArticlesFiltersSchema } from '@/features/articles/filtersAndView/ArticlesFilters'
import { ArticleDetailsRecommendationsSchema } from '@/features/articles/articleDetails/ArticleDetailsRecommendations'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  articlesFilters: ArticlesFiltersSchema;
  [rtkApi.reducerPath]: ReturnType<typeof  rtkApi.reducer>

  // async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: Reducer<CombinedState<StateSchema>>,
  add: (key: StateSchemaKey, reducer: Reducer) => void,
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: IReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
