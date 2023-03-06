import {ComponentStory, ComponentMeta} from '@storybook/react'
import ProfilePage from './ProfilePage'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'

export default {
  title: 'page/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator({
    profile: {
      isLoading: false,
      readonly: true
    }
  })]
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
