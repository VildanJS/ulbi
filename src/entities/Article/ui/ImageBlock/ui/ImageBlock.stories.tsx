import {ComponentStory, ComponentMeta} from '@storybook/react'
import {ImageBlock} from './ImageBlock'

export default {
  title: 'widgets/ImageBlock',
  component: ImageBlock,
} as ComponentMeta<typeof ImageBlock>

const Template: ComponentStory<typeof ImageBlock> = (args) => <ImageBlock {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
