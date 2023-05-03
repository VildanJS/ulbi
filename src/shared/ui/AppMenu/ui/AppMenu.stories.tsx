import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppMenu } from './AppMenu'

export default {
  title: 'widgets/AppMenu',
  component: AppMenu,
} as ComponentMeta<typeof AppMenu>

const Template: ComponentStory<typeof AppMenu> = (args) => <AppMenu {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
