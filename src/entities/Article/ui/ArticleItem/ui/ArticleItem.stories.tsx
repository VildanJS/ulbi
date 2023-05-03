import {ComponentStory, ComponentMeta} from '@storybook/react'
import {ArticleItem} from './ArticleItem'

export default {
  title: 'widgets/ArticleItem',
  component: ArticleItem,
} as ComponentMeta<typeof ArticleItem>

const Template: ComponentStory<typeof ArticleItem> = (args) => <ArticleItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
