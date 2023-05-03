import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppSelect } from './AppSelect'

export default {
  title: 'widgets/AppSelect',
  component: AppSelect,
} as ComponentMeta<typeof AppSelect>

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
