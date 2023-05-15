import { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
}
export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: () => (
    <Text
      title='Example title'
      text='Example text'
    />
  )
}

export const OnlyWithText: Story = {
  render: () => (
    <Text text='Example text' />
  )
}

export const OnlyWithTitle: Story = {
  render: () => (
    <Text title='Example title' />
  )
}

export const Error: Story = {
  render: () => (
    <Text
      title='Example title'
      text='Example text'
      theme='error'
    />
  )
}
