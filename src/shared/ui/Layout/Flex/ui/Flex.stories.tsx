import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex } from './Flex'
import React from 'react'

export default {
  title: 'shared/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: (
    <>
      <div style={{ width: '100px', height: '100px', background: 'red' }}></div>
      <div style={{ width: '50px', height: '50px', background: 'blue' }}></div>
    </>
  )
}

export const Justify = Template.bind({})
Justify.args = {
  children: (
    <>
      <div style={{ width: '100px', height: '100px', background: 'red' }}></div>
      <div style={{ width: '50px', height: '50px', background: 'blue' }}></div>
    </>
  ),
  justify: 'Center'
}

export const Align = Template.bind({})
Align.args = {
  children: (
    <>
      <div style={{ width: '100px', height: '100px', background: 'red' }}></div>
      <div style={{ width: '50px', height: '50px', background: 'blue' }}></div>
    </>
  ),
  align: 'Center'
}

export const Column = Template.bind({})
Column.args = {
  children: (
    <>
      <div style={{ width: '100px', height: '100px', background: 'red' }}></div>
      <div style={{ width: '50px', height: '50px', background: 'blue' }}></div>
    </>
  ),
  direction: 'Column',
}

export const Row = Template.bind({})
Row.args = {
  children: (
    <>
      <div style={{ width: '100px', height: '100px', background: 'red' }}></div>
      <div style={{ width: '50px', height: '50px', background: 'blue' }}></div>
    </>
  ),
  direction: 'Row',
}


export const Gap = Template.bind({})
Gap.args = {
  children: (
    <>
      <div style={{ width: '100px', height: '100px', background: 'red' }}></div>
      <div style={{ width: '50px', height: '50px', background: 'blue' }}></div>
    </>
  ),
  gap: '16'
}
