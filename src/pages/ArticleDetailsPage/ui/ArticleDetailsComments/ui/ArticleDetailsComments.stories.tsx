import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'

export default {
  title: 'widgets/ArticleDetailsComments',
  component: ArticleDetailsComments,
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
