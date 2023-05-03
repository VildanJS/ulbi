import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppListBox } from './AppListBox'

export default {
  title: 'widgets/ListBox',
  component: AppListBox,
} as ComponentMeta<typeof AppListBox>

const Template: ComponentStory<typeof AppListBox> = (args) => <AppListBox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
