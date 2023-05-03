import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs'

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Normal = Template.bind({})
Normal.args = {
  tabs: [
    {
      value: 'ALL',
      content: 'tab 1',
    },
    {
      value: 'SCIENCE',
      content: 'tab 2',
    },
    {
      value: 'ECONOMICS',
      content: 'tab 3',
    },
  ],
  value: 'ECONOMICS',
  onTabClick: action('onTabClick'),
}
