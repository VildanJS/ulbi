import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StarRating } from './StarRating'

export default {
  title: 'widgets/StarRating',
  component: StarRating,
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
