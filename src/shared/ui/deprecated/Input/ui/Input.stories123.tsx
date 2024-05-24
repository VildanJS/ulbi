import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
}
export default meta

type Story = StoryObj<typeof Input>


export const Default: Story = {
  render: (args) => (
    <Input {...args} />
  )
}

Default.args = {
  placeholder: 'Example placeholder',
  value: 'Example value',
  onChange: action('onSelectStar')
}
