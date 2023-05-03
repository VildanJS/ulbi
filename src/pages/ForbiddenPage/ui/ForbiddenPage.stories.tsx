import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ForbiddenPage } from './ForbiddenPage'

export default {
  title: 'widgets/ForbiddenPage',
  component: ForbiddenPage,
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
