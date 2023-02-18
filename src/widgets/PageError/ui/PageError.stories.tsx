import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PageError } from './PageError'

export default {
  title: 'widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Primary = Template.bind({})
Primary.args = {

}

