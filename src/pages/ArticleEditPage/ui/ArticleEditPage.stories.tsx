import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'

export default {
  title: 'widgets/ArticleEditPage',
  component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}

