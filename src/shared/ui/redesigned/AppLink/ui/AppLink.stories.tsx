import { Meta, StoryObj } from '@storybook/react'

import { AppLink } from './AppLink'
import { RouterDecorator } from '../../../../config/storybook/RouterDecorator'

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  decorators: [RouterDecorator],
}
export default meta

type Story = StoryObj<typeof AppLink>
export const Primary: Story = {
  render: (args) => (
    <AppLink
      {...args}
      to='/'
    >
      Default Link
    </AppLink>
  ),
}
