import {ComponentStory, ComponentMeta} from '@storybook/react'
import {CommentList} from './CommentList'

export default {
  title: 'widgets/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
