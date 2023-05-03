import { ComponentStory, ComponentMeta } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'

export default {
  title: 'widgets/AdminPanelPage',
  component: AdminPanelPage,
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
