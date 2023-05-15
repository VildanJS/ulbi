// import { ComponentStory, ComponentMeta } from '@storybook/react'
// import ProfilePage from './ProfilePage'
// import { Country, Currency } from '@/shared/const/common'
// import avatar from '@/shared/assets/tests/storybook.jpg'
// import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
// import ProfileReducer from '@/features/profile/getProfileCardData/'
//
// export default {
//   title: 'Pages/ProfilePage',
//   component: ProfilePage,  parameters: {
//     chromatic: { disable: true },
//   }
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof ProfilePage>
//
// const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />
//
// export const Default = Template.bind({})
// Default.args = {}
//
// Default.decorators = [StoreDecorator(
//   {
//     profile: {
//       data: {
//         firstname: 'Vildan',
//         lastname: 'Khabibov',
//         age: '31',
//         city: 'Oktyabrsky',
//         username: 'admin',
//         avatar,
//         currency: Currency.RUB,
//         country: Country.Russia
//       },
//       isLoading: false,
//       error: null
//     },
//   },
//   {
//     articleDetails: ProfileReducer
//   }
// )]
//
