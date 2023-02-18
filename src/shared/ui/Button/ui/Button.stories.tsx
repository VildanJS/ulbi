import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { ButtonThemes } from '../types'

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear',
  theme: ButtonThemes.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  theme: ButtonThemes.OUTLINE
}
