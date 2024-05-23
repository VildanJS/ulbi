// import { DeepPartial } from '@reduxjs/toolkit'
// import { Story } from '@storybook/react'
//
// import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// import { loginReducer } from '@/features/AuthByUserName/testing'
// import profileReducer from '@/features/profile/testing'
// import { ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
//
// const defaultAsyncReducers: ReducersList = {
//   loginForm: loginReducer,
//   profile: profileReducer,
// }
//
// export const StoreDecorator = (
//   state: DeepPartial<StateSchema>,
//   asyncReducers?: ReducersList,
// ) => (StoryComponent: Story) => (
//   <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
//     <StoryComponent />
//   </StoreProvider>
// )
