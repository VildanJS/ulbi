import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { StarRating } from './StarRating'

const meta: Meta<typeof StarRating> = {
  title: 'Shared/StarRating',
  component: StarRating,
}
export default meta

type Story = StoryObj<typeof StarRating>
export const Default: Story = {
  render: () => (
    <StarRating
      onSelectStar={action('onSelectStar')}
    />
  )
}
