import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Code} from './Code'

export default {
  title: 'shared/Code',
  component: Code,
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: '' +
    'export default {\n' +
    '  title: \'shared/Code\',\n' +
    '  component: Code,\n' +
    '} as ComponentMeta<typeof Code>'
}
