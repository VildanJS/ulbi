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

export const Medium = Template.bind({})
Medium.args = {
  children: 'Medium',
  size: 'M',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  size: 'L',
}

export const SuperLarge = Template.bind({})
SuperLarge.args = {
  children: 'SuperLarge',
  size: 'XL',
}

export const ClearMedium = Template.bind({})
ClearMedium.args = {
  children: 'Clear Medium',
  theme: ButtonThemes.CLEAR,
  size: 'M'
}


export const ClearLarge = Template.bind({})
ClearLarge.args = {
  children: 'Clear Large',
  theme: ButtonThemes.CLEAR,
  size: 'L'
}

export const ClearSuperLarge = Template.bind({})
ClearSuperLarge.args = {
  children: 'Clear Super Large',
  theme: ButtonThemes.CLEAR,
  size: 'XL'
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  theme: ButtonThemes.OUTLINE
}

export const SquareMedium = Template.bind({})
SquareMedium.args = {
  children: '>',
  square: true,
  size: 'M',
  theme: ButtonThemes.BACKGROUND_INVERTED
}

export const SquareLarge = Template.bind({})
SquareLarge.args = {
  children: '>',
  square: true,
  size: 'L',
  theme: ButtonThemes.BACKGROUND_INVERTED
}

export const SquareSuperLarge = Template.bind({})
SquareSuperLarge.args = {
  children: '>',
  square: true,
  size: 'XL',
  theme: ButtonThemes.BACKGROUND_INVERTED
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  theme: ButtonThemes.OUTLINE,
  disabled: true
}
