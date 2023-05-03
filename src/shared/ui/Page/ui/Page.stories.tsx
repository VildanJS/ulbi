import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Page } from './Page'

export default {
  title: 'widgets/Page',
  component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
