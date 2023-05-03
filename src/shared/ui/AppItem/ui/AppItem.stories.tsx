import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppItem } from './AppItem'

export default {
  title: 'widgets/AppItem',
  component: AppItem,
} as ComponentMeta<typeof AppItem>

const Template: ComponentStory<typeof AppItem> = (args) => <AppItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
