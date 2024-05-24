import { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Shared/Loader',
  component: Loader,
}
export default meta

type Story = StoryObj<typeof Loader>

export const Primary: Story = {
  args: {
    theme: 'primary'
  },
}

export const Inverted: Story = {
  args: {
    theme: 'inverted'
  },
}
