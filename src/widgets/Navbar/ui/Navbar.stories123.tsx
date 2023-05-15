// import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { Navbar } from './Navbar'
// import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
// import profileReducer from '@/features/profile/getProfileCardData'
//
// export default {
//   title: 'widgets/Navbar',
//   component: Navbar,  parameters: {
//     chromatic: { disable: true },
//   }
// } as ComponentMeta<typeof Navbar>
//
// const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />
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
