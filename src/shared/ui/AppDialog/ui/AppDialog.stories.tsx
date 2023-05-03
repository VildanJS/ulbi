import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppDialog } from './AppDialog'

export default {
  title: 'widgets/AppDialog',
  component: AppDialog,
} as ComponentMeta<typeof AppDialog>

const Template: ComponentStory<typeof AppDialog> = (args) => <AppDialog {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
