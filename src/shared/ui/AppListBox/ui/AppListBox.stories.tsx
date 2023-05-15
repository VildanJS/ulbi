import { Meta, StoryObj } from '@storybook/react'

import { AppListBox } from './AppListBox'
import { AppItem } from '../../AppSelect'

const meta: Meta<typeof AppListBox> = {
  title: 'Shared/AppListBox',
  component: AppListBox,
}
export default meta

type Story = StoryObj<typeof AppListBox>
export const Default: Story = {
  render: () => (
    <AppListBox>
      <AppItem>Aardvark</AppItem>
      <AppItem>Cat</AppItem>
      <AppItem>Dog</AppItem>
      <AppItem>Kangaroo</AppItem>
      <AppItem>Panda</AppItem>
      <AppItem>Snake</AppItem>
    </AppListBox>
  )
}
