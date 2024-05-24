import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Shared/Tabs',
  component: Tabs,
}
export default meta

type Story = StoryObj<typeof Tabs>

const tabs = [
  {
    value: 'ALL',
    content: 'tab 1',
  },
  {
    value: 'SCIENCE',
    content: 'tab 2',
  },
  {
    value: 'ECONOMICS',
    content: 'tab 3',
  },
]

export const Default: Story = {
  render: () => (
    <Tabs
      tabs={tabs}
      value='ECONOMICS'
      onTabClick={action('onTabClick')}
    />
  )
}
