import { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { Text } from '../../Text'


const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
}
export default meta

type Story = StoryObj<typeof Card>
export const Default: Story = {
  render: () => (
    <Card>
      <Text
        title="Title"
        text="Some text" />
    </Card>
  )
}
