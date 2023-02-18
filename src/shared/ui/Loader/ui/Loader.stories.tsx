import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loader } from './Loader'
import { LoaderThemes } from '../types'

export default {
  title: 'Shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: LoaderThemes.PRIMARY
}

export const Inverted = Template.bind({})
Inverted.args = {
  theme: LoaderThemes.INVERTED
}
