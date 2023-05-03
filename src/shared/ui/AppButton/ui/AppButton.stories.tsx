import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppButton } from './AppButton'

export default {
  title: 'widgets/AppButton',
  component: AppButton,
} as ComponentMeta<typeof AppButton>

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
