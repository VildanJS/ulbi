import { Meta, StoryObj } from '@storybook/react'

import AppButton from './AppButton'

const meta: Meta<typeof AppButton> = {
  title: 'Shared/AppButton',
  component: AppButton,
}
export default meta

type Story = StoryObj<typeof AppButton>
export const Default: Story = {
  render: () => <AppButton>Subscribe</AppButton>
}

export const Inverted: Story = {
  render: () => <AppButton theme='background-inverted'>Inverted</AppButton>
}
export const Outline: Story = {
  render: () => <AppButton theme='outline'>Outline</AppButton>
}

export const Clear: Story = {
  render: () => <AppButton theme='clear'>Clear</AppButton>
}



