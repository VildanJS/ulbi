import { ComponentStory, ComponentMeta } from '@storybook/react'
import {RouterDecorator} from '@/shared/config/storybook/RouterDecorator'

import { AppLink } from './AppLink'
import { AppLinkThemes } from '../types'

export default {
  title: 'Shared/AppLink',
  component: AppLink,
  decorators: [RouterDecorator],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const primaryAppLink = Template.bind({})
primaryAppLink.args = {
  children: 'Some text',
  theme: AppLinkThemes.PRIMARY
}
export const invertedAppLink = Template.bind({})
invertedAppLink.args = {
  children: 'Some text',
  theme: AppLinkThemes.INVERTED
}
