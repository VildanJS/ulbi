import { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'

const meta: Meta<typeof Code> = {
  title: 'Shared/Code',
  component: Code,
}
export default meta

type Story = StoryObj<typeof Code>


export const Default: Story = {
  render: (args) => (
    <Code {...args} />
  )
}

Default.args = {
  text: '' +
    'export default {\n' +
    '  title: \'shared/Code\',\n' +
    '  component: Code,\n' +
    '} as ComponentMeta<typeof Code>'
}
