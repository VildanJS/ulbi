import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Avatar} from './Avatar'
import AvatarImg from './avatar.jpg'

export default {
  title: 'widgets/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  size: 150,
  src: AvatarImg,
}
