import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppPopover } from './AppPopover'

export default {
  title: 'shared/Popover',
  component: AppPopover,
} as ComponentMeta<typeof AppPopover>

const Template: ComponentStory<typeof AppPopover> = (args) => <AppPopover {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}
