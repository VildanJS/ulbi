import {ComponentStory, ComponentMeta} from '@storybook/react'
import {TextBlock} from './TextBlock'

export default {
  title: 'widgets/TextBlock',
  component: TextBlock,
} as ComponentMeta<typeof TextBlock>

const Template: ComponentStory<typeof TextBlock> = (args) => <TextBlock {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
