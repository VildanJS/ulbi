// import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { NavbarDeprecated } from './NavbarDeprecated'
// import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
// import profileReducer from '@/features/profile/getProfileCardData'
//
// export default {
//   title: 'widgets/NavbarDeprecated',
//   component: NavbarDeprecated,  parameters: {
//     chromatic: { disable: true },
//   }
// } as ComponentMeta<typeof NavbarDeprecated>
//
// const Template: ComponentStory<typeof NavbarDeprecated> = (args) => <NavbarDeprecated {...args} />
//
// export const LoggedIn = Template.bind({})
// LoggedIn.args = {}
// LoggedIn.decorators = [StoreDecorator({
//   user: {
//     authData: { username: 'admin', id: '1' }
//   },
// }, { profile: profileReducer })]
//
//
// export const LoggedOut = Template.bind({})
// LoggedOut.args = {}
// LoggedOut.decorators = [StoreDecorator({
//   user: {
//     authData: { username: 'admin', id: '1' }
//   }
// })]
