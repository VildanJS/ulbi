import {ComponentStory, ComponentMeta} from '@storybook/react'
import {AddNewComment} from './AddNewComment'

export default {
  title: 'widgets/AddNewComment',
  component: AddNewComment,
} as ComponentMeta<typeof AddNewComment>

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
