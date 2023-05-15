import { Meta, StoryObj } from '@storybook/react'

import { Flex } from './Flex'


const meta: Meta<typeof Flex> = {
  title: 'Shared/Flex',
  component: Flex,
}
export default meta

type Story = StoryObj<typeof Flex>

export const Default: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    ),
  },
}

export const RowGap4: Story = {
  args: {
    ...Default.args,
    gap: '4',
  },
}

export const RowGap8: Story = {
  args: {
    ...Default.args,
    gap: '8',
  },
}

export const RowGap16: Story = {
  args: {
    ...Default.args,
    gap: '16',
  },
}

export const Column: Story = {
  args: {
    ...Default.args,
    direction: 'Column',
  },
}

export const ColumnGap16: Story = {
  args: {
    ...Default.args,
    direction: 'Column',
    gap: '16',
  },
}

export const ColumnAlignEnd: Story = {
  args: {
    ...Default.args,
    direction: 'Column',
    align: 'End',
  },
}
