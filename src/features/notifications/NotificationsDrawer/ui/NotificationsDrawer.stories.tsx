import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationsDrawer } from './NotificationsDrawer'

export default {
  title: 'widgets/NotificationsDrawer',
  component: NotificationsDrawer,
} as ComponentMeta<typeof NotificationsDrawer>

const Template: ComponentStory<typeof NotificationsDrawer> = (args) => <NotificationsDrawer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
