import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'
import AvatarImg from './avatar.jpg'

const meta: Meta<typeof Avatar> = {
  title: 'Shared/Avatar',
  component: Avatar,
}
export default meta

type Story = StoryObj<typeof Avatar>


export const Default: Story = {
  render: (args) => (
    <Avatar {...args} />
  )
}
Default.args = {
  size: 150,
  src: AvatarImg,
}
