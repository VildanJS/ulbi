import { Meta, StoryObj } from '@storybook/react'

import { AppTextField } from './TextField'

const meta: Meta<typeof AppTextField> = {
  title: 'Shared/AppTextField',
  component: AppTextField,
}
export default meta

type Story = StoryObj<typeof AppTextField>

export const Default: Story = {
  render: () => (
    <AppTextField />
  )
}
