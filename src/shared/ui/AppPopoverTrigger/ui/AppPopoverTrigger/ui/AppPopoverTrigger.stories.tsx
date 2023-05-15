import { Meta, StoryObj } from '@storybook/react'

import { AppPopoverTrigger } from './AppPopoverTrigger'

const meta: Meta<typeof AppPopoverTrigger> = {
  title: 'Shared/AppPopover',
  component: AppPopoverTrigger,
}
export default meta

type Story = StoryObj<typeof AppPopoverTrigger>


export const Default: Story = {
  render: () => (
    <AppPopoverTrigger label="AppPopover">
      <h1>App Popover Text</h1>
    </AppPopoverTrigger>
  )
}



