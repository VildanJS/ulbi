import { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'Shared/Page',
  component: Page,
  decorators: [RouterDecorator]
}
export default meta

type Story = StoryObj<typeof Page>

export const Default: Story = {
  args: {
    children: 'Some text'
  },
}
