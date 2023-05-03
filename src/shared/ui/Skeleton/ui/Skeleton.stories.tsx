import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Skeleton} from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Circle = Template.bind({})
Circle.args = {
  children: 'Circle',
  border: '50%',
  width: 100,
  height: 100
}

export const Rectangular = Template.bind({})
Rectangular.args = {
  children: 'Rectangular',
  width: '100%',
  height: 200
}
