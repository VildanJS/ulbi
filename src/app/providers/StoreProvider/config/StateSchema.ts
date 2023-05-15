import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ProfileSchema } from 'features/profile'

import { ArticleDetailsSchema } from '@/entities/Article'
import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User'
import { ArticlesFiltersSchema } from '@/features/articles'
import { ArticleDetailsRecommendationsSchema } from '@/features/articles'
import { ArticleDetailsCommentsSchema } from '@/features/articles'
import { LoginSchema } from '@/features/AuthByUserName'
import { UISchema } from '@/features/scrollPositionSaver'
import { ArticlesPageSchema } from '@/pages/ArticlesPage'
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
