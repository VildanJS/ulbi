import {ComponentStory, ComponentMeta} from '@storybook/react'
import {CodeBlock} from './CodeBlock'

export default {
  title: 'widgets/CodeBlock',
  component: CodeBlock,
} as ComponentMeta<typeof CodeBlock>

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
