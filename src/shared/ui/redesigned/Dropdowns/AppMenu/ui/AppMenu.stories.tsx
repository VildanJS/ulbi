import { Meta, StoryObj } from '@storybook/react'

import { AppMenu } from './AppMenu'
import { AppItem } from '../../AppSelect'

const meta: Meta<typeof AppMenu> = {
  title: 'Shared/AppMenu',
  component: AppMenu,
}
export default meta

type Story = StoryObj<typeof AppMenu>
export const Default: Story = {
  render: (args, context) => {
    const { theme } = context.globals

    return <AppMenu className={theme} label={'☰'}>
      <AppItem>Aardvark</AppItem>
      <AppItem>Cat</AppItem>
      <AppItem>Dog</AppItem>
      <AppItem>Kangaroo</AppItem>
      <AppItem>Panda</AppItem>
      <AppItem>Snake</AppItem>
    </AppMenu>
  }
}
