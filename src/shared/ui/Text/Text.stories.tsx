import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Text, TextThemes} from './Text'

export default {
  title: 'Shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },


} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Example title',
  text: 'Example text'
}

export const OnlyWithTitle = Template.bind({})
OnlyWithTitle.args = {
  title: 'Example title',
}

export const OnlyWithText = Template.bind({})
OnlyWithText.args = {
  text: 'Example text',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Example title',
  text: 'Example text',
  theme: TextThemes.ERROR
}
