import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleItemList } from './ArticleItemList'

export default {
  title: 'widgets/ArticleItemList',
  component: ArticleItemList,
  parameters: {
    chromatic: { disable: true },
  }
} as ComponentMeta<typeof ArticleItemList>

const Template: ComponentStory<typeof ArticleItemList> = (args) => <ArticleItemList {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary'
}
