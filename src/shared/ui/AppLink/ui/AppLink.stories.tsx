import { Meta, StoryObj } from '@storybook/react'

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'

import { AppLink } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  decorators: [RouterDecorator],
}
export default meta

type Story = StoryObj<typeof AppLink>
export const Default: Story = {
  render: (args) => (
    <AppLink
      {...args}
      to='/'
    >
      Default Link
    </AppLink>
  ),
}
