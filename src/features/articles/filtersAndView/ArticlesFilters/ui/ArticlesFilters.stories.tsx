import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticlesFilters from './ArticlesFilters'

export default {
  title: 'widgets/articlesFilter',
  component: ArticlesFilters,
} as ComponentMeta<typeof ArticlesFilters>

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />

export const Primary = Template.bind({})
Primary.args = {

}
